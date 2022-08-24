import Icon from "../../../../components/Icon";

export default function Header({ user }) {
  return (
    <header className="h-[60px] border-b border-gray-300 flex items-center justify-between px-5">
      <button className="flex items-center gap-x-3">
        <img src={user.avatar} className="w-6 h-6 rounded-full" />
        <h6 className="text-base font-bold">{user.name}</h6>
      </button>
      <button>
        <Icon name="info" size={24} />
      </button>
    </header>
  );
}
