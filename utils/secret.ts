// import { SecretsManager } from "aws-sdk";

// const secretsManager = new SecretsManager({
//   region: process.env.AWS_REGION || "us-east-1", // Ensure region is set
// });

// interface DatabaseCredentials {
//   username: string;
//   password: string;
//   host: string;
//   port: number;
//   database?: string;
//   dbname: string;
//   [key: string]: unknown;
// }

// export async function getDatabaseCredentials(): Promise<DatabaseCredentials> {
//   if (!process.env.SECRET_ARN) {
//     throw new Error("SECRET_ARN environment variable is not set");
//   }

//   const data = await secretsManager
//     .getSecretValue({ SecretId: process.env.SECRET_ARN })
//     .promise();

//   if (!data.SecretString) {
//     throw new Error("SecretString not found in the response");
//   }
//   return JSON.parse(data.SecretString) as DatabaseCredentials;
// }

