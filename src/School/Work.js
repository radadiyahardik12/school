import React from 'react'
import work from "./data/work.json"
import "./Work_one.css"
import resource from "./data/resource.json"

const Work = () => {
  return (
    <div className="work">
        <div className="top">
            <h1>How development 
            through Alcaline works</h1>
        </div>
        <div className="work_main">
            {
                work.map((data) =>{
                    return(
                        <div key={data.id} className="workers">
                               
                               <h4>{data.number} <h5>{data.title}</h5> </h4> 
                               <p>{data.info}</p>
                              
                        </div>
                    )
                })
            }
        </div>

          <div className="resource">
            {
                resource.map((data)=>{
                    return(
                        <div key={data.id} className="main">
                                <div className="top">
                                    <img  src={`./img/${data.imageSrc}`} alt='img'/>
                                </div>
                                <div className="bottom">
                                    <p>{data.infp}</p>
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

export default Work
