import { auth, signOut } from '@/lib/auth';
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


export default async function Profile() {

    const session = await auth();
    const user = session?.user;
  
    const logoutAction = async () => {
      'use server';
      await signOut();
    };

  return (
    <div >
        <form action={logoutAction} className='flex'>
          <div className='flex items-center justify-center'>
          <Label> خروج از حساب کاری </Label>
          &nbsp;
            <Button className='bg-red-700 text-white'> خروج </Button>
            </div>
        </form>

    </div>
  )
}
