import React from "react"
import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"

export default function Home() {
    return (
        <>
        <div className="font-kanit">
            <Navbar/>
            <div className="px-5 mt-5 text-lg">
                <h1>Welcome Noname!</h1>
            </div>
            <div className="px-5 py-5 flex flex-col gap-[3rem]">
            <div>
                <h1 className="text-xl">งานที่รอแจ้งเตือน</h1>

                <div className="mt-5 ml-2 flex flex-col gap-3">
                    <Card className="flex">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="flex">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="flex">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
            <div>
                <h1 className="text-xl">งานที่ยังคงเหลือ</h1>
            </div>
            <div>
                <h1 className="text-xl">งานที่เสร็จเรียบร้อยแล้ว</h1>
            </div>
            </div>

        </div>
        </> 
    )
}
