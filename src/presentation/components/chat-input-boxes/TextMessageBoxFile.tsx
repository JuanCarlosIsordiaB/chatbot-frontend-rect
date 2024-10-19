import { useRef, useState } from "react";

interface Props {
  onSendMessage: (message: string) => void;
  placeHolder?: string;
  disableCorrections?: boolean;
  accept?: string;
}

export const TextMessageBoxFile = ({
  onSendMessage,
  placeHolder,
  disableCorrections = false,
  accept,
}: Props) => {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>();

  const inputFileRef = useRef<HTMLInputElement>(null);

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
      <div className="mr-3 ">
        <button
          type="button"
          className="flex items-center justify-center hover:bg-gray-500 transition-all p-1 rounded-md"
          onClick={() => inputFileRef.current?.click()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M9.414 3.05L4.085 8.38a3 3 0 0 0 4.243 4.242l2.403-2.403a.75.75 0 1 1 1.06 1.06l-2.403 2.404a4.5 4.5 0 0 1-6.364-6.364l5.33-5.33a3.25 3.25 0 0 1 4.596 4.597l-5.33 5.329a2 2 0 0 1-2.828-2.828l5.33-5.33a.75.75 0 0 1 1.06 1.061l-5.33 5.33a.5.5 0 1 0 .708.706l5.33-5.329A1.75 1.75 0 0 0 9.413 3.05Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input
          type="file"
          className="hidden"
          ref={inputFileRef}
          accept={accept}
          onChange={(e) => setSelectedFile(e.target.files?.item(0))}
        />
      </div>
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
        <button
          className={`transition-all px-5 py-2 rounded-xl ${
            selectedFile
              ? "bg-indigo-500 hover:bg-indigo-800"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedFile}
        >
          {selectedFile ? (
            <div className="flex  items-center">
              {selectedFile.name.substring(0, 2) + ".. "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path fill="currentColor" d="m0 0l20 10L0 20zm0 8v4l10-2z" />
              </svg>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path fill="currentColor" d="m0 0l20 10L0 20zm0 8v4l10-2z" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
};
