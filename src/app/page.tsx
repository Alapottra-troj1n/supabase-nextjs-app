import Calender from "@/components/Calender";
import { Log } from "@/components/Log";
import { NewLog } from "@/components/NewLog";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import InitLog from "@/components/state/initLog";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  const { data: logs } = await supabase
    .from("logs")
    .select("*")
    .order("date", { ascending: true });

  if (!data.session) {
    return redirect("/auth");
  }

  return (
    <div>
      <div className="mb-2">
        <InitLog logs={logs} />
        <NewLog />
      </div>
      <Calender />
      <Log />
    </div>
  );
}
