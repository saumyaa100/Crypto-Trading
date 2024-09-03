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
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarImage } from '@/components/ui/avatar'
const Activity = () => {
  return (
    <div className='p-5 lg:px-20'>
      <h1 className='font-bold text-3xl pb-5'>Activity</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] py-5">Date & TIME</TableHead>
            <TableHead className="w-[100px]">Trading-pair</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Selling Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead >Profit/Loss</TableHead>
            <TableHead className="text-right ">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
            <TableRow key={index}>
              <TableCell>
                <p>2024/05/31</p>
                <p className='text-gray-400'>12:39:32</p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className='-z-50'>
                  <AvatarImage src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_640.png"></AvatarImage>

                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
             
              <TableCell>9124463121</TableCell>
              <TableCell>1364881428323</TableCell>
              <TableCell>-0.20009</TableCell>
              <TableCell>$69249</TableCell>
              <TableCell className="text-right">

                {/* <Button variant="ghost" onClick={()=>handleRemovetowatchlist(item.id)} size="icon" className="h-10 w-10">
          <BookmarkFilledIcon className='w-6 h-6'/>
        </Button> */}
                345
              </TableCell>
            </TableRow>
          )}

        </TableBody>
      </Table>
    </div>
  )
}

export default Activity
