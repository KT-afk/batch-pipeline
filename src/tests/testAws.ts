import { GetCallerIdentityCommand, STSClient } from "@aws-sdk/client-sts";
import 'dotenv/config';

async function main() {
  try {
    const client = new STSClient({ region: process.env.AWS_REGION });
    const command = new GetCallerIdentityCommand({});
    const response = await client.send(command);
    console.log("✅ AWS Credentials work! Identity:", response);
  } catch (err) {
    console.error("❌ AWS Credentials not working:", err);
  }
}

main();
