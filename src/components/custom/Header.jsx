
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";


function Header() {
  const { user, isLoaded, isSignedIn } = useUser();

  return (
    <div className="flex justify-between p-3 px-5 shadow-md">
      <img src="logo.svg" width={55} height={80} alt="" srcset="" />
      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={'/dashboard'}>
          <Button  className="bg-purple-400 hover:bg-purple-500 text-white">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to="/auth/signin">
          <Button className="bg-purple-400 hover:bg-purple-500 text-white">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
