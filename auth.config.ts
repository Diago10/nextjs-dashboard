import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = request.nextUrl;
      
      if (pathname.startsWith("/dashboard") && !isLoggedIn) {
        // Redirect unauthenticated users trying to access protected routes
        return false;
      }
      
      return true; // Allow access to public routes
    },
    async redirect({ url, baseUrl }) {
      // Redirect to /dashboard after successful login
      if (url === baseUrl || url === `${baseUrl}/login`) {
        return `${baseUrl}/dashboard`;
      }
      return url;
    },
  },
  providers: [
    // Example provider configuration (replace with your actual providers)
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_CLIENT_ID!,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    // }),
  ],
};

// Middleware for handling redirects
export function middleware(req: Request) {
  const url = new URL(req.url);
  const pathname = url.pathname;
  
  if (pathname.startsWith("/dashboard") && !req.headers.get("cookie")?.includes("next-auth.session-token")) {
    // Redirect unauthenticated users to login page
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next(); // Proceed as normal
}
