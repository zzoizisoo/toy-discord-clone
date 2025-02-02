import { UserObject } from "@/models/UserObject";
import Image from "next/image";

export default function UserRow({
  user,
  userChanged
}:{ 
  user: UserObject;
  userChanged: (user: UserObject, checked: boolean) => void;
}){ 
  return ( 
    <div className="flex items-center justify-start w-full space-x-4 my-2">
      <input
        id={user.id}
        type='checkbox'
        name={user.id}
        className="w-4 h-4 mb-0"
        onChange={e=>userChanged(user, e.target.checked)}
      >
      </input>
      <label className="w-full flex items-center space-x-6" htmlFor="users">
        {user.image && (
          <Image
            src={user.image}
            width={40}
            height={40}
            alt={user.name}
            className='w-8 h-8 rounded-full'
            />
        )}
        {!user.image && <span>{user.name.charAt(0)}</span>}
        <p>
          <span className="block text-gray-600">{user.name}</span>
          {user.lastOnline &&
            <span className="text-sm block text-gray-600">Last Online: {user.lastOnline.split('T')[0]}</span>
          }
        </p>

      </label>
    </div>
  )
}