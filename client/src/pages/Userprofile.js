import { useEffect, useState } from "react";
import UserDash from "./UserDash";
import ProfilePic from '../assets/gamer.png'

const Userprofile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (!user) {
      window.location.href = "/login";
    }

    setUser(JSON.parse(user));

  }, []);

  console.log(user)
  return <UserDash>
    <div>
      <img className="w-[100px] " src={ProfilePic} />
    </div>
  </UserDash>;
};
export default Userprofile;
