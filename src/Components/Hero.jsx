import React, { useCallback, useEffect } from 'react'
import Typed from 'typed.js';





const Hero = () => {

  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FrontEnd Developer.', 'Graphics designer.'],
      typeSpeed: 150,
            backSpeed: 50,
            backDelay: 1000,
            startDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
    });

    
    return () => {
      
      typed.destroy();
    };

  }, []);
  



  return (
    <>
    <section className="hero">
   <div className="bg_img"></div>
    <div className="spiders">
      <img src="/icons/spider-1.png" alt="spider" />
      <img src="/icons/spider-2.png" alt="spider" />
    </div>
    <>
  <div className="left_side" data-scroll data-scroll-speed="0.1" lerp='0.1'>
    <h3 className="left_1">WELCOME TO MY WORLD</h3>
    <h1 className="left_1">
      Hi I’m <span  >Parminder Singh</span>{" "}
    </h1>
    <h2 className="left_1">
      a <span  ref={el}> </span>
    </h2>
    <p className="left_1">
      Crafting user-friendly websites. Turning ideas into reality with simple
      yet elegant designs. Let's create something amazing!
    </p>

    <div className="hero_btn">

      <a href="/download/resume.pdf" target={'_blank'} >
    <button className='download_btn'>Download Resume</button>

      </a>
      <a href="https://github.com/Parminder-singh-97" target={'_blank'}>
    <button className='github_btn'>Visit GitHub</button>

      </a>
    </div>
    
    
  </div>
  {/* <div className="right_side">
    <div className="hero">
      <img src="/hero.webp" alt="User" />
    </div>
  </div> */}
</>

    </section>
      
    </>
  )
}

export default Hero
