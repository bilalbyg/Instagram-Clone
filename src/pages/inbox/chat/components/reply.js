import Icon from "../../../../components/Icon";

export default function Reply() {
  return (
    <footer className="h-[84px] flex items-center justify-center px-6">
      <div className="h-[44px] bg-gray-300 border rounded-full flex items-center w-full pl-[11px] pr-[8px]">
        <button className="h-[42px] w-[40px] flex items-center justify-center">
          <Icon name="emoji" size={24} />
        </button>
        <input className="flex-1 h-[40px] text-sm rounded-2xl placeholder:text-gray-500 px-[9px] outline-none" placeholder="Message..."/>
        <button className="h-[42px] w-[40px] flex items-center justify-center">
          <Icon name="add-pic" size={24} />
        </button>
        <button className="h-[42px] w-[40px] flex items-center justify-center">
          <Icon name="heart" size={24} />
        </button>
      </div>
    </footer>
  );
}
