const { SendMessageCommand, SQSClient, DeleteMessageCommand } = require("@aws-sdk/client-sqs");
const client = new SQSClient({
  region: "us-west-2",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  }
 });

 const test = async () =>{
    const messageAttributes = {
        siteId: {
            DataType: 'String', StringValue: "11111"
        },
        retry: {
          DataType: 'Number', StringValue: String(1)
        }
      }
      const messageAttributes2 = {
        siteId: {
            DataType: 'String', StringValue: "22222"
        },
        retry: {
            DataType: 'Number', StringValue: String(1)
        }
      }
    const command = new SendMessageCommand({
        QueueUrl: "https://sqs.us-west-2.amazonaws.com/779218540092/site-billing-queue-dev3.fifo",
        MessageAttributes: messageAttributes,
        MessageGroupId: "retryId",
        MessageDeduplicationId: '71', 
        MessageBody: 'Hello, Phuong'
      });
      const command2 = new SendMessageCommand({
        QueueUrl: "https://sqs.us-west-2.amazonaws.com/779218540092/site-billing-queue-dev3.fifo",
        MessageAttributes: messageAttributes2,
        MessageGroupId: "retryId",
        MessageDeduplicationId: '91', 
        MessageBody:'Hello, Phuong'
      });
      // const response = await client.send(params);
      try {
        // Send a message to the queue
        const response = await client.send(command);
        const response2 = await client.send(command2);
        console.log("Message Response:", response);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    
 }

 test()