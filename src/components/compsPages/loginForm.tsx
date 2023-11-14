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
import { User, Eye, Mail } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Geçerli bir e-posta adresi giriniz.",
  }),
  password: z.string().min(6, {
    message: "Şifre alanı boş bırakılamaz.",
  }),
});
const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-xs text-[#5e6473]">
                Kullanıcı adı veya E-posta
              </FormLabel>
              <FormControl>
                <div className="flex items-center flex-row px-4 py-1   rounded-xl bg-[#323544]">
                  <div className="flex flex-col w-full">
                    <Input placeholder="E-posta" {...field} />
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
                    <Eye color={showPassword ? "#828da0" : "#1f212a"} />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-7" variant="yellow" type="submit">
          Giriş Yap
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
