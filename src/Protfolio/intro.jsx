import React from "react";
import './intro.css'
import { Link }  from 'react-scroll';
import btnImg from './assets/hireme.png'
import myimg from './assets/myimg.png'

const Intro = () =>{
    return(

         <section id="intro">
                   <div className="introContent">
                       <span className="hello">Hello,</span>
                       <span className="introText">I'm <span className="introName">Santhosh</span> <br />Front End Devloper</span>
                       <p className="introPara">I am a skilled fronend devloper with experience in creating<br />visually appealing and user friendly websites.</p>
                       <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>
                   </div>
                   <img src={myimg} alt="Profile" className="bg" />
               </section>
    )

}

export default Intro;