import { Form } from '@/components/ui/form'
import { data } from 'autoprefixer'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FormDescription, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
const PaymentDetailsForm = () => {
    const form = useForm({
        resolver:"",
    defaultValues: {
      accountHolderName: '',
      ifsc: '',
      accountNumber: '',
      bankName:""
    },
    })
    const onSubmit=(data)=>{    
        console.log(data)
    }
  return (
    <div className='px-10 py-2'>
      <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
    <FormField
          control={form.control}
          name="accountHolderName"
          render={({ field }) => (
            <FormItem > 
              <FormLabel>Account Holder Name</FormLabel>
              <FormControl>
                <Input  className='border w-full border-gray-700 p-5'placeholder="TradeZenith" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="ifsc"
          render={({ field }) => (
            <FormItem > 
              <FormLabel>IFSC Code</FormLabel>
              <FormControl>
                <Input className='border w-full border-gray-700 p-5'placeholder="YESB0000*" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="accountNumber"
          render={({ field }) => (
            <FormItem > 
              <FormLabel>Account Number</FormLabel>
              <FormControl>
                <Input 
                 className='border w-full border-gray-700 p-5'placeholder="********5694" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="confirmaccountNumber"
          render={({ field }) => (
            <FormItem > 
              <FormLabel> Confirm Account Number</FormLabel>
              <FormControl>
                <Input 
                name="confirmaccountHolderName" className='border w-full border-gray-700 p-5'placeholder="Confirm Account Number" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="bankName"
          render={({ field }) => (
            <FormItem > 
              <FormLabel>Bank Name</FormLabel>
              <FormControl>
                <Input 
                name="bankName" className='border w-full border-gray-700 p-5'placeholder="Yes Bank" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />


<DialogClose className="w-full">
        <Button type="submit" className='w-full py-5'>
            Submit
        </Button>
        </DialogClose>
    </form>
      </Form>
    </div>
  )
}

export default PaymentDetailsForm
