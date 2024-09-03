import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet'
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Sidebar from './Sidebar'
const Navbar = () => {
  return (
    <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="rounded-full h-11 w-11">
              <DragHandleHorizontalIcon className='h-7 w-7' />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-72 border-r-0 flex flex-col justify-center" side="left">
            <SheetHeader>
              <SheetTitle>
                <div className='text-3xl flex justify-center items-center gap-1'>
                  <Avatar>
                    <AvatarImage src="https://cdn.pixabay.com/photo/2024/04/16/18/50/ai-generated-8700614_640.jpg  " alt="avatar" width={50} height={50} />
                    {/* <AvatarFallback>U</AvatarFallback> */}
                  </Avatar>
                  <div>
                    <span className='font-bold text-orange-700'>Trade</span>
                    <span>Zenith</span>
                  </div>
                </div>
              </SheetTitle>

            </SheetHeader>

            <Sidebar />
          </SheetContent>
        </Sheet>

        <p className='text-sm lg:text-base cursor-pointer'>
          TradeZenith
        </p>
        <div className='p-0 ml-9'>
          <Button variant="outline" className='flex items-center gap-3' >
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>

      <div>
        <Avatar>
          <AvatarFallback>
            S
          </AvatarFallback>
        </Avatar>
      </div>

    </div>

  )
}

export default Navbar
