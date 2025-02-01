import { DiscordServer } from "@/models/DiscordServer"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
// import { v4 as uuid } from "uuid"
import CreateServerForm from "./CreateServerForm"

export default function ServerList() { 
  const [activeServer, setActiveServer] = useState<DiscordServer | undefined>()
  const servers: DiscordServer[] = [
    {id: '1', name:'1 Test server', image: 'https://images.unsplash.com/photo-1454997423871-b5215756e54d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbGd5fGVufDB8fDB8fHww'},
    {id: '2', name:'2 Test server', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbGd5fGVufDB8fDB8fHww'},
    {id: '3', name:'3 Test server', image: ''},
  ]
  return <div className="bg-dark-gray h-full flex flex-col items-center">
    {servers.map((server)=> 
      <button key={server.id} onClick={()=>setActiveServer(server)} className={`p-2 sidebar-icon ${server.id === activeServer?.id ? 'selected-icon': ''}`} >
        {server.image && isUrl(server.image)
          ? <Image className="rounded-icon" src={server.image} width={50} height={50} alt={server.name}/> 
          : <span className="rounded-icon bg-gray-600 w-[50px] flex items-center justify-center text-sm">{server.name.charAt(0)}</span>}
      </button> )}
      <Link href={'/?createServer=true'}
            className="flex items-center justify-center rounded-icon bg-white p-2 my-2 text-2xl font-light h-12 w-12 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-200"
      >+</Link>
      <CreateServerForm/>
    </div>
}

function isUrl(path: string): boolean { 
  try{ 
    const _ = new URL(path);
    return true;
  }catch (_){ 
    return false;
  }
}