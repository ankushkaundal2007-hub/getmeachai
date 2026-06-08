import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import Login from "@/models/Login";
import connectDB from "@/lib/Mongodb";
import { SessionProvider } from "next-auth/react";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  
callbacks: {
  async signIn({ user, account }) {
    try {
     
      if (account.provider !== "github") {
        return true;
      }

      await connectDB();

      const existingUser = await Login.findOne({
        email: user.email,
      });

      if (!existingUser) {
        await Login.create({
          name: user.name,
          email: user.email,
          image: user.image,
          username: user.name?.split(" ")[0].toLowerCase(),
        });
        return true;
      }
      else{
        return true;
      }
      
    } catch (error) {
      console.error(error);
      return false;
    }
  },
},

});

export { handler as GET, handler as POST };