import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  AWS_REGION: process.env.AWS_REGION!,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME!,
  DATABASE_URL: process.env.DATABASE_URL!,
};