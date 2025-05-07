import { SecretsManager } from "aws-sdk";

const secretsManager = new SecretsManager();

export async function getDatabaseCredentials() {
  
  if (!process.env.SECRET_ARN) {
    throw new Error("SECRET_ARN environment variable is not set");
  }
  
  const data = await secretsManager
  
    .getSecretValue({ SecretId: process.env.SECRET_ARN })
    .promise();

  if (!data.SecretString) {
    throw new Error("SecretString not found in the response");
  }
  return JSON.parse(data.SecretString);
}
