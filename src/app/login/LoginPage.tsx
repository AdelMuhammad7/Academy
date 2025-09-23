"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginUser } from "@/slices/authSlice";
import { useRouter } from "next/navigation"; // ✅ بديل useNavigate
import { useEffect } from "react";

// ✅ Zod Schema
const loginSchema = z.object({
  email: z.string().email({ message: "بريد إلكتروني غير صالح" }),
  password: z
    .string()
    .min(6, { message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { loading, error, isLoggedIn } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

 async function onSubmit(values: LoginSchema) {
  try {
    const res = await dispatch(loginUser(values)).unwrap(); 

    if (res?.token) {
      router.push("/"); // تسجيل دخول ناجح → روح على الصفحة الرئيسية
    } else {
      console.log("Login failed");
    }
  } catch (error) {
    console.log("Login error:", error); // هيطبع الـ rejectWithValue
  }
}

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-6 text-center text-2xl font-bold">تسجيل الدخول</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>البريد الإلكتروني</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>كلمة المرور</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={loading}
          >
            {loading ? "جاري تسجيل الدخول..." : "دخول"}
          </Button>

        </form>
      </Form>

      <div>
        <Button
          onClick={() => router.push("/forget-password")}
         className="w-1/2 cursor-pointer bg-gray-500 my-2 hover:bg-gray-400"
         >نسيت كلمة المرور</Button>

        <Button 
        onClick={() => router.push("/sign-up")}
        className="w-1/2 cursor-pointer bg-gray-500 hover:bg-gray-400"
        >إنشاء حساب</Button>
      </div>
      
    </div>
  );
}
