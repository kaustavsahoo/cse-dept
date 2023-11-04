import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async signIn({ user }) {
      const branch = user.email.slice(4, 7).toLowerCase();
      const allowed = ["ucp", "uai"];
      const isAllowedToSignIn = allowed.includes(branch);

      if (isAllowedToSignIn) {
        return true
      } else {
        return '/unauthorized';
      }
    }
  }
};

const handler = NextAuth(config);

export { handler as GET, handler as POST };