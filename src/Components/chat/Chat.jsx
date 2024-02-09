import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced';
import Header from "@/Components/customHeader/CustomHeader";
import StandardMessageForm from "@/Components/customMessageForms/StandardMessageForm";

const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "testuser1",
        "4321" 
    );
  
    return (
        <div style={{ flexBasis: "100%" }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow
                {...chatProps}
                style={{ height: "100vh" }}
                renderChatHeader={(chat) => (
                    <Header chat={{...chat, title: chat?.title?.toString() || ''}} />
                )}
                renderMessageForm={(props) => (
                    <StandardMessageForm {...props} activeChat={chatProps.chat} />
                )}
            />
        </div>
    );
}

export default Chat;
