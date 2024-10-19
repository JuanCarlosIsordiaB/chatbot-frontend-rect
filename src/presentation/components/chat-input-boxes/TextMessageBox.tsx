import { useState } from "react";

interface Props {
  onSendMessage: (message: string) => void;
  placeHolder?: string;
  disableCorrections?: boolean;
}

export const TextMessageBox = ({
  onSendMessage,
  placeHolder,
  disableCorrections = false,
}: Props) => {
  const [message, setMessage] = useState("");
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim().length === 0) return;

    onSendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-row items-center h-16 rounded-xl bg-zinc-700 w-full px-4 "
    >
      <div className="flex-grow ">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="message"
            className="flex w-full  bg-zinc-700 rounded-xl pl-3   h-12"
            placeholder={placeHolder || "Type a message..."}
            autoComplete={disableCorrections ? "off" : "on"}
            autoCorrect={disableCorrections ? "off" : "on"}
            spellCheck={disableCorrections ? "false" : "true"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="ml-4">
        <button className="bg-indigo-500 hover:bg-indigo-800 transition-all px-5 py-2 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path fill="currentColor" d="m0 0l20 10L0 20zm0 8v4l10-2z" />
          </svg>
        </button>
      </div>
    </form>
  );
};
