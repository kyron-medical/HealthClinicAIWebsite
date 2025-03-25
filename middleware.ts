import { clerkMiddleware, createRouteMatcher, currentUser } from "@clerk/nextjs/server";

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

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  } else if (isAdminRoute(request)) {
    const user = await currentUser();
    if (!user || !user.publicMetadata.role) {
      return new Response("Unauthorized", { status: 401 });
    }
    if (user.publicMetadata.role !== "admin") {
      return new Response("Unauthorized", { status: 401 });
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
