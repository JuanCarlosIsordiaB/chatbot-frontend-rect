import { GptMessage, MyMessage } from "../../components";

export const SpellingCheckerPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Chat messages */}
          <GptMessage text="Cambiar texto a español" />
          <MyMessage text="Change text to English" />
          <GptMessage text="Cambiar texto a español" />
          <MyMessage text="Change text to English" />
          <GptMessage text="Cambiar texto a español" />
          <MyMessage text="Change text to English" />
          <GptMessage text="Cambiar texto a español" />
          <MyMessage text="Change text to English" />
          <GptMessage text="Cambiar texto a español" />
          <MyMessage text="Change text to English" />
          <GptMessage text="Cambiar texto a español" />
          <MyMessage text="Change text to English" />
          
          
        </div>
      </div>
    </div>
  );
};
