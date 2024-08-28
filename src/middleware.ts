import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Load the environment variables
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const secretKey = process.env.CLERK_SECRET_KEY;

// Ensure the publishableKey and secretKey are available
if (!publishableKey) {
  throw new Error('Missing Clerk publishableKey. Please add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY to your environment variables.');
}

if (!secretKey) {
  throw new Error('Missing Clerk secretKey. Please add CLERK_SECRET_KEY to your environment variables.');
}

const isHomeRoute = createRouteMatcher(["/"]);

export default clerkMiddleware({ publishableKey, secretKey }, (auth, req) => {
  const { userId } = auth();

  // if there is user and home route is accessed, redirect to dashboard or any other protected route
  if (userId && isHomeRoute(req)) {
    return NextResponse.rewrite(new URL("/portal", req.url));
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
