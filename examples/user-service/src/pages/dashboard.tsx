import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { UserService } from "../services";
import { ResponseType } from "../services/UserService";
import useUserStore from "../stores/user";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="p-4 text-left transition-all hover:bg-slate-200 active:bg-slate-400"
    >
      {children}
    </button>
  );
};

const Authorized: NextPage = () => {
  const { logout, uid } = useUserStore();
  const router = useRouter();

  const [jsonToDisplay, setJsonToDisplay] = useState<string>("");

  const handleLogout = () => {
    logout();
    router.push('/');
  }

  const getRoles = () => {
    UserService.getRolesForActiveUser(null, {
      200(response) {
        const roles = response.roles;
        if (!roles) return;

        roles.forEach(role => {
          console.log(role.permissions?.join(' '))
        });
      },
      500(response) {
        alert(response.message);
      },
    });
  };

  const getMe = () => {
    UserService.getUserV1({
      params: {
        userId: uid
      },
      query: {}
    }, {
      200(response) {
        setJsonToDisplay(JSON.stringify(response.user?.profile, null, 4));
      },
      fallback(response) {
        alert(response)
      }
    })
  };

  return (
    <div className="flex h-screen flex-row">
      <div className="flex h-full w-96 flex-col bg-slate-100">
        <Button onClick={handleLogout}>Logout</Button>
        <hr />
        <Button onClick={getMe}>Get Me</Button>
        <Button onClick={getRoles}>Get My Roles</Button>
      </div>
      <div className="max-h-full flex-1 space-y-2 overflow-y-scroll p-2">
        <pre>
          <p>{jsonToDisplay}</p>
        </pre>
      </div>
    </div>
  );
};

export default Authorized;
