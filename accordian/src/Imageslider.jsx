import "./App.css"
import woow from "./assets/woow.jpg"
import gallery from "./assets/gallery.avif"
import pic from "./assets/pic.avif"
import shoot from "./assets/shoot.avif"
import { useState } from "react"
export default function Imageslider(){
    let [currIndex,setCurrIndex]=useState(0);
    const arr=[woow,gallery,pic,shoot];
    const Front=()=>{
        setCurrIndex((preValue)=>preValue+1)
    }
    const Back=()=>{
        setCurrIndex((preValue)=>preValue-1)
    }
    return(
        <div className="imagebox">
            <h1>COLLECTIONS OF PICTURE</h1>
            <div className="container">
            <img  src={arr[currIndex]} alt="image"/>
          
            </div>
            <button className="next-btn" onClick={Front}>NEXT</button>
            <button className="prev-btn" onClick={Back}>PREVIOUS</button>

            
        </div>
    )
}