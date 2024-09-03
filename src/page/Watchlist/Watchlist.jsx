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
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
const Watchlist = () => {


  const handleRemovetowatchlist=(value)=>{
    console.log('value');
  }
  return (
    <div className='p-5 lg:px-20'>
    <h1 className='font-bold text-3xl pb-5'>Watchlist</h1>
       <Table className="border">
    <TableHeader>
    <TableRow>
        <TableHead className="w-[100px] py-5">COIN</TableHead>
        <TableHead>SYMBOL</TableHead>
        <TableHead>VOLUME</TableHead>
        <TableHead>MARKET CAP</TableHead>
        <TableHead>24h</TableHead>
        <TableHead >PRICE</TableHead>
        <TableHead className="text-right text-red-600">REMOVE</TableHead>
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
        <TableCell>$69249</TableCell>
        <TableCell className="text-right">

        <Button variant="ghost" onClick={()=>handleRemovetowatchlist(item.id)} size="icon" className="h-10 w-10">
          <BookmarkFilledIcon className='w-6 h-6'/>
        </Button>
        </TableCell>
      </TableRow>
    )}
     
    </TableBody>
  </Table>
    </div>
  )
}

export default Watchlist
