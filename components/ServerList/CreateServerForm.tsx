import Link from "next/link";
import { X } from 'lucide-react'
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function CreateServerForm() { 
  const params = useSearchParams();
  const showCreateServerForm = params.get('createServer');
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(()=>{
    if(showCreateServerForm && dialogRef.current){ 
      dialogRef.current.showModal();
    }else{ 
      dialogRef.current?.close();
    }
  }, [showCreateServerForm])

  return <dialog ref={dialogRef}  className="absolute z-10 space-y-2 rounded-xl">
    <div className="w-full flex items-center justify-between py-8 px-6"> 
      <h2 className="text-3xl font-semibold text-gray-600">
       Create a new server
      </h2>
    <Link href='/'>
      <X/>
    </Link>
    </div>

  </dialog>
}