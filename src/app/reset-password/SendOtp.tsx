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
import { resetPass } from "@/slices/authSlice";
import { useRouter } from "next/navigation";

// ✅ Zod Schema للـ Reset Password
const resetPassSchema = z
  .object({
    email: z.string().email({ message: "بريد إلكتروني غير صالح" }),
    otp: z.string().min(4, { message: "الرمز OTP غير صحيح" }),
    newPassword: z
      .string()
      .min(6, { message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" }),
    cpassword: z.string(),
  })
  .refine((data) => data.newPassword === data.cpassword, {
    message: "كلمة المرور غير متطابقة",
    path: ["cpassword"],
  });

type ResetPassSchema = z.infer<typeof resetPassSchema>;

export default function ResetPasswordForm() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const form = useForm<ResetPassSchema>({
    resolver: zodResolver(resetPassSchema),
    defaultValues: {
      email: "",
      otp: "",
      newPassword: "",
      cpassword: "",
    },
  });

  async function onSubmit(values: ResetPassSchema) {
    try {
      await dispatch(resetPass(values)).unwrap();
      router.push("/login"); // ✅ بعد النجاح يرجع لصفحة تسجيل الدخول
    } catch (err) {
      console.error("Reset password error:", err);
    }
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-6 text-center text-2xl font-bold">
        إعادة تعيين كلمة المرور
      </h2>

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

          {/* Otp */}
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ادخل الرمز</FormLabel>
                <FormControl>
                  <Input placeholder="123456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* New Password */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>إنشاء كلمة مرور جديدة</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="cpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>إعادة كلمة المرور</FormLabel>
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
            {loading ? "جاري إعادة التعيين..." : "إعادة تعيين"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
