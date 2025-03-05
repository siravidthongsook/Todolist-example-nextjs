import { db } from "@/db"
import { compare } from "bcrypt-ts"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                const { username, password } = credentials

                if ((!username) || (!password)) {
                    console.log("username or password invalid format")
                    return null
                }
                // logic to verify if the user exists
                const user = await db.query.usersTable.findFirst({
                    where: (u, {eq}) => eq(u.username, username as string)
                })

                if (!user) {
                    console.log("User not found")
                    // No user found, so this is their first attempt to login
                    // Optionally, this is also the place you could do a user registration
                    return null
                }

                const userresponse = {id: user.id.toString(), email: user.email, name: user.name}
                if (await compare(credentials.password as string, user.password)) return userresponse
                console.log("password not correct")
                return null
            },
        }),
    ],
})
