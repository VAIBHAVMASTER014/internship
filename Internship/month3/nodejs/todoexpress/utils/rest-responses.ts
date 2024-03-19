const {HTTP_STATUS_CODES, ERROR_MESSAGES} = require("../assets/constants/index")

export const ERROR = (message: string, statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, data?: any) => {
let finalStatusCode = statusCode
    return {
        type: "ERROR",
        message: message,
        statusCode: finalStatusCode,
        data: data,
    }
}

export const SUCCESS = (message: string, statusCode = HTTP_STATUS_CODES.OK, data?: any) => {
    let finalStatusCode = statusCode
        return {
            type: "SUCCESS",
            message: message,
            statusCode: finalStatusCode,
            data: data,
        }
    }