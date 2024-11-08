'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { signIn } from "next-auth/react";


import { CreateUserInput, createUserSchema } from "@/lib/user-schema";
import LoginForm from "./LoginForm";

export default function RegisterForm() {
    const [submitting, setSubmitting] = useState(false);

    const methods = useForm<CreateUserInput>({
      resolver: zodResolver(createUserSchema),
    });
  
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = methods;
  
    const onSubmitHandler: SubmitHandler<CreateUserInput> = async (values) => {
      try {
        setSubmitting(true);
        const res = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!res.ok) {
          const errorData = await res.json();
  
          if (Array.isArray(errorData.errors) && errorData.errors.length > 0) {
            errorData.errors.forEach((error: any) => {
            // tost
            });
  
            return;
          }
  
            //toast
          return;
        }
  
        signIn(undefined, { callbackUrl: "/" });
      } catch (error: any) {
        // toast
      } finally {
        setSubmitting(false);
      }
    };

  return (
    <div className=" w-[360px] mx-auto my-10">
        <div className="flex justify-center w-full items-center gap-4 mb-3">
        <Label htmlFor="name">اگر قبلا ثبت نام کردین </Label>
          <Link href="/account/login"><Button >ورود</Button></Link>
        </div>
        <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>ثبت نام</CardTitle>
       
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
      <CardContent>
       

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">نام</Label>
              <Input {...register("name")} placeholder="Name" type="text" />

              {errors["name"] && (
                <span className="text-red-500 text-xs pt-1 block">
                {errors["name"]?.message as string}
                </span>
                )}

            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mail">ایمیل</Label>
              <Input {...register("email")} 
                    type="email"
                    id="email" 
                    placeholder="simple@mail.com" />

                {errors["email"] && (
                <span className="text-red-500 text-xs pt-1 block">
                {errors["email"]?.message as string}
                </span>
                )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">پسورد</Label>
              <Input {...register("password")}
                     type="password"
                     id="password" 
                     placeholder="*****" />

            {errors["password"] && (
                <span className="text-red-500 text-xs pt-1 block">
                {errors["password"]?.message as string}
                </span>
                )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">تکرار پسورد</Label>
              <Input {...register("passwordConfirm")}
                     type="password"
                     id="password" 
                     placeholder="*****" />

        {errors["passwordConfirm"] && (
          <span className="text-red-500 text-xs pt-1 block">
            {errors["passwordConfirm"]?.message as string}
          </span>
        )}
            </div>

          </div>
       
      </CardContent>
      <CardFooter className="justify-center">
   
        <Button type="submit">ثبت نام</Button>
      </CardFooter>
      </form>
    </Card>

    </div>
  )
}
