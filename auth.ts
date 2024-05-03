import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import Google from "next-auth/providers/google";
import { cert } from "firebase-admin/app";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
      profile(profile) {
        return { ...profile, role: profile.role ?? "user" };
      },
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
    }),
  }),
  callbacks: {
    session({ session, user }) {
      if (user) {
        session.user.role = user.role;
      }
      return session;
    },
  },
});
