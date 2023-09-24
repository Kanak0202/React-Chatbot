import { useNavigate } from "react-router-dom";

const EnterInfo = ()=>{
    const navigate = useNavigate();

    const showChatBot = ()=>{
        navigate('/chat');
    }

    return(
        <div className="info">
            <h3>Enter into Student Info System</h3>
            <button className="btn" onClick={()=>showChatBot()}>Enroll Now</button>
        </div>
    );
}

export default EnterInfo;