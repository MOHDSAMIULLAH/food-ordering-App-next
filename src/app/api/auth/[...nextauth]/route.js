import clientPromise from "@/libs/mongoConnect";
import {UserInfo} from "@/models/UserInfo";
import bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import {User} from '@/models/User';
import NextAuth, {getServerSession} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // const user1 = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        const email = credentials?.email;
        const password = credentials?.password;

        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({email});
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        // if (user1) {
        //   return user1;
        // }
        if (passwordOk) {
          return user;
        }

        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.SECRET,
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       console.log(user,"user jwt");
  //       token.id = user.id;
  //       token.name = user.name;
  //     }
  //     console.log(token,"token jwt");
  //     return token;
  //   },
  // },
  // callbacks: {
  //   async session(session, token) {
  //     // if you need to add more info in session
  //     console.log(token,"token session");
  //     session.user.id = token.id;
  //     session.user.name = token.name;
  //     console.log(session,"session");
  //     return session;
  //   },
  // },
};

export async function isAdmin() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const userInfo = await UserInfo.findOne({email:userEmail});
  if (!userInfo) {
    return false;
  }
  return userInfo.admin;
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }