import Calender from "@/components/Calender";
import { Log } from "@/components/Log";
import { NewLog } from "@/components/NewLog";


export default function Page() {
  return (
    <div>
      <div className="mb-2">
      <NewLog />
      </div>
      <Calender/>
      <Log/>
    </div>
  )
}
