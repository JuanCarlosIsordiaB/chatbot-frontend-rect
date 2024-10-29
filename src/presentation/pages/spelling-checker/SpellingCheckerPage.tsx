import { useState } from "react";
import {
  GptMessage,
  GptSpellingMessage,
  MyMessage,
  TextMessageBox,
  TypingLoader,
} from "../../components";
import { spellingUseCase } from "../../../core/use-cases";

interface Message {
  text: string;
  isGpt: boolean;
  info?: {
    userScore: number;
    errors: string[];
    message: string;
  }
}

export const SpellingCheckerPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);

    setMessages([...messages, { text, isGpt: false }]);

    const { ok, errors, message, userScore } = await spellingUseCase(text);
    if ( !ok ) {
      setMessages( (prev) => [...prev, { text: 'No se pudo realizar la corrección', isGpt: true }] );
    } else {
      setMessages( (prev) => [...prev, { 
        text: message, isGpt: true,  
        info: {errors,message,userScore}
      }]);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Chat messages */}
          <GptMessage text="# Cambiar texto a diferentes idiomas" />
          

          {messages.map((message, index) => {
            if (message.isGpt) {
              return <GptSpellingMessage key={index} {...message.info!}/>;
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
