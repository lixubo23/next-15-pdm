"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { redirect } from "next/navigation";

import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";
// import { Login } from "../../service/service.ts";

export default function UserLoginForm() {
  //   const navigate = useNavigate();

  const loginFormSchema = z.object({
    username: z.string().min(2, {
      message: "用户名长度不能小于2个字符",
    }),
    password: z.string().min(6, {
      message: "密码长度不能小于6个字符",
    }),
  });

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // const onSubmit = ((form: { username: any; password: any }) => {
  //   Login({ username: form.username, password: form.password })
  //     .then((res) => {
  //       if (res?.error?.message.includes("成功")) {
  //         toast.success(res?.error?.message);
  //         navigate("/");
  //       } else {
  //         toast.error(res?.error?.message);
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error(err);
  //     });
  // };)
  const onSubmit = () => {
    redirect("/dashboard/overview");
  };

  return (
    <div className={"flex justify-center items-center h-screen"}>
      <Card className="mx-auto max-w-sm w-1/6 sm:w-1/2">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            登录
            <LogIn />
          </CardTitle>
          <CardDescription>使用你的用户名登录账号</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">用户名</Label>
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            id="username"
                            type="username"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">密码</Label>
                    {/* <a
                      href="#"
                      className="ml-auto inline-block text-sm underline"
                    >
                      忘记密码?
                    </a> */}
                  </div>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            id="password"
                            type="password"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="w-full">
                  登录
                </Button>
              </div>
              {/* <div className="mt-4 text-center text-sm"> */}
              {/* 没有账号? <Link to="/register" className="underline"> */}
              {/* 注册 */}
              {/* </Link> */}
              {/* </div> */}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
