import { NextFunction, Request, Response } from "express";
import { CustomHttpError } from "./custom_http_error.js";


export const expressErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    let statusCode: number = 500;
    if (err instanceof CustomHttpError) {
        statusCode = err.statusCode;
    }

    return res.status(statusCode).send({ ...err });
}