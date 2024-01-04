
const { PutObjectCommand, S3Client , GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")
const fs = require("fs")
const client = new S3Client({
    region: "us-west-2",
    credentials: {
      accessKeyId: "",
      secretAccessKey: "",
    }
   });

const testPut = async () =>{
  const file = fs.readFileSync('./file-1.jpg')
  const command = new PutObjectCommand({
    Bucket: "s3phuong",
    Key: "dummy.jpg",
    Body: file,
    ContentType: "image/jpg",

  });
  console.log(file);
  try {
    const url = await getSignedUrl(client, command, { expiresIn: 3600 });
    console.log(url);
    // https://s3phuong.s3.us-west-2.amazonaws.com/hello-prepare.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3K3ILKY6N2SCH7P2%2F20231016%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231016T031556Z&X-Amz-Expires=3600&X-Amz-Signature=2cf16a0678d4199ce09706f7779357a9fbfbe90fe6d7c0f46d17c1e3df0d81c8&X-Amz-SignedHeaders=content-length%3Bhost&x-id=PutObject
  } catch (err) {
    console.error(err);
  }
};
const testGet = async () =>{
  const command = new GetObjectCommand({
    Bucket: "s3phuong",
    Key: "hello-s3.txt",
    Body: "Hello S3!",

  });

  try {
    const url = await getSignedUrl(client, command, { expiresIn: 60 });
    console.log(url);
    // https://s3phuong.s3.us-west-2.amazonaws.com/hello-prepare.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3K3ILKY6N2SCH7P2%2F20231016%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231016T031556Z&X-Amz-Expires=3600&X-Amz-Signature=2cf16a0678d4199ce09706f7779357a9fbfbe90fe6d7c0f46d17c1e3df0d81c8&X-Amz-SignedHeaders=content-length%3Bhost&x-id=PutObject
  } catch (err) {
    console.error(err);
  }
};
testPut()
// testGet()