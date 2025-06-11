"use client";

interface ChatBotProps {
  chatMessages: string[];
  setChatMessages: React.Dispatch<React.SetStateAction<string[]>>;
  chatInput: string;
  setChatInput: React.Dispatch<React.SetStateAction<string>>;
  chatbotOpen: boolean;
  setChatbotOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatBot = ({
  chatMessages,
  setChatMessages,
  chatInput,
  setChatInput,
  chatbotOpen,
  setChatbotOpen,
}: ChatBotProps) => {
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-end justify-end bg-black/30"
        data-oid="re82auh"
      >
        <div
          className="fixed inset-0"
          onClick={() => setChatbotOpen(false)}
          style={{ zIndex: 1 }}
          data-oid="lzv7-29"
        />

        <div
          className="relative m-8 mb-32 w-full max-w-md rounded-lg bg-white p-4 shadow-lg"
          onClick={(e) => e.stopPropagation()}
          style={{ zIndex: 2 }}
          data-oid="hec051m"
        >
          <div className="flex items-center justify-between" data-oid="rhot45o">
            <h3 className="text-lg font-semibold" data-oid="f1.nusc">
              Kyron AI Assistant
            </h3>
            <button
              onClick={() => setChatbotOpen(false)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close"
              data-oid="1ndo-ij"
            >
              ✕
            </button>
          </div>
          <div
            className="mb-2 max-h-60 flex-1 overflow-y-auto rounded pb-2 text-sm"
            data-oid="h1421d1"
          >
            {chatMessages.length === 0 && (
              <p className="text-xs text-gray-400" data-oid="kpy8fnx">
                Ask me anything...
              </p>
            )}
            {chatMessages.map((msg, index) => (
              <div key={index} className="mb-1" data-oid="f:v8.5p">
                {msg}
              </div>
            ))}
          </div>
          <div className="flex space-x-2" data-oid="1d9t_wm">
            <input
              type="text"
              placeholder="Ask Kyron..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="w-full rounded border px-2 py-1 text-sm"
              data-oid="-f::3dd"
            />

            <button
              onClick={() => {
                if (chatInput.trim() !== "") {
                  setChatMessages([...chatMessages, chatInput]);
                  setChatInput("");
                }
              }}
              className="rounded bg-blue-600 px-2 py-1 text-sm text-white"
              data-oid="29c8q1d"
            >
              Send
            </button>
          </div>
        </div>
        {/* Click outside to close */}
        <div
          className="fixed inset-0"
          onClick={() => setChatbotOpen(false)}
          data-oid="nn7rgsu"
        />
      </div>
    </>
  );
};

export default ChatBot;
