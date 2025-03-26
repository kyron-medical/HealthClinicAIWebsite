import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error'],
    errorFormat: 'minimal',
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma.$extends(withAccelerate());
