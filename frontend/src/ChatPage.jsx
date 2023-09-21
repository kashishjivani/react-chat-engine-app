import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatPage = (props) => {
    return (
        < div style={{height: "100vh"}} >
            <PrettyChatWindow
            projectId="d5e5d15f-28f8-4d29-b4cc-db430747d241"
            username={props.user.username}
            secret={props.user.secret}
            style={{height: "100%"}}
             />
        </div >
    )
}

export default ChatPage;