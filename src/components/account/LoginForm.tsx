'use client';
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

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { LoginUserInput, loginUserSchema } from '@/lib/user-schema';
import Link from "next/link";

export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
  
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/account/profile';
  
    const methods = useForm<LoginUserInput>({
      resolver: zodResolver(loginUserSchema),
    });
  
    const {
      reset,
      handleSubmit,
      register,
      formState: { errors } ,
    } = methods;
  
    const onSubmitHandler: SubmitHandler<LoginUserInput> = async (values) => {
      try {
        setSubmitting(true);
  
        const res = await signIn('credentials', {
          redirect: false,
          email: values.email,
          password: values.password,
          redirectTo: callbackUrl,
        });
  
        setSubmitting(false);
  
        if (!res?.error) {
          // toast.success('successfully logged in');
          router.push(callbackUrl);
        } else {
          reset({ password: '' });
          const message = 'invalid email or password';
          // toast.error(message);
          setError(message);
        }
      } catch (error: any) {
        // toast.error(error.message);
        setError(error.message);
      } finally {
        setSubmitting(false);
      }
    };
  
  return (
    <div className=" w-[360px] mx-auto my-10">

<div className="flex justify-center w-full items-center gap-4 mb-3">
        <Label htmlFor="name">اگر ثبت نام نکردین </Label>
          <Link href="/account/register"><Button >ثبت نام</Button></Link>
        </div>

    <Card className="w-[350px]">
  <CardHeader>
    <CardTitle>ورود</CardTitle>
   
  </CardHeader>
  <form onSubmit={handleSubmit(onSubmitHandler)}>
  <CardContent>
   

      <div className="grid w-full items-center gap-4">

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

      </div>
   
  </CardContent>
  <CardFooter className="justify-center">

    <Button type="submit">ورود </Button>
  </CardFooter>
  </form>
</Card>

</div>
  )
}
