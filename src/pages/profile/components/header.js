export default function Header({ user }) {
  return (
    <header className="flex items-center px-24 gap-x-6 py-6 pb-10">
      <img
        src="/no-avatar.jpg"
        alt=""
        className="w-[150px] h-[150px] rounded-full"
      />
      <div className="pl-16">
        <div className="mb-4">
          <h1 className="text-[28px] font-light">{user.user_name}</h1>
        </div>
        <nav className="flex gap-x-10">
          <div>
            <span className="font-semibold">{user.posts} posts</span>
          </div>
          <div>
            <span className="font-semibold">
              {(user.followers || []).length} followers
            </span>
          </div>
          <div>
            <span className="font-semibold">
              {(user.following || []).length} following
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
