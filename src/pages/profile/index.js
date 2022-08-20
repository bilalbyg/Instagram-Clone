import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams, Outlet } from "react-router-dom";
import { getUserInfo } from "../../firebase";
import Header from "./components/header";
import Icon from "../../components/Icon";
import classNames from "classnames";
import ProfileNotFound from "./components/not-found";
import { Helmet } from "react-helmet"

export default function ProfileLayout() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo(username)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setUser(false);
      });
  }, []);

  if (user === false) {
    return <ProfileNotFound/>
  }

  if(user === null){
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    user && (
      <div>
        <Helmet>
          <title>{user.full_name} (@{user.user_name} • Instagram fotoğrafları ve videoları)</title>
        </Helmet>
        <Header user={user} />
        <nav className="border-t flex justify-center items-center gap-x-36">
          <NavLink
            to={`/${username}`}
            end={true}
            className={({ isActive }) =>
              classNames({
                "text-xs py-5 border-t flex items-center gap-x-1.5 tracking-widest font-semibold": true,
                "text-[#8e8e8e] border-transparent": !isActive,
                "text-black border-black": isActive,
              })
            }
          >
            <Icon name="post" /> POSTS
          </NavLink>
          <NavLink
            to={`/${username}/tagged`}
            end={true}
            className={({ isActive }) =>
              classNames({
                "text-xs py-5 border-t flex items-center gap-x-1.5 tracking-widest font-semibold": true,
                "text-[#8e8e8e] border-transparent": !isActive,
                "text-black border-black": isActive,
              })
            }
          >
            <Icon name="tag" /> TAGGED
          </NavLink>
          {/* <NavLink to={`/${username}/saved`} end={true} className={({isActive}) => classNames({
			"text-xs py-5 border-t flex items-center gap-x-1.5 tracking-widest font-semibold" : true,
			"text-[#8e8e8e] border-transparent" : !isActive,
			"text-black border-black" : isActive
		  })}>
            <Icon name="saved" /> SAVED
          </NavLink> */}
        </nav>
        <Outlet />
      </div>
    )
  );
}
