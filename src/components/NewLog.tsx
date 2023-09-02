'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "./DatePicker"
import { useLogStore } from "@/store"

export function NewLog() {
  const log = useLogStore(state => state.log);
  const setLog = useLogStore(state => state.setLog);

  const validateLog = () => {
    if(!log.date || !log.hour || !log.note){
      throw "You cannot leave fields empty";
    }else if(typeof log.hour === 'number' && log.hour >= 24){
      throw "Enter a valid number"
    }
  }

  const handleSubmit = () => {
    try{
      validateLog();
    }catch(e){
      console.log(e)
    }

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Log</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Log</DialogTitle>
          <DialogDescription>
            Keep your daily logs stored because you do cool stuff and forget
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <DatePicker/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hour" className="text-right">
              Hour
            </Label>
            <Input type="number" id="hour" value={log.hour.toString()} onChange={(e)=> setLog({...log, hour: parseInt(e.target.value)})} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Note
            </Label>
            <Input id="note" className="col-span-3" value={log.note.toString()} onChange={(e)=> setLog({...log, note: e.target.value})} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
