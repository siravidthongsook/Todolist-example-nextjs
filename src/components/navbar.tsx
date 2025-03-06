"use client"
import React from 'react'
import { Sheet, SheetTitle, SheetContent, SheetTrigger, SheetHeader } from "@/components/ui/mobileMenu"
import Link from 'next/link'
import { useSession, SessionProvider } from 'next-auth/react'

function Navbar() {

    return(
        <SessionProvider>
            <NavbarwithoutProvider/>
        </SessionProvider>
    )
}

function NavbarwithoutProvider() {
    const session = useSession()
    return (
        <div className="flex justify-between px-5 py-5 bg-[#000] border-b-[1px] border-[#202020]">
            <div className="text-lg flex gap-3">
                <h1>Project Management</h1> 
            </div>
            <div className="block md:hidden">
                <Sheet >
                    <SheetTrigger>Open</SheetTrigger>
                        <SheetContent className="w-[400px] sm:w-[540px]">
                        <SheetHeader>
                            <SheetTitle className="text-xl">Pages</SheetTitle>
                            <div className="w-full mt-5 flex flex-col gap-3">
                                <Link href="/" className="bg-[#3a3a3a] text-lg font-kanit font-light py-2 px-4 w-full block">Home</Link>
                                <Link href="/" className="bg-[#3a3a3a] text-lg font-kanit font-light py-2 px-4 w-full block">Edit</Link>
                                <Link href="/api/auth/signout" className="bg-[#3a3a3a] text-lg font-kanit font-light py-2 px-4 w-full block">Signout</Link>
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                
            </div>
            <div className="hidden md:block">
                <div className="flex gap-5 mr-2 text-lg">
                    {!session?.data ? (
                        <Link href="/login">Signin</Link>
                    ): (
                    <>
                        <Link href="/">Home</Link>
                        <Link href="/">Edit</Link>
                        <Link href="/api/auth/signout">Signout</Link>
                    </>
                    )}
                </div>
            </div>
        </div>
  )
}

export default Navbar
