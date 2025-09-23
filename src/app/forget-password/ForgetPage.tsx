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
import { forgetPass } from "@/slices/authSlice";
import { useRouter } from "next/navigation";

// ✅ Zod Schema خاص بـ forget password
const forgetSchema = z.object({
  email: z.string().email({ message: "بريد إلكتروني غير صالح" }),
});

type ForgetSchema = z.infer<typeof forgetSchema>;

export default function ForgetPasswordPage() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const form = useForm<ForgetSchema>({
    resolver: zodResolver(forgetSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: ForgetSchema) {
    
    dispatch(forgetPass(values)).unwrap();
    router.push("/reset-password")
    
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-6 text-center text-2xl font-bold">نسيت كلمة السر</h2>

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

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={loading}
          >
            {loading ? "جاري الإرسال..." : "إرسال رابط إعادة التعيين"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
