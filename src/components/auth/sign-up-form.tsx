"use client";

import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      router.push("/dashboard");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSignUp}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col gap-2 md:text-left">
        <h1 className="text-3xl font-bold">Sign up</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Create a new account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="password">Repeat password</Label>
          <Input
            id="repeat-password"
            type="password"
            required
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button
          type="submit"
          variant="gradient"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading && (
            <LoaderCircle className="size-4 text-white animate-spin" />
          )}
          {isLoading ? "Signing up..." : "Create my account"}
        </Button>
      </div>

      <div className="mt-2 text-center text-sm">
        Already have an account?{" "}
        <Link href="/auth/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
}
