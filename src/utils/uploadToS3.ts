import AWS from "aws-sdk";

export const uploadFileToS3WithCreds = async (
  file: any
): Promise<string | null> => {
  const S3_BUCKET = process.env.NEXT_PUBLIC_APP_S3_BUCKET;
  const REGION = "us-east-2";

  AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_APP_AWS_SECRET_KEY
  });

  const s3 = new AWS.S3({
    region: REGION
  });
  if (!S3_BUCKET) {
    throw new Error("S3_BUCKET environment variable is required");
  }

  const params: AWS.S3.Types.PutObjectRequest = {
    Bucket: S3_BUCKET,
    Key: file.name,
    Body: file,
    ContentType: file.type
  };

  try {
    const upload = await s3.upload(params).promise();
    return upload.Location;
  } catch (error: any) {
    return error;
  }
};
