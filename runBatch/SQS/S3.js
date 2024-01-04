// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

// =======================API========================
// Set IAM s3:PutObject
// API gateWay
// config https://us-west-2.console.aws.amazon.com/apigateway/home?region=us-west-2#/apis/i0atkdf8j3/resources/784bje5q38

// Postman
// https://i0atkdf8j3.execute-api.us-west-2.amazonaws.com/dev/s3phuong/file_2.jpg

// =======================SDK========================
// Set IAM
// {
//     "Version": "2012-10-17",
//     "Statement": [
//         {
//             "Sid": "VisualEditor0",
//             "Effect": "Allow",
//             "Action": [
//                 "s3:DeleteObject",
//                 "s3:GetObject",
//                 "s3:GetObjectAcl",
//                 "s3:ListBucket",
//                 "s3:PutObject",
//                 "s3:PutObjectAcl",
//                 "s3:ListAllMyBuckets"
//             ],
//             "Resource": [
//                 "arn:aws:s3:::*"
//             ]
//         }
//     ]
// }

const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");
const client = new S3Client({
    region: "us-west-2",
    credentials: {
      accessKeyId: "",
      secretAccessKey: "",
    }
   });

const test = async () =>{
  const command = new PutObjectCommand({
    Bucket: "s3phuong",
    Key: "hello-s3-new.txt",
    Body: "Hello S3!",
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

test()