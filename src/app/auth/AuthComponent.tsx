"use client";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type Props = {};

export default function AuthComponent({}: Props) {
  const supabase = createClientComponentClient();

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-[80vh] flex-col gap-4">
        <p>Time is the most valuable asset. Use it wisely by using this app</p>
        <Button onClick={handleLogin}>Continue with Github</Button>
      </div>
    </div>
  );
}
