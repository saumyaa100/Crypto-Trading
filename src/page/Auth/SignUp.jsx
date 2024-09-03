import { Form } from '@/components/ui/form'
import { data } from 'autoprefixer'
import { useForm } from 'react-hook-form'
import { FormDescription, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Dialog } from '@/components/ui/dialog'
const SignUp = () => {
    const form = useForm({
        resolver:"",
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    })
    const onSubmit=(data)=>{    
        console.log(data)
    }
  return (
    <div>
    <h1 className='text-xl font-bold text-center pb-3'>SignUp</h1>
      <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
    <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem > 
              <FormControl>
                <Input  className='border w-full border-gray-700 p-5'placeholder="TradeZenith" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem > 
              <FormControl>
                <Input className='border w-full border-gray-700 p-5'placeholder="TradeZenith@gmailcom" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem > 
              <FormControl>
                <Input 
                 className='border w-full border-gray-700 p-5'placeholder="Your  Password" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />


<Dialog>
<DialogClose className="w-full">
        <Button type="submit" className='w-full py-5'>
            Submit
        </Button>
        </DialogClose>
        </Dialog>
    </form>
      </Form>
    </div>
  )
}

export default SignUp
