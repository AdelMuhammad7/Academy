"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/store/hooks";
import { createNewUser, getAllAdmins } from "@/slices/adminSlice";

const AddUserSchema = z
  .object({
    fullName: z.string().min(1, "الاسم مطلوب"),
    email: z.string().email("بريد غير صالح"),
    phoneNumber: z.string().min(1, "رقم الهاتف مطلوب"),
    password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
    cpassword: z.string().min(6, "تأكيد كلمة المرور مطلوب"),
  })
  .refine((data) => data.password === data.cpassword, {
    path: ["cpassword"],
    message: "كلمة المرور غير متطابقة",
  });

function CreateAdminButton() {
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof AddUserSchema>>({
    resolver: zodResolver(AddUserSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      cpassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof AddUserSchema>) => {
    try {
      const res = await dispatch(createNewUser(values)).unwrap();
      console.log("✅ Admin Created:", res);

      // تحديث الليستة بعد الإضافة
      dispatch(getAllAdmins());

      // reset form
      form.reset();
    } catch (err) {
      console.error("❌ Error creating admin:", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer font-bold border p-2 rounded-2xl bg-primary text-white hover:bg-gray-700 transition">
        إضافة أدمن
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="border-b py-2">إضافة أدمن</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* الاسم */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="الاسم بالكامل"
                      className="py-2 border-[#727272] w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* البريد الإلكتروني */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="البريد الإلكتروني"
                      className="py-2 border-[#727272] w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* الهاتف */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="رقم الهاتف"
                      className="py-2 border-[#727272] w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* كلمة المرور */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="كلمة المرور"
                      className="py-2 border-[#727272] w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* تأكيد كلمة المرور */}
            <FormField
              control={form.control}
              name="cpassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="تأكيد كلمة المرور"
                      className="py-2 border-[#727272] w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* الأزرار */}
            <div className="flex gap-2">
              <Button
                type="submit"
                className="w-1/2 cursor-pointer font-medium py-2 text-xl bg-green-600 text-white"
              >
                إضافة
              </Button>

              <DialogClose asChild>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-1/2 cursor-pointer font-medium py-2 text-xl text-red-500"
                >
                  إلغاء
                </Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateAdminButton;
