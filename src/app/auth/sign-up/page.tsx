import Image from "next/image";
import Link from "next/link";

import { SignUpForm } from "@/components/auth/sign-up-form";

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex gap-2 justify-center">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-12 items-center justify-center rounded-md">
              <Image
                src="/logo.png"
                alt="logo"
                className="size-12"
                width={48}
                height={48}
              />
            </div>
            TreSense
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/abstract.jpeg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.6]"
        />
      </div>
    </div>
  );
}
