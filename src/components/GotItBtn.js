import { useEffect, useState } from "react";

const GotItBtn = (props)=>{
    const [gotItDone, setGotItDone] = useState(false);
    const initialAction = ()=>{
        props.actions.initialAction();
        document.getElementById("gotitbtn").style.display = "none";
        setGotItDone(true);
    }
    const afterGotIt = ()=>{
        props.actions.afterGotIt();
    }
    useEffect(()=>{
        if(gotItDone===true){
            afterGotIt();
        }
    },[gotItDone])
    return(
        <button id="gotitbtn" className="btn" onClick={()=> initialAction()}>Got It!</button>
    );
}

export default GotItBtn;