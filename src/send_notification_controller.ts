import { customAsyncErrorHandler } from "./custom_async_handler.js";
import { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";



export const sendNotification = customAsyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { tokens, token, ...restData } = req.body || {};
    let extractedTokens = new Set();
    if (token) {
        if (Array.isArray(token)) {
            token.forEach(element => {
                extractedTokens.add(element)
            });
        }
        else {
            extractedTokens.add(token)

        }
    }

    if (tokens) {
        if (Array.isArray(tokens)) {
            tokens.forEach(element => {
                extractedTokens.add(element)
            });
        }
        else {
            extractedTokens.add(tokens)
        }
    }



    if (extractedTokens.size > 0) {
        const messageData = { "tokens": [...extractedTokens], ...restData };
        console.table(messageData);
        const result = await admin.messaging().sendEachForMulticast(messageData)
        return res.status(200).json({ ...result })
    } else {
        const result = await admin.messaging().send(restData)
        return res.status(200).json({ "result": result })
    }


});