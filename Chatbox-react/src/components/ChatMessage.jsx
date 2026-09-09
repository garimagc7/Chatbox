import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'

export function ChatMessage({message, sender, time}){
    return(
        <div className = {sender === 'user'? 'chat-message-user' : 'chat-message-robot'    
        }>
            {sender === "robot" && (
                <img src={ RobotProfileImage} 
                width="50"
                className = "chat-message-profile"/>
            )}
            <div className="chat-message-text">
                <div>
                    {message}
                </div>

                <div className="chat-message-time">
                    {time.toLocaleTimeString([], {
                    hour: 'numeric',
                    minute: '2-digit'
                })}
                </div>
            </div>
            {sender === "user" && (
                <img 
                src={ UserProfileImage} 
                width="50" 
                className = "chat-message-profile"/>
            )}
        </div>
    );
}