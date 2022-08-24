import Message from "./message";

export default function Messages({ messages }) {
  return (
    <main className="h-[calc(100%-144px)] p-4 overflow-auto">
      {messages.map((message, key) => <Message message={message} key={key} /> )}
    </main>
  );
}
