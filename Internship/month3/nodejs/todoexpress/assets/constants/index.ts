export const ERROR_MESSAGES = {
    _NotFound(str:string){
        return `${str} not found`;
    },
    _Internal_Server_Error(){
        return `Internal Server Error`;
    },
    _Bad_Request(){
        return `Could not understand the request because of invalid syntax`;
    },
    _Unauthorized(str:string){
        return `You are not authorized to ${str}`;
    },
    _Conflict(str:string){
        return `${str} already exists`;
    }
    
}

export const SUCCESS_MESSAGES = {
    _Ok(str:string){
        return `${str} successfully done`;
    }
}

export const HTTP_STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500
}
