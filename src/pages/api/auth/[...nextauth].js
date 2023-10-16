import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
        // ...add more providers here
    ],
    pages: {
        signIn: '/login',
        // signOut: '/logout',
        // error: '/auth/error',
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return account;
        },
        async redirect({ url, baseUrl }) {
            // if (url.startsWith("/")) return `${baseUrl}${url}`
            // else if (new URL(url).origin === baseUrl) return url
            // return baseUrl
            return '/onboarding'
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.id = user.id;
            }
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({session, token }) {
            session.accessToken = token.accessToken
            session.user.id = token.id
            return session
        },
    },
}

export default NextAuth(authOptions)