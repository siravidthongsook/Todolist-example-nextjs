import readlineSync from "readline-sync";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { db } from "../db"; // Assuming you use this to save or verify the user data
import { usersTable } from "@/db/schema";


async function createUser(username: string, password: string, name: string, email: string) {
    const newuser = {
        username,
        password,
        name,
        email
    } 

    await db.insert(usersTable).values(newuser)

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
if (await checkUsernameExist(username)) {
    console.log("Username is already exist")
    process.exit()
}

const name = readlineSync.question("Please enter name: ");
const email = readlineSync.question("Please enter email: ");

// Ask for the password securely (password will be hidden)
const password = readlineSync.question("Please enter password: ", {
  hideEchoBack: true, // This hides the input
});

const salt = genSaltSync(10)
const hash = hashSync(password, salt)

await createUser(username, hash, name, email)

process.exit()
