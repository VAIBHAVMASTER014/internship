const registration = [
  { userId: 1, id: 111, title: "delectus aut autem", completed: false },
  {
    userId: 2,
    id: 1,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  { userId: 3, id: 1, title: "user id is 3", completed: true },
  { userId: 4, id: 1, title: "et porro tempora", completed: true },
  { userId: 2, id: 2, title: "updated title", completed: true },
  { userId: 1, id: 4, title: "user id is 1 with id 4", completed: true },
];

const d =
registration
    .filter((todos) => todos.userId === 1)
    .find((todo) => todo.id === 111) || false;
console.log(d);
