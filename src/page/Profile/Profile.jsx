import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { VerifiedIcon } from 'lucide-react'
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import AccountVerificationForm from './AccountVerificationForm'


const Profile = () => {
  const handleenabletwostepverification=()=>{
     console.log("2 step verification")
  }
  return (
    <div className='flex flex-col items-center mb-5'>
      <div className='pt-10 w-full lg:w-[60%]'>
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='lg:flex gap-32'>
              <div className='space-y-7'>
                <div className='flex'>
                  <p className='w-[9rem]'>Email:</p>
                  <p className='text-gray-500'>TradeZenith@gmail.com</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Full Name:</p>
                  <p className='text-gray-500'>TradeZenith</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Date Of Birth:</p>
                  <p className='text-gray-500'>10/08/2000</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Nationality:</p>
                  <p className='text-gray-500'>Indian</p>
                </div>
              </div>
              <div className='space-y-7'>
                <div className='flex'>
                  <p className='w-[9rem]'>Email:</p>
                  <p className='text-gray-500'>TradeZenith@gmail.com</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Full Name:</p>
                  <p className='text-gray-500'>TradeZenith</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Date Of Birth:</p>
                  <p className='text-gray-500'>10/08/2000</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Nationality:</p>
                  <p className='text-gray-500'>Indian</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className='mt-6'>
          <Card className='w-full'>
            <CardHeader className='pb-7'>
              <div className='flex items-center gap-3'>
                <CardTitle>
                  2 Step Verification
                </CardTitle>
                {true?<Badge className={'space-x-2 text-white bg-green-600'}>
                  <VerifiedIcon/>
                  <span>Enabled</span>
                </Badge>:<Badge className={'bg-orange-500'}>
                  Disabled
                </Badge>}
                
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger>
                    <Button>Enabled 2 Step Verification</Button>
                  </DialogTrigger>
                 <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Verify Your Account</DialogTitle>
                  </DialogHeader>
                  <AccountVerificationForm handleSubmit={handleenabletwostepverification}/>
                 </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Profile
