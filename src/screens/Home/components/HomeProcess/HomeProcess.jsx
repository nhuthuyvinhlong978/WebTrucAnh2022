import { useState } from "react"
import ProcessComponent from "../../../../components/Process/Process.components"
import "./homeprocess.css"
import processJSON from "./process.json"



export default function HomeProcess(){
    const [ processData,setProcessData] = useState(processJSON)
    const showListsProcess = processData.map((e,index) =>{
        return (
            <div className="col-3">
                <ProcessComponent img={e.img} name={e.name} description={e.description} />
            </div>
        )
    })
    console.log(processData);
    return(
        <div className="homeprocess">
            <div className="title-process"> 
                <h2>Quy trình nuôi tôm Trúc Anh</h2>
            </div>
            <div className="wrap-body">
                <div className="row">
                    {showListsProcess}
                </div>
            </div>
            
           
        </div>
    )
}