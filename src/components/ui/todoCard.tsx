"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Checkbox } from "./checkbox"

const cardContext = React.createContext<boolean>(false)

function Card({ className, children, defaultChecked, ...props }: React.ComponentProps<"div">) {
    const [isChecked, setIsChecked] = React.useState(defaultChecked ?? false)
    function Click() {
        setIsChecked((prev) => !prev)
    }
  return (
      <cardContext.Provider value={isChecked}>
    <div
      data-slot="card"
      className={cn(
        "rounded-xl border border-[#202020] bg-[#111] text-white shadow min-h-[6rem] flex items-center",
        className
      )}
      onClick={Click}
      {...props}
    >
        <Checkbox className="ml-7 p-1 box-content" checked={isChecked}/>
        <div className="flex flex-col">
            {children}
        </div>
    </div>
    </cardContext.Provider>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 px-6", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
    const isCheck = React.useContext(cardContext)
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none",{"line-through": isCheck}, className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    const isCheck = React.useContext(cardContext)
  return (
    <div
      data-slot="card-description"
        className={cn("text-muted-foreground text-sm", {"line-through": isCheck} , className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
