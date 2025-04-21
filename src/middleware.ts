import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/about",
  "/contact",
  "/blog",
  "/news",
  "/news/(.*)",
  "/videos(.*)",
  "/animations(.*)",
  "/images(.*)",
  "/logos(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/resources(.*)",
  "/robots(.*)",
  "/robots.txt(.*)",
  "/sitemap(.*)",
  "/sitemap.xml(.*)",
  "/api/uploadthing(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|.*\\..*).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
