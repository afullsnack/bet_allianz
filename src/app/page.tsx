import Link from "next/link";
import { ThemeToggle } from "~/components/ui/theme-toggle";

// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  // const session = await getServerAuthSession();


  // console.log(session, ":::Session from getServerAuthSession()");

  return (
    <main className="flex min-h-screen flex-col items-center justify-end bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 sm:px-8 py-16 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">My Balance →</h3>
            <div className="text-lg">
              View balances of assets in your connected wallet, that is accepted on the platform.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl col-span-1 sm:max-w-fit sm:col-span-2 bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Income →</h3>
            <div className="text-lg">
              Get a deeper insight into your income and earnings, with a graphical representation.
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Events →</h3>
            <div className="text-lg">
              Take a glance at all events happening between you and other players.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">The Game →</h3>
            <div className="text-lg">
              Live feed from ongoing live games and summery of already past games.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Transactions →</h3>
            <div className="text-lg">
              View entered or carried out transactions that has occured between you and other players, track how much you've earned.
            </div>
          </Link>
        </div>
      </div>
      <div className="container bg-slate-700/10 flex flex-col items-center justify-center px-4 sm:px-8 py-6">

        <div className="flex items-center justify-between bg-slate-200 dark:bg-slate-900 w-full p-4 rounded">
          <h1 className="text-lg font-extrabold dark:text-white text-black tracking-tight sm:text-[1rem]">
            Bet <span className="text-[hsl(280,100%,70%)]">Allianz</span>
          </h1>
          <ThemeToggle />
        </div>

      </div>

    </main>
  );
}

