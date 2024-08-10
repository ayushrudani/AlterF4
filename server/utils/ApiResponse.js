class ApiSucceessResponse {
    constructor(statusCode, data, message = "Success"  , token = null) {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
        this.token = token
    }
}
class ApiErrorResponse {
    constructor(statusCode,  message= "Something went wrong",) {
        this.statusCode = statusCode
        this.message = message
        this.success = statusCode < 400
    }
}

module.exports =  {ApiSucceessResponse ,ApiErrorResponse };