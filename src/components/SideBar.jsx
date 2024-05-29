import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import React from "react";
import { Textarea } from "./ui/textarea";
import { MessageSquareMore } from "lucide-react";
import { Button } from "./ui/button";

export default function SideBar({addNode}) {
  return (
    <>
    {/* hidden sm:block */}
    <div className="w-[180px] md:w-[250px]  h-screen border-l-2">
      <Button
        onClick={addNode}
        className="m-5 flex p-5 h-auto flex-col"
        >
        <div className="">
          <MessageSquareMore />
        </div>
        <div className="">Messages</div>
      </Button>
      {/* <div className='flex border-b-2 p-2'>
                <div>
                <ArrowLeft/>
                </div>
                <div className='w-full flex justify-center'>
                Messages
                </div>
                </div>
                <div className='w-full p-3 py-7 flex gap-3 flex-col border-b-2 '>
                <div className='text-gray-400'>Text</div>
                <Textarea className="" placeholder="Type your message here." />
            </div> */}
    </div>
    <div className="sm:hidden">
        
    </div>
    </>
    
  );
}
