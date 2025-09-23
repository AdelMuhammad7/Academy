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
import { createNewUser } from "@/slices/authSlice"; // 👈 بدل forgetPass
import { useRouter } from "next/navigation";

// ✅ Zod Schema خاص بالتسجيل
const signUpSchema = z
  .object({
    fullName: z.string().min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" }),
    email: z.string().email({ message: "بريد إلكتروني غير صالح" }),
    password: z.string().min(6, { message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" }),
    cpassword: z.string(),
    phoneNumber: z.string().min(10, { message: "رقم الهاتف غير صحيح" }),
    classLevel: z.string().min(1, { message: "يجب اختيار الصف الدراسي" }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "كلمة المرور غير متطابقة",
    path: ["cpassword"],
  });

type SignUpSchema = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      cpassword: "",
      phoneNumber: "",
      classLevel: "",
    },
  });

  async function onSubmit(values: SignUpSchema) {
    try {
      await dispatch(createNewUser(values)).unwrap();
      router.push("/"); // 👈 بعد التسجيل يروح للهوم
    } catch (err) {
      console.error("Register error:", err);
    }
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-6 text-center text-2xl font-bold">إنشاء حساب جديد</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* FullName */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الاسم بالكامل</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل اسمك الكامل" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>البريد الإلكتروني</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="example@email.com" {...field} />
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

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="cpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>تأكيد كلمة المرور</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رقم الهاتف</FormLabel>
                <FormControl>
                  <Input placeholder="01012345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Class Level */}
          <FormField
            control={form.control}
            name="classLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الصف الدراسي</FormLabel>
                <FormControl>
                  <select {...field} className="w-full rounded-md border p-2">
                    <optgroup label="المرحلة الابتدائية">
                      <option value="Grade 1 primary">الصف الاول الابتدائى</option>
                      <option value="Grade 2 primary">الصف الثانى الابتدائى</option>
                      <option value="Grade 3 primary">الصف الثالث الابتدائى</option>
                      <option value="Grade 4 primary">الصف الرابع الابتدائى</option>
                      <option value="Grade 5 primary">الصف الخامس الابتدائى</option>
                      <option value="Grade 6 primary">الصف السادس الابتدائى</option>
                    </optgroup>
                    <optgroup label="المرحلة الاعدادية">
                      <option value="Grade 1 preparatory">الصف الاول الاعدادى</option>
                      <option value="Grade 2 preparatory">الصف الثانى الاعدادى</option>
                      <option value="Grade 3 preparatory">الصف الثالث الاعدادى</option>
                    </optgroup>
                    <optgroup label="المرحلة الثانوية">
                      <option value="Grade 1 Secondary">الصف الاول الثانوى</option>
                      <option value="Grade 2 Secondary">الصف الثانى الثانوى</option>
                      <option value="Grade 3 Secondary">الصف الثالث الثانوى</option>
                    </optgroup>
                  </select>
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
            {loading ? "جاري التسجيل..." : "تسجيل"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
