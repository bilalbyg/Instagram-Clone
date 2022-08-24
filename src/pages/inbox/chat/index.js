import Header from "./components/header"
import Reply from "./components/reply"
import Messages from "./components/messages"

export default function Chat() {

  const user = {
    name : "Random Person",
    avatar : "https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
  }

  const messages = [
    {
      from : {
        id : "TlZqdhxAgyR5i5Gif6Ij0Wken003",
        name : "Random Person",
        user_name : "randprs",
        avatar : "https://images.unsplash.com/photo-1575419268007-a9a5e6b1ce0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      message : "test"
    },
    {
      from : {
        id : "B3RuqoIkC9OWvyK3MJU2rqaSTgl2",
        name : "Bilal Beygo",
        user_name : "bilalbyg",
        avatar : "https://images.unsplash.com/photo-1575419268007-a9a5e6b1ce0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      message : "deneme"
    },
    {
      from : {
        id : "TlZqdhxAgyR5i5Gif6Ij0Wken003",
        name : "Random Person",
        user_name : "randprs",
        avatar : "https://images.unsplash.com/photo-1575419268007-a9a5e6b1ce0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      message : "What's up?"
    },    {
      from : {
        id : "TlZqdhxAgyR5i5Gif6Ij0Wken003",
        name : "Random Person",
        user_name : "randprs",
        avatar : "https://images.unsplash.com/photo-1575419268007-a9a5e6b1ce0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      },
      message : "Hey you there?"
    }
  ]

  return (
    <div className="flex-1">
      <Header user={user}/>
      <Messages messages={messages}/>

      <Reply />
    </div>
  )
}
