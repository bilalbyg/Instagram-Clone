import { useEffect, useRef, useState } from "react";

export default function Input({ label, type='text', ...props }) {

  const [show, setShow] = useState(false)
  const inputRef = useRef()
  const [inputType, setType] = useState(type)

  useEffect(() => {
    if(show){
      setType('text')
      inputRef.current.focus()
    }else if(type === 'password'){
      setType('password')
      inputRef.current.focus()
    }
  }, [show])
    
  return (
    <label className="relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
      <input ref={inputRef}
        required={true} type={inputType}
        className="bg-zinc-50 outline-none w-full h-[38px] px-2 peer 
                    valid:pt-[10px] text-xs" {...props}
      />
      <small
        className="absolute top-1/2 left-[9px] text-xs cursor-text pointer-event-none text-gray-500 
                          -translate-y-1/2 peer-valid:text-[10px] transition-all peer-valid:top-2 peer-valid:left-2"
      >
        {label}
      </small>
      {type === 'password' && props?.value && (
        <button type="button" onClick={() => setShow(show => !show)} className=" h-full flex items-center text-sm font-semibold pr-2">
            {show ? 'Hide' : 'Show'}
        </button>
      )}
    </label>
  );
}
