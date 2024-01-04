const { DeleteMessageCommand, SQSClient, ReceiveMessageCommand  } = require("@aws-sdk/client-sqs");
// const client = new SQSClient({
//   region: "us-west-2",
//   credentials: {
//     accessKeyId: "",
//     secretAccessKey: "",
// }
//  });

 const test = async () =>{

    const command = new ReceiveMessageCommand({
        QueueUrl: "https://sqs.us-west-2.amazonaws.com/779218540092/site-billing-queue-dev2",
        MessageAttributes: ["All"],
        MaxNumberOfMessages: 10,
        WaitTimeSeconds: 1
      });
    
      // const response = await client.send(params);
      try {
        // Send a message to the queue
        const response = await client.send(command);
        console.log("Message Response:", response);
        for (const record of response.Messages) {

          const messageAttributes = record.MessageAttributes;
          console.log('SQS message body', record.Body)
          console.log('SQS messageAttributes', messageAttributes)
          await client.send(
            new DeleteMessageCommand({
              QueueUrl: "https://sqs.us-west-2.amazonaws.com/779218540092/site-billing-queue-dev2",
              ReceiptHandle: record.ReceiptHandle
            })
          )
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    
 }

 test()