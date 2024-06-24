import React from 'react'
import "./Studies.css"
import Phone from "./data/Phone.json"

const Studies = () => {
  return (
    <div className="container_studies">
        <div className="header">
            <h2>Our recent 
            Case studies </h2>
        </div>
        <div className="main">
            {
                Phone.map((data)=>{
                    return(
                        <div key={data.id} className="phone">
                            <div className="left">
                                <img src={`/img/${data.imageSrc}`} alt='img phone' />
                            </div>
                            <div className="right">
                                <h2>{data.title}</h2>
                                <p>{data.info}</p>
                                <h6>{data.more}</h6>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Studies
