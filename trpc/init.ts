import { initTRPC, TRPCError } from "@trpc/server";
import { cache } from "react";
import superjson  from "superjson";
import { auth } from "@clerk/nextjs/server";
import  { prisma } from "@/server/db";
import { ZodError } from "zod";

export const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  const req  = await auth();

  const USER_ID = req.userId

  if (!USER_ID) {
    return { prisma };
  }

  return { 
    prisma,
    userId: USER_ID 
  };
});

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<typeof createTRPCContext>().create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});




// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */
export const publicProcedure = t.procedure;

/**
 * We won't always necessarily have auth but we can make a procedure that enforces
 * that we do. Easiest way to do that is to extend the public procedure with a new middleware.
 * It's not the same as a middleware in nextjs that runs on an edge function. It is
 * just a process that runs before the main request processing. Super helpful for things like
 * attaching auth and making sure users are actually authenticated.
 *
 * We attached auth earlier so we will simply verify here.
 */
const enforceUserIsAuthed = t.middleware(async ({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Not authenticated",
    });
  }
  return next({
    ctx: {
      userId: ctx.userId,
    },
  });
});

export const privateProcedure = t.procedure.use(enforceUserIsAuthed);
