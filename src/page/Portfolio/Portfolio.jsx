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
const Portfolio = () => {
  return (
    <div className='p-5 lg:px-20'>
    <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
       <Table>
    <TableHeader>
    <TableRow>
        <TableHead className="w-[100px]">ASSET</TableHead>
        <TableHead>PRICE</TableHead>
        <TableHead>UNIT</TableHead>
        <TableHead>CHANGE</TableHead>
        <TableHead>CHANGE(%)</TableHead>
        <TableHead className="text-right">VALUE</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
    {[1,1,1,1,1,1,1,1,1,1,1,1].map((item, index)=>
         <TableRow key={index}>
        <TableCell className="font-medium flex items-center gap-2">
            <Avatar className='-z-50'>
                <AvatarImage src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_640.png"></AvatarImage>
               
            </Avatar>
             <span>Bitcoin</span>
        </TableCell>
        <TableCell>BTC</TableCell>
        <TableCell>9124463121</TableCell>
        <TableCell>1364881428323</TableCell>
        <TableCell>-0.20009</TableCell>
        <TableCell className="text-right">$69249</TableCell>
      </TableRow>
    )}
     
    </TableBody>
  </Table>
    </div>
  )
}

export default Portfolio
