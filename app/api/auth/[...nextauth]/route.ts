import { db } from "@/app/_lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import { Adapter } from "next-auth/adapters"
import GooogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GooogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
})
export { handler as GET, handler as POST }
