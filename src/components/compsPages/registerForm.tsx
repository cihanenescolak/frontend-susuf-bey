"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User, Eye, Mail, Phone } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Adınız 2 karakterden uzun olmalıdır.",
  }),
  surname: z.string().min(2, {
    message: "Soyadınız 2 karakterden uzun olmalıdır.",
  }),
  email: z.string().email({
    message: "Lütfen geçerli bir e-posta adresi giriniz.",
  }),
  phoneNumber: z.string().refine((value) => value.length === 10, {
    message: "Lütfen geçerli bir telefon numarası giriniz.",
  }),
  password: z
    .string()
    .min(6, {
      message: "Lütfen en az 6 karakterden oluşan bir şifre giriniz.",
    })
    .refine(
      (value) => {
        return /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value);
      },
      {
        message:
          "Parola bir adet büyük harf, bir adet küçük harf ve sayı içermelidir.",
      }
    ),
});
const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      surname: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // verileri görebilirsin
  }
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-3"
        onSubmit={(event) => {
          event.preventDefault(); // Formun otomatik gönderilmesini engelle
          form.handleSubmit(onSubmit)(event); // onSubmit fonksiyonunu çağır
        }}
      >
        <div className="flex gap-x-2 ">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel className=" text-xs text-[#5e6473]">
                  Adınız
                </FormLabel>
                <FormControl>
                  <div className="flex items-center flex-row px-4 py-1   rounded-xl bg-[#323544]">
                    <div className="flex flex-col w-full">
                      <Input placeholder="Adınız" {...field} />
                    </div>
                    <User color="#828da0" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel className=" text-xs text-[#5e6473]">
                  Soyadınız
                </FormLabel>
                <FormControl>
                  <div className="flex items-center flex-row px-4 py-1   rounded-xl bg-[#323544]">
                    <div className="flex flex-col w-full">
                      <Input placeholder="Soyadınız" {...field} />
                    </div>
                    <User color="#828da0" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-xs text-[#5e6473]">E-posta</FormLabel>
              <FormControl>
                <div className="flex items-center flex-row px-4 py-1   rounded-xl bg-[#323544]">
                  <div className="flex flex-col w-full">
                    <Input placeholder="E-posta" type="email" {...field} />
                  </div>
                  <Mail color="#828da0" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-xs text-[#5e6473]">Telefon</FormLabel>
              <FormControl>
                <div className="flex items-center flex-row px-4 py-1   rounded-xl bg-[#323544]">
                  <div className="flex flex-row items-center gap-x-2  w-full">
                    <span className="border-r border-[#5e6473] pr-2 text-[#5e6473] text-sm">
                      +90
                    </span>
                    <Input placeholder="Telefon" {...field} />
                  </div>
                  <Phone color="#828da0" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-xs text-[#5e6473]">Parola</FormLabel>
              <FormControl>
                <div className="flex items-center flex-row px-4 py-1   rounded-xl bg-[#323544]">
                  <div className="flex flex-col w-full">
                    <Input
                      placeholder="Parola"
                      type={showPassword ? "password" : ""}
                      {...field}
                    />
                  </div>
                  <Button
                    className="m-0 p-0"
                    onClick={(event) => {
                      event.preventDefault();
                      setShowPassword(!showPassword);
                    }}
                    variant="ghost"
                    type="button"
                  >
                    <Eye color="#828da0" />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="yellow" type="submit">
          Üyelik Oluştur
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
