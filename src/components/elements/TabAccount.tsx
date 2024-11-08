import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabAccount() {
  return (
    <Tabs defaultValue="account" className="w-[400px] mx-auto my-20">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">  ثبت نام  </TabsTrigger>
        <TabsTrigger value="password">ورود</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>

          <CardContent className="space-y-2 mt-3 " dir='rtl'>
            <div className="space-y-1">
              <Label htmlFor="name">نام</Label>
              <Input id="name" placeholder="نام" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">ایمیل</Label>
              <Input id="name" type='email' placeholder="example@mail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">پسورد</Label>
              <Input id="name" type="password" placeholder="****" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">تکرار پسورد</Label>
              <Input id="username" type="password" placeholder="****" />
            </div>
          </CardContent>
          <CardFooter>
            <Button> ثبت نام </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
        
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 " dir="rtl">
            <div className="space-y-1">
              <Label htmlFor="current" >ایمیل</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">پسورد</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>ورود</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
