import { ArrowRight, Bitcoin, ShieldOff, Swords, Trophy } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  // console.log(session, ":::Session from getServerAuthSession()");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 sm:px-8">
        <div className="text-center">
          <h1 className="min-w-content mb-2 max-w-2xl text-center text-3xl font-extrabold leading-tight tracking-tight text-black dark:text-white sm:text-[4rem]">
            Bet<span className="text-[hsl(280,100%,70%)]">Allianz:</span> Don't
            just beat the house,
            <br /> Own It!
          </h1>
          <span className="text-lg font-normal tracking-tight text-black dark:text-white sm:text-[1rem]">
            For residents in Nigeria only.
          </span>
        </div>
        <div>
          <Link href="/dashboard" passHref>
            <Button className="flex items-center gap-2">
              Tryout open beta
              <ArrowRight color="black" size={18} />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
          <Card>
            <CardContent className="flex items-center justify-start gap-4 p-4">
              <div>
                <Bitcoin color="white" size={42} />
              </div>
              <div className="grid max-w-sm items-start justify-start gap-2">
                <h1 className="text-start text-lg font-black uppercase tracking-tight text-[hsl(280,100%,70%)] sm:text-[2rem]">
                  Instant Payout
                </h1>
                <span className="text-sm font-normal tracking-tight text-black dark:text-white sm:text-[1rem]">
                  Instant pot wins to your bitcoin/lightning wallet connected to
                  the platform.
                </span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-start gap-4 p-4">
              <div>
                <ShieldOff color="white" size={42} />
              </div>
              <div className="grid max-w-sm items-start justify-start gap-2">
                <h1 className="text-start text-lg font-black uppercase tracking-tight text-[hsl(280,100%,70%)] sm:text-[2rem]">
                  Own Your Data
                </h1>
                <span className="text-sm font-normal tracking-tight text-black dark:text-white sm:text-[1rem]">
                  Every piece of data that is supplied by the user is owned by
                  the user.
                </span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-start gap-4 p-4">
              <div>
                <Swords color="white" size={42} />
              </div>
              <div className="grid max-w-sm items-start justify-start gap-2">
                <h1 className="text-start text-lg font-black uppercase tracking-tight text-[hsl(280,100%,70%)] sm:text-[2rem]">
                  Competitive Odds
                </h1>
                <span className="text-sm font-normal tracking-tight text-black dark:text-white sm:text-[1rem]">
                  Set your own odds to be matched or match another bet that
                  picks your interest.
                </span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-start gap-4 p-4">
              <div>
                <Trophy color="white" size={42} />
              </div>
              <div className="grid max-w-sm items-start justify-start gap-2">
                <h1 className="text-start text-lg font-black uppercase tracking-tight text-[hsl(280,100%,70%)] sm:text-[2rem]">
                  Liquid Market
                </h1>
                <span className="text-sm font-normal tracking-tight text-black dark:text-white sm:text-[1rem]">
                  Enjoy access to one of the most liquid P2P sports betting
                  market.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
