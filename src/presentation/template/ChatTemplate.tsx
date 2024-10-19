import { useState } from "react";
import { GptMessage, MyMessage, TextMessageBox, TypingLoader } from "../components";


interface Message {
  text: string;
  isGpt: boolean;
}

export const ChatTemplate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);

    setMessages([...messages, { text, isGpt: false }]);

    //use case TODO
    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Chat messages */}
          <GptMessage text="Cambiar texto a español" />
          <MyMessage text="Change text to English" />

          {messages.map((message, index) => {
            if (message.isGpt) {
              return <GptMessage key={index} text="Soy un bot" />;
            } else {
              return <MyMessage key={index} text={message.text} />;
            }
          })}

          {isLoading && (
            <div className="fade-in col-start-1 col-end-12">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>
      <TextMessageBox
        onSendMessage={handlePost}
        placeHolder=""
        disableCorrections
      />
    </div>
  );
};
