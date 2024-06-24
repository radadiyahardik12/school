import React from 'react'
import devloper from "./data/devloper.json"
import "./Devloper.css"
const Devloper = () => {
  return (
    <div className="devloper_main">
         <div className="top">
            <h1>Our design and
            development approach</h1>
        </div>  
        <div className="desing">
           {
                devloper.map((data)=>{
                    return(
                        <div key={data.id} className="main_section">
                                <div className="img">
                                    <div className="div_main">
                                    <img src= {`./img/${data.imageSrc}`} alt='img' />
                                    <h4>{data.title}</h4>
                                     <p>{data.info}</p>
                                    </div>
                                    
                                </div>
                               
                        </div>
                    )
                })
           }
        </div>
    </div>
  )
}

export default Devloper
