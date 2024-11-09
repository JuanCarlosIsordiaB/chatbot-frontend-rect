import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TypingLoader,
  TextMessageBox,
  TextMessageBoxSelect,
  GptMessageAudio,
} from "../../components";
import { textToAudioUseCase } from "../../../core/use-cases";

interface Message {
  text: string;
  isGpt: boolean;
  type: "text";
}

interface AudioMessage {
  text?: string;
  isGpt: boolean;
  audio: string;
  type: "audio";
}

type MessageType = Message | AudioMessage;

const voices = [
  { id: "nova", text: "Nova" },
  { id: "alloy", text: "Alloy" },
  { id: "echo", text: "Echo" },
  { id: "fable", text: "Fable" },
  { id: "onyx", text: "Onyx" },
  { id: "shimmer", text: "Shimmer" },
];

export const TextToAudioPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handlePost = async (text: string, selectedVoice: string) => {
    setIsLoading(true);

    setMessages((messages) => [
      ...messages,
      { text, isGpt: false, type: "text" },
    ]);

    //use case TODO
    const { ok, audioUrl } = await textToAudioUseCase(text, selectedVoice);
    setIsLoading(false);

    if (!ok) return;
    setMessages((messages) => [
      ...messages,
      {
        text: "Audio made with IA",
        isGpt: true,
        type: "audio",
        audio: audioUrl!,
      },
    ]);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Chat messages */}
          <GptMessage text="# Give me any text and I will convert it to audio" />

          {messages.map((message, index) => {
            if (message.isGpt) {
              if (message.type === "audio") {
                return (
                  <GptMessageAudio
                    key={index}
                    text={message.text!}
                    audio={message.audio}
                  />
                );
              }else{
                return <GptMessage key={index} text={message.text!} />;
              }
            } else {
              return <MyMessage key={index} text={message.text!} />;
            }
          })}

          {isLoading && (
            <div className="fade-in col-start-1 col-end-12">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>
      <TextMessageBoxSelect
        onSendMessage={handlePost}
        placeHolder=""
        options={voices}
      />
    </div>
  );
};
