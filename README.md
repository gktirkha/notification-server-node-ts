# Firebase Notification Server Using Node And Firebase Admin

this project demonstrates creating an express server and sending a notification using fcm tokens

sample request
```json
{
    "token": "f31vmSf8Qy2N57_33C9cf3:APA91bHBaz7yyRrKQTr_25mLNK2OVlBjdMqM8ux8kQwaeQcsXE6XnOhio7Tp5-CABTFTSbV1vBqqfIVj9Qd9eUdqNi9oojq8FdOWI-l1CU9Xw16-Xb4ZHVTycOM7nIRudIAmMkU6fjbm",
    "priority": "high",
    "notification": {
        "title": "Payment Request",
        "body": "Tap to pay for your booking request."
    },
    "data": {
        "title": "Payment Request",
        "body": "Tap to pay for your booking request.",
        "type": "payment_request"
    },
    "content_available": true,
    "apns": {
        "payload": {
            "aps": {
                "mutable-content": 1,
                "content-available": 1
            }
        }
    }
}
```

> Pre requisites

service account key from google cloud console (file path to be put in [ecosystem.config.cjs](./ecosystem.config.cjs))