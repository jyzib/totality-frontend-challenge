import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:['/',  "/api/PropertyListings","/api/UserAuth"]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};