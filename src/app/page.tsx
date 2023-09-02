import Calender from "@/components/Calender";
import { NewLog } from "@/components/NewLog";


export default function Page() {
  return (
    <div>
      <div className="mb-2">
      <NewLog />
      </div>
      <Calender/>
    </div>
  )
}
