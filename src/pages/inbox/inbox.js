import Icon from "../../components/Icon";
import Button from "../../components/Button";

export default function Inbox() {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-y-1">
      <Icon name="direct-empty" size={96} />
      <h2 className="text-[22px] font-light">Your Messages</h2>
      <p className="text-sm text-gray-500">Send private photos and messages to a friend or group</p>
      <div className="mt-3">
        <Button>Send Message</Button>
      </div>
    </div>
  );
}
