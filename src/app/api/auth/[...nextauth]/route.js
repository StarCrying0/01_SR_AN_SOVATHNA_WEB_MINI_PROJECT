import { loginService, registerService } from "@/app/services/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const Authentication = {
  providers: [
    CredentialsProvider({
      async authorize(userInfo) {
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password,
        };
        const login = await loginService(newUserInfo);
        if (login.status !== 400) {
          return login;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // Adjust this based on your session strategy
  },
  pages: {
    signIn: "/login",
  },
};

const handler = nextAuth(Authentication);
export { handler as GET, handler as POST };

// export const Register = {
//   providers: [
//     CredentialsProvider({
//       async authorize(userInfo) {
//         const newUserInfo = {
//           firstname: userInfo.firstname,
//           lastname: userInfo.lastname,
//           gender: userInfo.gender,
//           profile_url: userInfo.profile_url,
//           email: userInfo.email,
//           password: userInfo.password,
//         };
//         const register = await registerService(newUserInfo);
//         console.log(register.status);
//         if (register.status !== 409) {
//           return register;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       return { ...token, ...user };
//     },
//     async session({ session, token }) {
//       session.user = token;
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt", // Adjust this based on your session strategy
//   },
//   pages: {
//     signIn: "/register",
//   },
// };
// const handlerRegister = nextAuth(Register);
// export { handlerRegister as GET, handlerRegister as POST };
