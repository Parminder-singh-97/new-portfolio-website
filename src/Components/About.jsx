import React from 'react'

const About = () => {
  return (
    <>
    <section className="about">
      <div className="blur">
        
      </div>

       <div className="about_me">
        <div className="my_image">
          <img src="/userimg/user-preview.jpg" alt="logo" />
        </div>

        <div className="about_me_content">
      <h1>About Me</h1>
      <p>Hi there! I'm a multi-talented individual with a passion for front-end development and graphic design. With 1 year of experience in the banking sector and 1.5 years as a graphic designer, I bring creativity and technical expertise to every project. Let's collaborate and bring your ideas to life!</p>

      <a href="/download/resume.pdf" target={'_blank'} >
    <button className='download_btn about_btn'>Download Resume</button>

      </a>

        {/* <div className="about_links">
          <ul>
            <a href="#">Skills</a>
            <a href="#">Experience</a>
            <a href="#">Education</a>
          </ul>
        </div> */}
        </div>



       </div>
    </section>
      
    </>
  )
}

export default About
