import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { getDatabaseCredentials } from "utils/secret";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const credentials = await getDatabaseCredentials();

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: `postgresql://${credentials.username}:${credentials.password}@${credentials.host}:${credentials.port}/${credentials.dbname}`,
      },
    },
    log: ["error"],
    errorFormat: "minimal",
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma.$extends(withAccelerate());
