import { errorConstants } from "./error_constants.js";

export class CustomHttpError extends Error {
    title: String;
    constructor(public message: string, public statusCode: number = 500) {
        super();

        switch (statusCode) {
            case errorConstants.VALIDATION_ERROR:
                this.title = "VALIDATION_ERROR"
                break;

            case errorConstants.FORBIDDEN:
                this.title = "FORBIDDEN"
                break;

            case errorConstants.NOT_FOUND:
                this.title = "NOT_FOUND"
                break;

            case errorConstants.UNAUTHORIZED:
                this.title = "UNAUTHORIZED"
                break;

            case errorConstants.SERVER_ERROR:
                this.title = "SERVER_ERROR"
                break;

            default:
                this.title = "UNKNOWN_ERROR"
                break;
        }
        Object.setPrototypeOf(this, CustomHttpError.prototype);
    }
}
