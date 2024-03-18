const http = require("http");
const url = require("url");
const fs = require("fs");
const { ERROR_MESSAGES, HTTP_STATUS_CODES, SUCCESS_MESSAGES } = require("./constants");


let todoTasks = [];
let registrationData = [];
let currentLoggedUser;

try {
  const data = fs.readFileSync("./Data.json", "utf8");
  todoTasks = data ? JSON.parse(data) : todoTasks;
  const registeredData = fs.readFileSync("./registeredUser.json");
  registrationData = registeredData
    ? JSON.parse(registeredData)
    : registrationData;
} catch (err) {
  console.error(`Error reading todoTasks from file: ${err}`);
}

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "POST":
      const callingPath = url.parse(req.url).pathname;

      if (callingPath.startsWith("/signup")) {
        let signupData = "";
        let userId =
          (registrationData.length > 0 &&
            registrationData.sort((a, b) => a.userId - b.userId) &&
            registrationData[registrationData.length - 1].userId + 1) ||
          1;

        req.setEncoding("utf8");

        req.on("data", (chunk) => {
          const obj = JSON.parse(chunk);
          let temp = { ...obj, userId: userId };
          signupData = JSON.stringify(temp);
        });

        req.on("end", () => {
          try {
            let isAvail =
              registrationData.find(
                (data) => data.email === JSON.parse(signupData).email
              ) || false;
            console.log(registrationData);
            console.log(
              isAvail
            );
            if (isAvail !== false) {
              registrationData.push(JSON.parse(signupData));
              console.log("Registerd data:", signupData);

              fs.writeFileSync(
                "./registeredUser.json",
                JSON.stringify(registrationData)
              );
              res.statusCode = HTTP_STATUS_CODES.OK;
              res.end(SUCCESS_MESSAGES._Ok("Registration"));
            } else {
              res.statusCode = HTTP_STATUS_CODES.CONFLICT;
              res.end(ERROR_MESSAGES._Conflict("Email"));
            }
          } catch (err) {
            res.statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
            res.end(ERROR_MESSAGES._Internal_Server_Error());
          }
        });
      } else if (callingPath.startsWith("/login")) {
        let loginData;
        req.setEncoding("utf8");

        req.on("data", (chunk) => {
          loginData = chunk;
        });
        req.on("end", () => {
          try {
            let isValid =
              registrationData.find(
                (data) =>
                  data.email === JSON.parse(loginData).email && data.password === JSON.parse(loginData).password
              ) || false;
              console.log("isValid:", isValid)
            currentLoggedUser = isValid.userId;
            if (isValid !== false) {
              res.statusCode = HTTP_STATUS_CODES.OK;
              res.end(SUCCESS_MESSAGES._Ok("Login"));
            } else {
              res.statusCode = HTTP_STATUS_CODES.UNAUTHORIZED;
              res.end(ERROR_MESSAGES._Unauthorized("Login"));
            }
          } catch (err) {
            res.statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
            res.end(ERROR_MESSAGES._InternalServer);
          }
        });
      } else {
        let item = "";
        req.setEncoding("utf8");

        let id =
          (todoTasks.length > 0 &&
            todoTasks.sort((a, b) => a.id - b.id) &&
            todoTasks[todoTasks.length - 1].id + 1) ||
          1;
        req.on("data", (chunk) => {
          let obj = JSON.parse(chunk);
          let temp = { ...obj, id: id, userId: currentLoggedUser };
          item = JSON.stringify(temp);
        });

        req.on("end", () => {
          if (!currentLoggedUser) {
            res.statusCode = HTTP_STATUS_CODES.UNAUTHORIZED;
            res.end(ERROR_MESSAGES._Unauthorized("add new task"));
          } else {
            todoTasks.push(JSON.parse(item));
            console.log("created tasks:", item);
            try {
              fs.writeFileSync("./Data.json", JSON.stringify(todoTasks));
              res.statusCode = HTTP_STATUS_CODES.OK;
              res.end(SUCCESS_MESSAGES._Ok());
            } catch (err) {
              res.statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
              res.end(SUCCESS_MESSAGES.INTERNAL_SERVER_ERROR);
            }
          }
        });
      }
      break;
    case "GET":
      const readpath = url.parse(req.url).pathname;
      const readId = parseInt(readpath.slice(1), 10);
      if (!currentLoggedUser) {
        res.statusCode = HTTP_STATUS_CODES.UNAUTHORIZED;
        res.end(ERROR_MESSAGES._Unauthorized("read todo tasks"));
      } else {
        if (todoTasks.length === 0) {
          res.statusCode = HTTP_STATUS_CODES.NOT_FOUND;
          res.end(ERROR_MESSAGES._NotFound("Todos are"));
        } else {
          if (readId) {
            let availReadId =
              todoTasks
                .filter((todos) => todos.userId === currentLoggedUser)
                .find((todo) => todo.id === readId) || false;

            if (availReadId) {
              res.statusCode = HTTP_STATUS_CODES.OK;
              res.end(JSON.stringify(availReadId));
            } else {
              res.statusCode = HTTP_STATUS_CODES.NOT_FOUND;
              res.end(ERROR_MESSAGES._NotFound("Id is"));
            }
          } else {
            res.statusCode = HTTP_STATUS_CODES.OK;
            todoTasks.forEach((item, i) => {
              res.write(`${JSON.stringify(item)}\n`);
            });
            res.end();
          }
        }
      }

      break;
    case "DELETE":
      const path = url.parse(req.url).pathname;
      const i = parseInt(path.slice(1), 10);
      if (!currentLoggedUser) {
        res.statusCode = HTTP_STATUS_CODES.UNAUTHORIZED;
        res.end(ERROR_MESSAGES._Unauthorized("Delete todo"));
      } else {
        if (isNaN(i)) {
          res.statusCode = HTTP_STATUS_CODES.BAD_REQUEST;
          res.end(ERROR_MESSAGES._Bad_Request());
        } else {
          let availableIdObj =
            todoTasks
              .filter((todos) => todos.userId === currentLoggedUser)
              .find((todo) => todo.id === i) || false;
          let index = todoTasks.findIndex(todo => todo===availableIdObj);
          try {
            if (!isNaN(index)) {
              res.statusCode = HTTP_STATUS_CODES.OK;
              todoTasks.splice(index, 1);
              fs.writeFileSync("./Data.json", JSON.stringify(todoTasks));
              res.end(SUCCESS_MESSAGES._Ok("ToDo delete operation"));
            } else {
              res.statusCode = HTTP_STATUS_CODES.NOT_FOUND;
              res.end(ERROR_MESSAGES._NotFound("Delete Id"));
            }
          } catch (err) {
            res.statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
            res.end(ERROR_MESSAGES._InternalServer());
          }
        }
      }
      break;
    case "PUT":
      const pathPut = url.parse(req.url).pathname;
      const updateId = parseInt(pathPut.slice(1), 10);
      let itemPut = "";

      if (!currentLoggedUser) {
        res.statusCode = HTTP_STATUS_CODES.UNAUTHORIZED;
        res.end(ERROR_MESSAGES._Unauthorized("Update ToDo"));
      } else {
        if (isNaN(updateId)) {
          res.statusCode = HTTP_STATUS_CODES.BAD_REQUEST;
          res.end(ERROR_MESSAGES._Bad_Request);
        } else {
          req.on("data", (chunk) => {
            let obj = JSON.parse(chunk);
            let temp = { ...obj, id: updateId, userId: currentLoggedUser };
            itemPut = JSON.stringify(temp);
            console.log(itemPut);
          });
          req.on("end", () => {
            let availableIdObj =
              todoTasks
                .filter((todos) => todos.userId === currentLoggedUser)
                .find((todo) => todo.id === updateId) || false;
            let index = todoTasks.findIndex(todos=>todos===availableIdObj)
            console.log(typeof index);
            try {
              if (isNaN(index)) {
                res.statusCode = HTTP_STATUS_CODES.NOT_FOUND;
                res.end(ERROR_MESSAGES._NotFound("Update Id"));
              } else {
                todoTasks[index] = JSON.parse(itemPut);
                fs.writeFileSync("./Data.json", JSON.stringify(todoTasks));
                res.statusCode = HTTP_STATUS_CODES.OK;
                res.end(SUCCESS_MESSAGES._Ok("Update operation"));
              }
            } catch (err) {
              res.statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
              res.end(ERROR_MESSAGES._Internal_Server_Error());
            }
          });
        }
      }

      break;
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Crud server listening on port http://localhost:${port}`);
});
