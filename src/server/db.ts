import { PrismaClient } from "@prisma/client";
import { env } from "../../env.mjs";


const envState = process.env.NODE_ENV 

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      envState === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (envState !== "production") globalForPrisma.prisma = prisma;
