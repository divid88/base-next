import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default auth((req) => {
  const currentPath = req.nextUrl.pathname;

  // Redirect to login page if user is not authenticated
  if (!req.auth) {
    return NextResponse.redirect(
      new URL(`/account/login?next=${currentPath}`, req.url)
    );
  }
});
console.log("middlwear done")
// Manage list of protected routes
export const config = {
  matcher: ["/account/profile"],
};

