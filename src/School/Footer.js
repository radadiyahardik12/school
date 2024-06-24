import React from 'react'
import "./Footer.css"
import footer from "./data/footer.json"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        
           <div className="header">
            <div className="top_text">
            <h2>Hire the best developers and designers around!</h2>
            <button>Hire Top Developers</button>
            </div>
           </div>

           <div className="contact">
            {
              footer.map((data) =>{
                return(
                  <div key={data.id} className="about">
                      <h5>{data.title}</h5>
                       <h6>{data.info}</h6>
                       {/* <img src={`./img/${data.imageSrc}`}/> */}
                       {/* <img src='img/google-page-speed 1.png' atl= "img"/> */}
                       <p>{data.info2}</p>
                       <p>{data.info3}</p>
                       <p>{data.info4}</p>
                       <p>{data.info5}</p>
                       <p>{data.info6}</p>
                       <p>{data.info7}</p>

                  </div>
                )
              })
            }
           </div>
           <div className="icon">
               <div className="img">
               <img src='img/google-page-speed 1.png' atl= "img"/>
               </div>

               <div className="media">
                  <a href='https://www.facebook.com/' ><FaFacebook/></a>
                  <a href='https://www.instagram.com/' ><FaInstagramSquare/></a>
                  <a href='https://x.com/i/flow/login' ><FaTwitterSquare/></a>
                  <a href='https://in.linkedin.com/' ><FaLinkedin/></a>
               </div>

               
           </div>
           <div className="text">
                <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
               </div>
        
    </div>
  )
}

export default Footer
