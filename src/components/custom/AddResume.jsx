import React, { useState } from 'react'
import {Loader2, PlusSquare} from 'lucide-react'
import {Button} from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { v4 as uuidv4 } from 'uuid';
import { Input } from '../ui/input';
import {useUser} from '@clerk/clerk-react'
import globalApi from '../../../service/globalApi';
function AddResume() {
   
    const [openD,setopenD]= useState(false);
    const [resumetitle,setresumetitle]= useState();
    const {user}= useUser();
    const [load,setLoad]=useState(false)
    const onCreate=async()=>{
        setLoad(true)
        const uuid=uuidv4();
        const data ={
            title:resumetitle,
            resumeid: uuid,
            useremail: user?.primaryEmailAddress?.emailAddress,
            username: user?.fullName
            
        }
        console.log(data)
        console.log(resumetitle,uuid)
         globalApi.createResume(data).then(resp=>{
        console.log(resp);
        if(resp){
            setLoad(false)
        }



        
    },(error)=>{
            setLoad(false)
        })
    }

   
  
    return (
    <div>
        <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'onClick={()=>setopenD(true)}> 
            <PlusSquare />
        </div>
        <Dialog open={openD}>
  {/* <DialogTrigger>Open</DialogTrigger> */}
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
        <span>Add Title </span>
       <Input className= 'my-2'placeholder="Ex:Full Stack Developer" 
       onChange={(e)=>{setresumetitle(e.target.value)}}/>
      </DialogDescription>
      <div className='flex justify-end gap-4'>
        <Button className=' bg-red-500 hover:bg-red-700 text-white 'onClick={()=>setopenD(false)}> Cancel</Button>
        <Button className=' bg-green-500 hover:bg-green-700 text-white 'onClick={()=>onCreate()} disabled={!resumetitle || load}>
            {load?
            <Loader2 className='animate-spin'/>:'Create'}
            </Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default AddResume