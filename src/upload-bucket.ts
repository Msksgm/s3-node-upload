import * as fs from "fs";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
});

const uploadFIle = (fileName) => {
  const fileContent = fs.readFileSync(fileName);

  const params = {
    Bucket: process.env.bucketName,
    Key: "hoge.jpg",
    Body: fileContent,
  };

  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded sucess. ${data.Location}`);
  });
};

uploadFIle(
  "./www.google.com_search_q=hoge&oq=hoge&aqs=chrome..69i57l2j69i59l2j69i60l4.301j0j7&sourceid=chrome&ie=UTF-8.png"
);
