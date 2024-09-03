import { RadioGroup } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
// import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import React from "react";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";

const TopupForm = () => {
  const [amount, setAmount] = React.useState("");
  const [paymentmethod, setpaymentmethod] = React.useState("RAZORPAY");

  const handlepaymentmethodchange = (value) => {
    setpaymentmethod(value);
  };
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    console.log(amount, paymentmethod);
  };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          onChange={handleChange}
          value={amount}
          className="py-7 text-lg"
          placeholder="$9999"
        />
      </div>
      <div>
        <h1 className="pb-1">Select Payment Method</h1>
        <RadioGroup
          onValueChange={(value) => handlepaymentmethodchange(value)}
          className="flex"
          defaultValue="RAZORPAY"
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9 "
              value="RAZORPAY"
              id="r1"
            />
            <Label htmlFor="r1">
            <div className="bg-white rounded-md px-5 py-2 w-32">
          <img src="https://admin-studio-test.s3.amazonaws.com/6e084479-8f5d-4e0a-bc9a-e9e610ecb989/HTMLPage/Razorpay.png" alt="" />
            </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9 "
              value="STRIPE"
              id="r2"
            />
            <Label htmlFor="r2">
            <div className="bg-white rounded-md px-5 py-2 w-32">
          <img src="https://ledgergurus.com/ecommerce-accountant/stripe-logo-2" alt="" />
            </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} className='w-full py-7'>
        Submit
      </Button>
    </div>
  );
};

export default TopupForm;
