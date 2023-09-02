'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useLogStore } from "@/store"



export function Log() {

  const logs = useLogStore(state => state.logs);


  return (
    <Table>
      <TableCaption>List of Logs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Hour</TableHead>
          <TableHead className="text-right">Note</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>

        {
          Object.keys(logs).map((key) => {
            const log = logs[key];

            return (<TableRow key={key}>
              <TableCell className="font-medium">{log.date.toDateString()}</TableCell>
              <TableCell>{log.hour}</TableCell>
              <TableCell className="text-right">{log.note}</TableCell>
            </TableRow>)
          })
        }


      </TableBody>
    </Table>
  )
}
