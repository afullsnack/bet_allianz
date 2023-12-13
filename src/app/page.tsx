import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ThemeToggle } from "~/components/ui/theme-toggle";

// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  // const session = await getServerAuthSession();


  // console.log(session, ":::Session from getServerAuthSession()");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 sm:px-8 py-16 ">
        <div className="text-center">
          <h1 className="text-lg font-extrabold text-center m-0 dark:text-white text-black tracking-tight leading-tight min-w-content max-w-2xl sm:text-[4rem]">
            Bet<span className="text-[hsl(280,100%,70%)]">Allianz:</span> Don't just beat the house,<br /> Own It!
          </h1>
          <span className="text-lg font-normal mt-2 dark:text-white text-black tracking-tight sm:text-[1rem]">
            For residents in Nigeria only.
          </span>
        </div>
        <div>
          <Link href="/dashboard" passHref>
            <Button >Tryout open beta</Button>
          </Link>
        </div>

      </div>
    </main>
  );
}

