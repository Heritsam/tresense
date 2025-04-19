import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/server";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default async function Home() {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  return (
    <div className="min-h-screen overflow-x-hidden dark:bg-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 border border-b bg-white/50 backdrop-blur-xl dark:bg-gray-950/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 mr-4">
            <Image
              src="/logo.png"
              alt="TreSense AI"
              className="size-8"
              height={48}
              width={48}
            />
            <span className="font-semibold hidden md:inline-block">
              TreSense AI
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
            >
              Product
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
            >
              Features
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
            >
              Blog
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            {user.data.user ? (
              <Button variant="outline" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button variant="gradient" asChild>
                  <Link href="/auth/sign-up">
                    Get started
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Button variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/*  bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900 */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
        {/* Animated glowing background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 -right-48 w-[28rem] h-[28rem] bg-gradient-to-tr from-purple-400 to-pink-500 opacity-10 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="absolute top-72 -left-32 w-[20rem] h-[20rem] bg-gradient-to-br from-blue-300 to-indigo-500 opacity-10 blur-3xl rounded-full animate-pulse-delay"></div>
          <div className="absolute bottom-0 right-1/3 w-[15rem] h-[15rem] bg-gradient-to-br from-indigo-400 to-purple-700 opacity-10 blur-3xl rounded-full animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-primary/10 backdrop-blur-md border border-primary rounded-full py-1 pl-2 pr-4 flex items-center gap-2 dark:bg-gray-600/30 dark:border-gray-300/30">
              <span className="bg-white/90 text-blue-600 dark:bg-gray-800 dark:text-blue-400 text-xs font-medium px-2 py-0.5 rounded-full">
                New
              </span>
              <span className="text-sm text-primary font-semibold">
                AI-Powered Sentiment Analysis
              </span>
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Inspire. Create. <br />
              <span
                className={cn(
                  pacifico.className,
                  "px-2 text-6xl md:text-8xl bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient"
                )}
              >
                Let AI Captivate.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Instantly analyze sentiment and craft perfect replies with AI —
              engage your audience smarter, faster, and more personally.
            </p>

            {/* Call-to-actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="gradient"
                className="rounded-full text-white"
              >
                Get started
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mt-20 mb-12 max-w-5xl mx-auto transform hover:scale-[1.015] transition-transform duration-500">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl z-10"></div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 dark:bg-gray-800/20 dark:border-gray-700/20 rounded-3xl p-2 shadow-2xl relative z-20 overflow-hidden">
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                <Image
                  src="/dashboard-light.png"
                  height={1280}
                  width={832}
                  alt="TreSense AI Dashboard"
                  className="w-full block dark:hidden"
                />

                <Image
                  src="/dashboard-dark.png"
                  height={1280}
                  width={832}
                  alt="TreSense AI Dashboard"
                  className="w-full hidden dark:block"
                />
                {/* <div className="h-[600px] bg-[url(/dashboard-light.png)] dark:bg-[url(/dashboard-dark.png)] bg-center bg-cover"></div> */}
              </div>
            </div>

            {/* Floating UI elements */}
            <div className="absolute -right-4 top-1/4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-3 z-30 transform rotate-3 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                  <span className="text-green-500 dark:text-green-400">😊</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
                    Positive Sentiment
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    +24% this week
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 bottom-1/4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-3 z-30 transform -rotate-2 animate-float-delayed">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
                  <span className="text-red-500 dark:text-red-400">😠</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
                    Auto-Replies Sent
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    152 today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="py-10 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-8">
            As featured in
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
            <Image
              src="/placeholder.svg?height=30&width=100"
              alt="YouTube"
              width={100}
              height={30}
              className="opacity-50 hover:opacity-70 transition-opacity dark:invert"
            />
            <Image
              src="/placeholder.svg?height=30&width=100"
              alt="Instagram"
              width={100}
              height={30}
              className="opacity-50 hover:opacity-70 transition-opacity dark:invert"
            />
            <Image
              src="/placeholder.svg?height=30&width=100"
              alt="Twitter"
              width={100}
              height={30}
              className="opacity-50 hover:opacity-70 transition-opacity dark:invert"
            />
            <Image
              src="/placeholder.svg?height=30&width=100"
              alt="Forbes"
              width={100}
              height={30}
              className="opacity-50 hover:opacity-70 transition-opacity dark:invert"
            />
            <Image
              src="/placeholder.svg?height=30&width=100"
              alt="TechCrunch"
              width={100}
              height={30}
              className="opacity-50 hover:opacity-70 transition-opacity dark:invert"
            />
            <Image
              src="/placeholder.svg?height=30&width=100"
              alt="Product Hunt"
              width={100}
              height={30}
              className="opacity-50 hover:opacity-70 transition-opacity dark:invert"
            />
          </div>
        </div>
      </section> */}

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How TreSense Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform analyzes and responds to comments
              automatically, saving you time while increasing engagement.
            </p>
          </div>

          {/* Step-by-step process */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block transform -translate-x-1/2 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center mb-16 md:mb-24">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Connect Your Platforms
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md ml-auto">
                  Easily integrate with all major social media platforms, blogs,
                  and comment sections with our one-click setup process.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-end">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-sm">
                    YouTube
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-sm">
                    Instagram
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-sm">
                    Twitter
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-sm">
                    WordPress
                  </span>
                </div>
              </div>

              <div className="w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white text-xl font-bold shadow-lg z-20">
                1
              </div>

              <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="p-1 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 flex items-center">
                    <div className="flex space-x-1.5 ml-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto pr-8 text-xs text-gray-500 dark:text-gray-300">
                      Connect Platforms
                    </div>
                  </div>
                  <div className="p-4">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Connect platforms interface"
                      width={350}
                      height={200}
                      className="rounded-lg w-full h-auto dark:opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col md:flex-row-reverse items-center mb-16 md:mb-24">
              <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Configure Sentiment Rules
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md">
                  Set up custom rules for how you want to handle different
                  sentiment types. Create response templates and automation
                  rules.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                  <div className="flex items-center px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 rounded-full text-sm">
                    <span className="mr-1">😊</span> Positive
                  </div>
                  <div className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-full text-sm">
                    <span className="mr-1">😐</span> Neutral
                  </div>
                  <div className="flex items-center px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300 rounded-full text-sm">
                    <span className="mr-1">😠</span> Negative
                  </div>
                </div>
              </div>

              <div className="w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white text-xl font-bold shadow-lg z-20">
                2
              </div>

              <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="p-1 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 flex items-center">
                    <div className="flex space-x-1.5 ml-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto pr-8 text-xs text-gray-500 dark:text-gray-300">
                      Sentiment Configuration
                    </div>
                  </div>
                  <div className="p-4">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Sentiment configuration interface"
                      width={350}
                      height={200}
                      className="rounded-lg w-full h-auto dark:opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center mb-16 md:mb-24">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  AI Analyzes Comments
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md ml-auto">
                  Our advanced AI model analyzes incoming comments in real-time,
                  detecting sentiment, intent, and key topics with high
                  accuracy.
                </p>
                <div className="mt-4 flex justify-center md:justify-end">
                  <div className="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 rounded-full text-sm">
                    98.7% Accuracy
                  </div>
                </div>
              </div>

              <div className="w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white text-xl font-bold shadow-lg z-20">
                3
              </div>

              <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="p-1 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 flex items-center">
                    <div className="flex space-x-1.5 ml-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto pr-8 text-xs text-gray-500 dark:text-gray-300">
                      AI Analysis
                    </div>
                  </div>
                  <div className="p-4">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="AI analysis interface"
                      width={350}
                      height={200}
                      className="rounded-lg w-full h-auto dark:opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Automated Responses
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md">
                  TreSense automatically responds to comments based on your
                  configured rules, saving you time while maintaining authentic
                  engagement.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Personalized responses
                    </span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Human-like conversation
                    </span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      24/7 engagement
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white text-xl font-bold shadow-lg z-20">
                4
              </div>

              <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="p-1 bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600 flex items-center">
                    <div className="flex space-x-1.5 ml-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto pr-8 text-xs text-gray-500 dark:text-gray-300">
                      Auto-Response
                    </div>
                  </div>
                  <div className="p-4">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Auto-response interface"
                      width={350}
                      height={200}
                      className="rounded-lg w-full h-auto dark:opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Final step - Results */}
            <div className="mt-20 text-center">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full p-1">
                <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-bold">
                    The Result
                  </span>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Save Time
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Reduce response time by up to 85% with automated sentiment
                    analysis and replies
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Boost Engagement
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Increase audience engagement by 78% with timely, relevant
                    responses
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Improve Sentiment
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Turn negative comments into positive experiences with smart,
                    empathetic responses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of content creators and businesses who have
              transformed their engagement.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100 dark:border-blue-900/30">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="User Avatar"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-4">
                  &quot;TreSense has completely transformed how we handle
                  comments. We&apos;ve seen a 78% increase in engagement and
                  saved 15+ hours per week on manual responses.&quot;
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Sarah Johnson
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Content Creator, 2.4M Followers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the plan that&apos;s right for your business. All plans
              include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all hover:shadow-xl">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Starter
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Perfect for content creators just getting started
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    $29
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">
                    /month
                  </span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Up to 1,000 comments/month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Basic sentiment analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      3 response templates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      2 social platforms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Basic analytics
                    </span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Start free trial
                </Button>
              </div>
            </div>

            {/* Pro Plan - Highlighted */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-blue-500 dark:border-blue-400 overflow-hidden transition-all hover:shadow-2xl transform md:-translate-y-4 relative">
              <div className="absolute top-0 right-0">
                <div className="bg-blue-500 dark:bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              </div>
              <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Pro
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  For growing creators and small businesses
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    $79
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">
                    /month
                  </span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Up to 10,000 comments/month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Advanced sentiment analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      10 response templates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      All social platforms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Advanced analytics & reporting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Priority support
                    </span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="default">
                  Start free trial
                </Button>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all hover:shadow-xl">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Business
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  For established businesses with high volume
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    $199
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">
                    /month
                  </span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Unlimited comments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Enterprise-grade AI analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Unlimited response templates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      All social platforms + API
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Custom analytics dashboard
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Dedicated account manager
                    </span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Contact sales
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Need a custom plan?{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Contact our sales team
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Global Reach, Local Impact
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                TreSense is trusted by businesses and creators in over 120
                countries, analyzing comments in 45+ languages to help you
                connect with your audience worldwide.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    2.5M+
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Comments analyzed daily
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    45+
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Languages supported
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    120+
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Countries with active users
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    98.7%
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Sentiment accuracy
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Globe visualization */}
                <div className="relative w-80 h-80 mx-auto">
                  {/* Main globe */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700 opacity-20 animate-pulse-slow"></div>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-500 dark:to-purple-600 opacity-30"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500 opacity-40"></div>
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-700 to-purple-800 dark:from-blue-300 dark:to-purple-400 opacity-50"></div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-800 to-purple-900 dark:from-blue-200 dark:to-purple-300 opacity-60"></div>

                  {/* Grid lines */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/10 dark:border-white/5"></div>
                  <div
                    className="absolute inset-0 rounded-full border-2 border-white/5 dark:border-white/5"
                    style={{ transform: "rotateX(60deg)" }}
                  ></div>
                  <div
                    className="absolute inset-0 rounded-full border-2 border-white/5 dark:border-white/5"
                    style={{ transform: "rotateY(60deg)" }}
                  ></div>

                  {/* Activity dots */}
                  <div
                    className="absolute w-3 h-3 rounded-full bg-blue-400 dark:bg-blue-300 animate-ping"
                    style={{ top: "30%", left: "20%" }}
                  ></div>
                  <div
                    className="absolute w-2 h-2 rounded-full bg-purple-400 dark:bg-purple-300 animate-ping animation-delay-300"
                    style={{ top: "70%", left: "30%" }}
                  ></div>
                  <div
                    className="absolute w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-300 animate-ping animation-delay-500"
                    style={{ top: "40%", left: "80%" }}
                  ></div>
                  <div
                    className="absolute w-3 h-3 rounded-full bg-purple-400 dark:bg-purple-300 animate-ping animation-delay-700"
                    style={{ top: "60%", left: "70%" }}
                  ></div>
                  <div
                    className="absolute w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-300 animate-ping animation-delay-1000"
                    style={{ top: "20%", left: "60%" }}
                  ></div>

                  {/* Floating data cards */}
                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 z-10 animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400"></div>
                      <p className="text-xs font-medium dark:text-gray-200">
                        North America
                      </p>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 z-10 animate-float-delayed">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                      <p className="text-xs font-medium dark:text-gray-200">
                        Europe
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 z-10 animate-float-slow">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400"></div>
                      <p className="text-xs font-medium dark:text-gray-200">
                        Asia Pacific
                      </p>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 dark:bg-purple-700 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-60 -left-20 w-60 h-60 bg-blue-300 dark:bg-blue-700 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Engagement?
          </h2>
          <p className="text-lg md:text-xl text-white/80 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and businesses who are saving time and
            increasing engagement with TreSense.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white hover:bg-white/90 text-blue-600 dark:bg-gray-200 dark:hover:bg-gray-100 dark:text-blue-700 font-medium rounded-full px-8 py-6 shadow-lg shadow-blue-700/20 transition-all hover:shadow-xl hover:shadow-blue-700/30 text-lg">
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              className="border-white/30 bg-transparent dark:border-gray-400/30 text-white dark:text-gray-200 dark:hover:bg-gray-800/50 rounded-full px-8 py-6 text-lg"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/logo.png"
                alt="TreSense AI"
                className="size-8"
                height={48}
                width={48}
              />
              <span className="font-semibold hidden md:inline-block text-white">
                TreSense AI
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; 2025 TreSense. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
