import { NextFunction, Request, Response } from "express";
import { CustomHttpError } from "./custom_http_error.js";


export const customAsyncErrorHandler = (requestHandler: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => {
            console.error(error);
            next(new CustomHttpError(error.message, error.status ?? 500));
        });
    }
}