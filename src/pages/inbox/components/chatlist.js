import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";

export default function ChatList() {

  const conversationId = useParams()

  const chats = [
    {
      id: 1,
      user: {
        avatar:
          "https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        name: "Random Person",
      },
      lastMessage: "Selam Bilal",
    },
    {
      id: 2,
      user: {
        avatar:
        "https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        name: "Random Person",
      },
      unread: true,
      lastMessage: "Selam Bilal",
    },
    {
      id: 3,
      user: {
        avatar:
        "https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        name: "Random Person",
      },
      lastMessage: "Selam Bilal",
    },
    {
      id: 4,
      user: {
        avatar:
        "https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        name: "Random Person",
      },
      lastMessage: "Selam Bilal",
    },
  ];

  return (
    <div className="h-[calc(100%-60px)] overflow-auto py-3">
      <header className="flex items-center justify-between px-5 mb-1">
        <h6 className="text-base font-semibold">Messages</h6>
        <button className="text-brand text-sm font-bold">12 requests</button>
        {console.log(conversationId)}
      </header>
     
      {chats.map((chat) => (
        <NavLink className={classNames({
            "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5" : true,
            "font-semibold" : chat?.unread,
            "!bg-[#efefef]" : +conversationId === chat.id
        })} key={chat.id} to={`/inbox/${chat.id}`}>
          <img
            src={chat.user.avatar}
            className="w-14 h-14 rounded-full object-cover"
            alt=""
          />
          <div>
            <h6 className="text-sm">{chat.user.name}</h6>
            <p className={`text-sm ${!chat?.unread && 'text-[#8e8e8e]'}`}>{chat.lastMessage}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
