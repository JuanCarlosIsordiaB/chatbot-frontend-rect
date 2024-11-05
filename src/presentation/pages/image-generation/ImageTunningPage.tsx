import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TypingLoader,
  TextMessageBox,
  GptMessageImage,
  GptMessageImageSelectable,
} from "../../components";
import { imageGenerationUseCase, imageVariationUseCase } from "../../../core/use-cases";

interface Message {
  text: string;
  isGpt: boolean;
  info?: { imageUrl: string; alt: string };
}

export const ImageTunningPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    isGpt: true,
    text: "Welcome to Image Tunning, I can help you generating your images",
    info: { imageUrl: "http://localhost:3000/gpt/image-generation/1730776570939.png", alt: "Welcome to Image Tunning" },
  }]);

  const [originalImageAndMask, setOriginalImageAndMask] = useState({
    original: undefined as
      | string
      | undefined,
    mask: undefined as string | undefined,
  });

  const handleVariation = async() => {
    setIsLoading(true);

    const resp = await imageVariationUseCase(originalImageAndMask.original!);

    setIsLoading(false);
    if (!resp)
      return setMessages([
        ...messages,
        { text: "Image can not be generated, Try again Later..", isGpt: true },
      ]);

    setMessages((messages) => [
      ...messages,
      {
        text: "Image Variation Generated",
        isGpt: true,
        info: { imageUrl: resp.url, alt: resp.alt },
      },
    ]);
  }

  const handlePost = async (text: string) => {
    setIsLoading(true);

    setMessages((messages) => [...messages, { text, isGpt: false }]);

    const { original, mask } = originalImageAndMask;

    

    //use case TODO
    const imageInfo = await imageGenerationUseCase(text, original, mask);

    setIsLoading(false);
    if (!imageInfo)
      return setMessages([
        ...messages,
        { text: "Image can not be generated, Try again Later..", isGpt: true },
      ]);

    setMessages((messages) => [
      ...messages,
      {
        text,
        isGpt: true,
        info: { imageUrl: imageInfo.url, alt: imageInfo.alt },
      },
    ]);
  };

  return (
    <>
    {
      originalImageAndMask.original && (
        <div className="fixed flex flex-col items-center top-10 right-10 z-10 fade-in">
          <span>Editing...</span>
          <img className="border rounded-xl w-36 h-36 object-contain" src={originalImageAndMask.mask ?? originalImageAndMask.original } alt="Original Image" />
          <button onClick={handleVariation} className="btn-primary mt-2">Generate varation</button>
        </div>
      )
    }
      <div className="chat-container">
        <div className="chat-messages">
          <div className="grid grid-cols-12 gap-y-2">
            {/* Chat messages */}
            <GptMessage text="I can help you generating your images" />

            {messages.map((message, index) => {
              if (message.isGpt) {
                return (
                  <GptMessageImageSelectable
                    key={index}
                    text={message.text}
                    imageUrl={message.info?.imageUrl!}
                    alt={message.info?.alt!}
                    onImageSelected={maskImageUrl => setOriginalImageAndMask({ original: message.info?.imageUrl!, mask: maskImageUrl,  })}
                  />
                );
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
    </>
  );
};
