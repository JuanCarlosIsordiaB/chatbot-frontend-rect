import { useState } from "react";
import { GptMessage, MyMessage, TypingLoader, TextMessageBox, GptMessageImage } from "../../components";
import { imageGenerationUseCase } from "../../../core/use-cases";


interface Message {
  text: string;
  isGpt: boolean;
  info?: {imageUrl: string, alt: string};
}

export const ImageGenerationPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);

    setMessages((messages) =>[...messages, { text, isGpt: false }]);

    //use case TODO
    const imageInfo = await imageGenerationUseCase(text);

    setIsLoading(false);
    if(!imageInfo) return setMessages([...messages, { text: 'Image can not be generated, Try again Later..', isGpt: true }]);;

     setMessages((messages) => [...messages, { text , isGpt: true, info: {imageUrl: imageInfo.url, alt: imageInfo.alt} }]);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Chat messages */}
          <GptMessage text="I can help you generating your images" />
          

          {messages.map((message, index) => {
            if (message.isGpt) {
              return <GptMessageImage key={index} text={message.text} imageUrl={message.info?.imageUrl!} alt={message.info?.alt!}  />;
            } else {
              return <MyMessage key={index} text={message.text}  />;
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
