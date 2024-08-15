import express from "express";
import { expressErrorHandler } from "./express_error_handler.js";
import admin from "firebase-admin";
import { sendNotification } from "./send_notification_controller.js";

admin.initializeApp();
const app = express();
app.use(express.json());

app.post("/", sendNotification);

app.use(expressErrorHandler);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server running on port http://localhost:${port}`);
});