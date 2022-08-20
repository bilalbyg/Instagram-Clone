import Icon from "../../../components/Icon"

export default function ProfilePosts() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 pt-10">
    <div className="w-[62px] h-[62px] border-2 rounded-full border-black flex items-center justify-center">
      <Icon name="post" size={30} />
    </div>
    <h6 className="text-[28px] font-light">No Posts Yet</h6>
  </div>
  )
}
