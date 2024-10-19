import { useState } from "react";

interface Props {
  onSendMessage: (message: string, selectedOption: string) => void;
  placeHolder?: string;
  disableCorrections?: boolean;
  options: Option[];
}

interface Option {
  id: string;
  text:string;
}

export const TextMessageBoxSelect = ({
  onSendMessage,
  placeHolder,
  disableCorrections = false,
  options
}: Props) => {
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>('');
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim().length === 0) return;

    onSendMessage(message, selectedOption);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-row items-center h-16 rounded-xl bg-zinc-700 w-full px-4 "
    >
      <div className="flex-grow ">
        <div className="flex items-center">
          <input
            type="text"
            autoFocus
            name="message"
            className=" w-full  bg-zinc-700 rounded-xl pl-3   h-12"
            placeholder={placeHolder || "Type a message..."}
            autoComplete={disableCorrections ? "off" : "on"}
            autoCorrect={disableCorrections ? "off" : "on"}
            spellCheck={disableCorrections ? "false" : "true"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <select 
            name="select" 
            className="w-2/5 ml-5 border rounded-xl text-gray-300 bg-slate-600 focus:outline-none focus:border-slate-600 pl-4 h-10"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" className="bg-slate-500">Select an option</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>{option.text}</option>
            ))}

          </select>
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
