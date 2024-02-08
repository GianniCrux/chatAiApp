import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced';
import Header from "@/Components/customHeader";
import StandardMessageForm from "@/Components/customMessageForms/StandardMessageForm";


const Chat = () => {
    const chatProps= useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "testuser1",
        "4321" 
    ); //to import with vite we use the "import.meta etc" that's going to grab the environment variable (the vite project id) from the env.local
  return (
    <div style={ {flexBasis: "100%"} }>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}
        style={{ height: "100vh"}} renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
            return (
                <StandardMessageForm {...props} activeChat={chatProps.chat} />
            )
        }}
        />
    </div>
  )
}

export default Chat