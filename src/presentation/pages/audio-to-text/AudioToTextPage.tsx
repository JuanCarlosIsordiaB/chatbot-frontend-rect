import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TypingLoader,
  TextMessageBoxFile,
} from "../../components";
import { audioToTextUseCase } from "../../../core/use-cases";

interface Message {
  text: string;
  isGpt: boolean;
}

export const AudioToTextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string, audioFile: File) => {
    setIsLoading(true);

    setMessages((messages) => [...messages, { text, isGpt: false }]);
    //console.log({ text, audioFile });

    //use case TODO
    const response = await audioToTextUseCase(audioFile, text);
    setIsLoading(false);
    if (!response) return;
    //console.log({res: response.res});
    setMessages((messages) => [...messages, { text:response.res  || '' , isGpt: true }]);
    
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Chat messages */}
          <GptMessage text="# Te ayudare a pasar de audio a texto." />
          

          {messages.map((message, index) => {
            if (message.isGpt) {
              return <GptMessage key={index} text={message.text} />;
            } else {
              return <MyMessage key={index} text='Convertir Audio a Texto' />;
            }
          })}

          {isLoading && (
            <div className="fade-in col-start-1 col-end-12">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>
      <TextMessageBoxFile onSendMessage={handlePost} accept="" />
    </div>
  );
};

