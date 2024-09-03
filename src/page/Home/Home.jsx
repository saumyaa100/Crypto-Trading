// import React from "react";
// import { Button } from "@/components/ui/button";
// import Assettable from "./Assettable";
// import Stockchart from "./Stockchart";
// import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
// import { DotIcon, MessageCircle } from "lucide-react";
// import { Cross1Icon } from "@radix-ui/react-icons";
// import { Input } from '@/components/ui/input'


// const Home = () => {
//   const [category, setCategory] = React.useState("all");
//   const [inputValue, setInputValue] = React.useState("");
//   const [isBotreleased, setisBotreleased] = React.useState(false);

//   const handleBotrelease = () => setisBotreleased(!isBotreleased);

//   const handleCategory = (value) => {
//     setCategory(value);
//   };


//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   }
//   const handleKeyPress = (event) => {
//     if (event.key == "Enter") {
//       console.log(inputValue)
//     }
//     setInputValue("");
//   }
//   return (
//     <div className="relative">
//       <div className="lg:flex">
//         <div className="lg:w-[50%] lg:border-r">
//           <div className="p-3 flex items-center gap-4">
//             <Button
//               onClick={() => handleCategory("all")}
//               variant={category == "all" ? "default" : "outline"}
//               className="rounded-full"
//             >
//               All
//             </Button>

//             <Button
//               onClick={() => handleCategory("top50")}
//               variant={category == "top50" ? "default" : "outline"}
//               className="rounded-full"
//             >
//               Top 50
//             </Button>

//             <Button
//               onClick={() => handleCategory("topgainers")}
//               variant={category == "topgainers" ? "default" : "outline"}
//               className="rounded-full"
//             >
//               Top Gainers
//             </Button>

//             <Button
//               onClick={() => handleCategory("toploosers")}
//               variant={category == "toploosers" ? "default" : "outline"}
//               className="rounded-full"
//             >
//               Top Loosers
//             </Button>
//           </div>
//           <Assettable />
//         </div>
//         <div className="hidden lg:block lg:w-[50%] p-5">
//           <Stockchart />
//           <div className="flex gap-5 items-center">
//             <div>
//               <Avatar>
//                 <AvatarImage
//                   src={
//                     "https://cdn.pixabay.com/photo/2021/12/06/12/19/ethereum-6850203_1280.png"
//                   } height={40} width={40}
//                 />
//               </Avatar>
//             </div>
//             <div>
//               <div className="flex items-center gap-2">
//                 <p>ETH</p>
//                 <DotIcon className="text-gray-400" />
//                 <p className="text-gray-400">Ethereum</p>
//               </div>
//               <div className="flex items-end gap-2">
//                 <p className="text-xl font-bold">5464</p>
//                 <p className="text-red-600">
//                   <span>-1319049822.578</span>
//                   <span>(-29803%)</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">


//         {isBotreleased && <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900">
//           <div className="flex justify-between items-center border-b px-6 h-[12%]">
//             <p>Chat Bot</p>
//             <Button
//               onClick={handleBotrelease}
//               variant="ghost" size="icon">
//               <Cross1Icon />
//             </Button>
//           </div>
//           <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
//             <div className="self-start pb-5 w-auto">
//               <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto ">
//                 <p>Hi user</p>
//                 <p>You can ask crypto related any question</p>
//                 <p>like price, market cp etc...</p>
//               </div>
//             </div>

//             {[1, 1, 1, 1].map((item, i) => (

//               <div key={i} className={`${i % 2 == 0 ? "self-start" : "self-end"} "pb-5 w-auto"`}>

//                 {
//                   i % 2 == 0 ? <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto ">
//                     <p>prompt who are u</p>

//                   </div> : <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto ">
//                     <p>ans hi , user</p>
//                   </div>
//                 }


//               </div>)
//             )
//             }




//           </div>

//           <div className="h-[12%] border-t">
//             <Input className="w-full h-full order-none outline-none" placeholder="write prompt"

//               onChange={handleChange} value={inputValue} onKeyPress={handleKeyPress}
//             />
//           </div>
//         </div>
//         }








//         <div className="relative w-[10rem] cursor-pointer group">
//           <Button
//             onClick={handleBotrelease}
//             className='w-full h-[3rem] gap-2 items-center'>
//             <MessageCircle size={30} className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]" />
//             <span className="text-2xl">Chat Bot</span>
//           </Button>
//         </div>

//       </section>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { Button } from "@/components/ui/button";
import Assettable from "./Assettable";
import Stockchart from "./Stockchart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { DotIcon, MessageCircle } from "lucide-react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Input } from '@/components/ui/input'

const Home = () => {
  const [category, setCategory] = React.useState("all");
  const [inputValue, setInputValue] = React.useState("");
  const [isBotReleased, setIsBotReleased] = React.useState(false);

  const handleBotRelease = () => setIsBotReleased(!isBotReleased);

  const handleCategory = (value) => {
    setCategory(value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(inputValue);
      setInputValue("");
    }
  }

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category === "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>

            <Button
              onClick={() => handleCategory("top50")}
              variant={category === "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>

            <Button
              onClick={() => handleCategory("topgainers")}
              variant={category === "topgainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>

            <Button
              onClick={() => handleCategory("toplosers")}
              variant={category === "toplosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <Assettable />
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <Stockchart />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage
                  src={"https://cdn.pixabay.com/photo/2021/12/06/12/19/ethereum-6850203_1280.png"}
                  height={40}
                  width={40}
                />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>ETH</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Ethereum</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">5464</p>
                <p className="text-red-600">
                  <span>-1319049822.578</span>
                  <span>(-29803%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
        {isBotReleased && (
          <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900">
            <div className="flex justify-between items-center border-b px-6 h-[12%]">
              <p>Chat Bot</p>
              <Button onClick={handleBotRelease} variant="ghost" size="icon">
                <Cross1Icon />
              </Button>
            </div>
            <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
              <div className="self-start pb-5 w-auto">
                <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto ">
                  <p>Hi user</p>
                  <p>You can ask crypto-related questions</p>
                  <p>like price, market cap, etc...</p>
                </div>
              </div>
              {[1, 1, 1, 1].map((item, i) => (
                <div key={i} className={`${i % 2 === 0 ? "self-start" : "self-end"} pb-5 w-auto`}>
                  <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                    <p>{i % 2 === 0 ? "prompt: who are you?" : "ans: hi, user"}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[12%] border-t">
              <Input
                className="w-full h-full outline-none"
                placeholder="write prompt"
                onChange={handleChange}
                value={inputValue}
                onKeyDown={handleKeyPress}
              />
            </div>
          </div>
        )}
        <div className="relative w-[10rem] cursor-pointer group">
          <Button onClick={handleBotRelease} className="w-full h-[3rem] gap-2 items-center">
            <MessageCircle size={30} className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]" />
            <span className="text-2xl">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
