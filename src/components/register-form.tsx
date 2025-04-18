"use client";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Card, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MouseEvent as ReactMouseEvent } from "react";
import { registerAPI } from "@/utils/auth.api";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const formSchema = z
    .object({
      username: z
        .string()
        .min(2, {
          message: t("username_required"),
        })
        .regex(/^[a-zA-Z0-9_]+$/, {
          message: t("username_contain"),
        }),
      email: z.string().email({
        message: t("email_required"),
      }),
      password: z
        .string()
        .min(8, {
          message: t("password_required"),
        })
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          {
            message: t("password_contain"),
          }
        ),
      confirmPassword: z.string().min(8, {
        message: t("confirm_password_required"),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("password_not_match"),
      path: ["confirmPassword"],
    });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, email, password } = values;
    const response = await registerAPI(username, password, email);
    console.log(response.data);
  }

  const handleBack = (
    e: ReactMouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    path?: string
  ) => {
    e.preventDefault();
    if (path) {
      navigate(path);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col gap-6 p-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">{t("create_account")}</h1>
                  <p className="text-muted-foreground text-balance">
                    {t("join_study")}
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("username")}</FormLabel>
                      <FormControl>
                        <Input placeholder="user" {...field} />
                      </FormControl>
                      <FormDescription>
                        {t("your_unique_display_name")}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example@example.com" {...field} />
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
                      <FormLabel>{t("password")}</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        {t("use_strong_password")}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("confirm_password")}</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm Password"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        {t("re_enter_password")}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="text-center text-sm">
                  {t("already_have_account")}{" "}
                  <a
                    href="#"
                    className="underline underline-offset-4"
                    onClick={(e) => handleBack(e, "/login")}
                  >
                    {t("sign_in")}
                  </a>
                </div>
                <div className="flex flex-row justify-between">
                  <Button variant={"secondary"} onClick={(e) => handleBack(e)}>
                    {t("back")}
                  </Button>
                  <Button type="submit">{t("submit")}</Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
