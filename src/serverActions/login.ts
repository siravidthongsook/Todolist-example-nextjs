"use server"

import { signIn } from "@/auth"

export async function processLogin(formdata: FormData) {
    try {
        await signIn("credentials", {redirect: false, username: formdata.get("username"), password: formdata.get("password")})
        return 1
    }
    catch {
        return 0
    }
}
