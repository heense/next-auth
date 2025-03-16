import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  pages: {
    signIn: "/login",
    signOut: "/signout",
  },
  session: {
    // Set session to last for 30 days
    maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
    updateAge: 24 * 60 * 60, // Refresh session every 24 hours
  },
  callbacks: {
    jwt: async ({ token, account }) => {
      // Initial sign in
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
      }

      // Return previous token if not expired
      const currentTime = Math.floor(Date.now() / 1000);
      if (
        typeof token.expiresAt === "number" &&
        currentTime < token.expiresAt
      ) {
        return token;
      }

      // Token has expired, try to refresh it
      // For GitHub, we'd need to implement custom refresh logic if needed
      // Note: GitHub's OAuth tokens don't expire by default
      return token;
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
        accessToken: token.accessToken,
      },
    }),
  },
});
