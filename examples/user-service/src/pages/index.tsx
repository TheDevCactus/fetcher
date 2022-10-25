import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { UserService } from "../services";
import useUserStore, { isAuthorized } from "../stores/user";

const Home: NextPage = () => {
  const authorized = useUserStore(state => !!state.authorizationToken.length);
  if (authorized) {
    return <Authorized />
  }
  return <Unauthorized />
};

const Unauthorized = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setTokens } = useUserStore();

  const handleSignIn: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await UserService.api.v1.sessions.post({
      body: {
        authentication: {
          type: 'password',
          credentials: {
            email, password
          }
        }
      }
    });
    if ('userId' in res.data) {
      setTokens({
        authorizationToken: res.data.accessToken,
        refreshToken: res.data.refreshToken
      });
      return;
    }
    alert('An error occured: ' + res.data.message);
  }

  return (
    <>
      <Head>
        <title>Fetcher | Boom User Service Example</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div>
          <h3 className="text-center">Login To YES</h3>
          <form onSubmit={handleSignIn} className="flex flex-col p-2">
            <input className="m-1 outline outline-1 outline-slate-600 p-2 rounded-sm" type='text' placeholder='email' required name='email' onChange={e => setEmail(e.target.value)}/>
            <input className="m-1 outline outline-1 outline-slate-600 p-2 rounded-sm" type='password' placeholder='password' required name='password' onChange={e => setPassword(e.target.value)}/>
            <button className="m-1" type='submit'>Sign In</button>
          </form>
        </div>
      </main>
    </>
  );
}

const Authorized = () => {
  const { logout } = useUserStore();

  const [roles, setRoles] = useState();
  const getRoles = async () => {
    const res = await UserService.api.v1.users.roles.get(null);
    console.log('!!!', res)
  }

  return (
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1>Hi mom</h1>
        <button onClick={logout}>Logout</button>
        <button onClick={getRoles}>Get Roles</button>
      </main>
  )
}

export default Home;