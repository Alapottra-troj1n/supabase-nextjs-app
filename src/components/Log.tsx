import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
    date: Date.now(),
    hour: 5,
    note: 'test'
    },
 
 
  ]
  
  export function Log() {
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
          {invoices.map((invoice,index) => (
            <TableRow key={invoice.index}>
              <TableCell className="font-medium">{invoice.date}</TableCell>
              <TableCell>{invoice.hour}</TableCell>
              <TableCell className="text-right">{invoice.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  