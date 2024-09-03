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
import { useNavigate } from 'react-router-dom'
  
const Assettable = () => {
  const navigate = useNavigate();
  return (
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">COIN</TableHead>
        <TableHead>SYMBOL</TableHead>
        <TableHead>VOLUME</TableHead>
        <TableHead>MARKET CAP</TableHead>
        <TableHead>24h</TableHead>
        <TableHead className="text-right">PRICE</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
    {[1,1,1,1,1,1,1,1,1,1,1,1].map((item, index)=>
         <TableRow key={index}>
        <TableCell onClick={()=>navigate(`/market/bitcoin`)} className="font-medium flex items-center gap-2">
            <Avatar>
                <AvatarImage src={"https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_640.png"} width={5} height={5}/>
               
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
  
  )
}

export default Assettable
