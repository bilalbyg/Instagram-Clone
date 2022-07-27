import { useState } from "react";

export default function Input({ label, ...props }) {

  const [show, setShow] = useState(false)
    
  return (
    <label className="block relative">
      <input
        required
        className="bg-zinc-50 border outline-none w-full h-[38px] rounded-sm focus:border-gray-400 px-2 peer 
                    valid:pt-[10px] text-xs" {...props}
      />
      <small
        className="absolute top-1/2 left-[9px] text-xs cursor-text pointer-event-none text-gray-500 
                          -translate-y-1/2 peer-valid:text-[10px] transition-all peer-valid:top-2 peer-valid:left-2"
      >
        {label}
      </small>
      {props?.type === 'password' && (
        <div className="absolute top-0 right-0 h-full flex items-center font-semibold">
            {show ? 'Hide' : 'Show'}
        </div>
      )}
    </label>
  );
}
