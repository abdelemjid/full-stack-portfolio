"use client";

import Button from "@/app/components/ui/button";
import { LoginInput, loginSchema } from "@/app/lib/schemas/login";
import { login } from "@/app/server-actions/admin.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed, LogIn } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LoginPage() {
  const [passVisible, setPassVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    await login(null, formData);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="rounded-md bg-muted/10 border border-muted/40 backdrop-blur-md p-5">
        <div className="min-w-90 flex flex-col gap-8">
          <h3 className="text-xl text-foreground">Admin Login</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              {/* email input */}
              <div className="min-w-90 flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-muted text-[11px] uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john.doe@portfolio.com"
                  {...register("email")}
                  className="w-full bg-background placeholder:text-muted/10 text-sm p-2"
                />
                {errors?.email && (
                  <span className="text-xs text-red-400">
                    {errors?.email?.message}
                  </span>
                )}
              </div>

              {/* password input */}
              <div className="min-w-90 flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-muted text-[11px] uppercase"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={`${passVisible ? "text" : "password"}`}
                    placeholder="password"
                    {...register("password")}
                    className="w-full bg-background placeholder:text-muted/10 text-sm p-2"
                  />
                  <button
                    type="button"
                    onClick={() => setPassVisible((prev) => !prev)}
                    className="cursor-pointer absolute top-1.5 right-2 p-1 transition-colors duration-200 hover:text-muted"
                  >
                    {passVisible ? <EyeClosed size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors?.password && (
                  <span className="text-xs text-red-400">
                    {errors?.password?.message}
                  </span>
                )}
              </div>

              {/* login button */}
              <Button
                className="justify-center mt-5"
                Icon={LogIn}
                style="primary"
              >
                {isSubmitting ? "Logging In..." : "Login"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
