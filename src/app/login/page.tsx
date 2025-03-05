"use client"
import { LogInButton } from '@/components/ui/loginbutton'
import { processLogin } from '@/serverActions/login'
import { useRouter } from 'next/navigation'
// import { processLogin } from '@/serverActions/login'
import React, { useRef, useState } from 'react'

function Page() {
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const formRef = useRef<HTMLFormElement | null>(null)
    const [errorText, setErrorText] = useState<string | undefined>(undefined)
    const [inProcess, setInProcess] = useState<boolean>(false)
    
    const router = useRouter()

    async function Login(e: React.FormEvent){
        e.preventDefault()
        if (inProcess) return
        if (usernameRef.current && passwordRef.current) {
            setInProcess(true)
            setErrorText(undefined)
            const formdata = new FormData(formRef.current!)
            const result = await processLogin(formdata)
            if (result == 1) {
                router.replace("/")
            }
            else {
                setErrorText("ชื่อผู้ใช้หรือรหัสไม่ถูกต้อง")
            }

            setInProcess(false)
        }
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen gap-7'>
            <h1 className='text-[2.4rem] font-semibold'>เข้าสู่ระบบ</h1> 
            <form onSubmit={(e) =>  {Login(e)}} className='w-full flex justify-center' ref={formRef}>
                <div className='bg-[#ebebff] text-black text-xl flex flex-col gap-3 p-7 rounded-[5px] w-full sm:max-w-[30rem]'>
                    <label>ชื่อผู้ใช้งาน</label>        
                    <input type="text" ref={usernameRef} name="username" className="text-[1.1rem] focus:outline-none border-[1px] border-solid border-[#2f2f35] rounded-[5px] p-3"/>

                    <label>รหัสผ่าน</label>        
                    <input type="password" ref={passwordRef} name="password" className="text-[1.1rem] focus:outline-none border-[1px] border-solid border-[#2f2f35] rounded-[5px] p-3"/>
                    <div className={`${!errorText&& "hidden"} text-red-700 text-[1.3rem]`}>
                        <p>{errorText}</p> 
                    </div>
                    <LogInButton variant="outline" className='text-[1.1rem] mt-6' type="submit" disabled={inProcess}>เข้าสู่ระบบ</LogInButton>
                </div>
            </form>
        </div>
    )
}
export default Page
