import readlineSync from "readline-sync";
import { db } from "../db"; // Assuming you use this to save or verify the user data
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";


async function removeUser(username: string) {
    await db.delete(usersTable).where(eq(usersTable.username, username))
}

async function checkUsernameExist(username: string) {
    const user = await db.query.usersTable.findFirst({
        where: (u, {eq}) => eq(u.username, username)
    })
    if (user) return true
    return false
}

// Ask for the username
const username = readlineSync.question("Please enter username: ");
if (!await checkUsernameExist(username)) {
    console.log("Username is not exist")
    process.exit()
}

await removeUser(username)
console.log("Delete Success")
process.exit()
