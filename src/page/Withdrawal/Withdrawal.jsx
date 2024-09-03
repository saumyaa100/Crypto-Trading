import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Withdrawal = () => {
  return (
    <div className='p-5 lg:px-20'>
    <h1 className='font-bold text-3xl pb-5'>Withdrawal</h1>
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className=" py-5">Date </TableHead>
          <TableHead >Method</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right ">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
          <TableRow key={index}>
            <TableCell>
              <p>June 2,2024 at 11:43</p>
            </TableCell>
            <TableCell>Bank Amount</TableCell>
            <TableCell>$69249</TableCell>
            <TableCell className="text-right">
              345
            </TableCell>
          </TableRow>
        )}

      </TableBody>
    </Table>
  </div>
  )
}

export default Withdrawal
