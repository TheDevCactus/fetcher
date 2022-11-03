import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUserQueries } from "../hooks/createFetcherHook";
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

  const { data, isLoading } = useUserQueries.getUserV1({
    query: {},
    params: {
      userId: uid,
    },
  });

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="flex h-screen flex-row">
      <div className="flex h-full w-96 flex-col bg-slate-100">
        <Button onClick={handleLogout}>Logout</Button>
        <hr />
      </div>
      {isLoading ? (
        <h1>loading</h1>
      ) : (
        <div className="max-h-full flex-1 space-y-2 overflow-y-scroll p-2">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Authorized;
