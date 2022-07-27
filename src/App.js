import { useEffect, useRef } from "react";

function App() {

  const ref = useRef()

  useEffect(() => {  
    let images = ref.current.querySelectorAll('img'),
    total = images.length,
    current = 0

    const imageSlider = () => {
      images[current].classList.remove('opacity-0')

      if(current > 0){
        images[current - 1].classList.add('opacity-0')
      }
      else{
        images[total - 1].classList.add('opacity-0')
      }

      if(current === total-1){
        current = 0
      }else{
        current += 1
      }
    }

    imageSlider()

    let interval = setInterval(imageSlider, 3000)
    return () => {
      clearInterval(interval)
    }
  },[ref])

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="relative w-[380px] h-[581px] bg-login bg-[length: 468.32px_634.15px] bg-[top_left_-46px]">
        <div className="w-[250px] h-[538px] absolute top-[27px] left-[113px]" ref={ref}>
          <img className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-500 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" />
          <img className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"/>
          <img className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"/>
          <img className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-700 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"/>
        </div>
      </div>
      <div className="w-[350px] bg-white border">
        <img className="h-[51px] " src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt=""/>
        <form></form>
      </div>
    </div>
  );
}

export default App;
