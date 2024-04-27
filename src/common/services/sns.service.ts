import * as AWS from "aws-sdk";

AWS.config.update({ region: "us-east-2" });

export class SnsService {
  publish(message) {
    const params = {
      Message: message /* required */,
      TopicArn: "arn:aws:sns:us-east-2:891377301642:order",
    };

    const publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
      .publish(params)
      .promise();

    publishTextPromise
      .then(function (data) {
        console.log(
          `Message ${params.Message} sent to the topic ${params.TopicArn}`,
        );
        console.log("MessageID is " + data.MessageId);
      })
      .catch(function (err) {
        console.error(err, err.stack);
      });
  }
}
