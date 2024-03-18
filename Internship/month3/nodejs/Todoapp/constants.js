const ERROR_MESSAGES = {
    _NotFound(str){
        return `${str} not found`;
    },
    _Internal_Server_Error(){
        return `Internal Server Error`;
    },
    _Bad_Request(){
        return `Could not understand the request because of invalid syntax`;
    },
    _Unauthorized(str){
        return `You are not authorized to ${str}`;
    },
    _Conflict(str){
        return `${str} already exists`;
    }
    
}

const SUCCESS_MESSAGES = {
    _Ok(str){
        return `${str} successfully done`;
    }
}

const HTTP_STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500
}

module.exports = {
    ERROR_MESSAGES,
    HTTP_STATUS_CODES,
    SUCCESS_MESSAGES
}