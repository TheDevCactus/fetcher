import create from "zustand";
import { axiosInstance } from "../services";

interface UserStore {
  authorizationToken: string;
  refreshToken: string;
  setTokens: ({authorizationToken, refreshToken}: {authorizationToken: string, refreshToken: string}) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>()(
  (set) => ({
    authorizationToken: '',
    refreshToken: '',
    setTokens: ({ authorizationToken, refreshToken }: { authorizationToken: string, refreshToken: string}) => {
      set({
        authorizationToken,
        refreshToken
      });
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${authorizationToken}`;
    },
    logout: () => {
      set({
        authorizationToken: '',
        refreshToken: ''
      });
      axiosInstance.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXIiOjIsInR5cCI6ImFub24iLCJ0aWQiOiJ5ZXMiLCJwaWQiOiJ5ZXMiLCJpYXQiOjE2MjE1MTU2MDh9.n-mRL1T67dICAbW6YVno5LXFwRDxjYQgPt4oDFbCDClGlpFKtmTiJOMkUyEDpcAKMnYqu8zsFd8YVdDS4CWa-EzueAN1i58UwIClMnzFZskY1aDeXd0AW9K0tZDqJ0CmoqmB-aWnz5h4xiYGmyxlLfwFrz9jfxOmizOrDeoJu0qLF0gHg6UaniRJemSgeSRwwHu0RZOhrei9fmBtAYgJqPXQY8U6WnxaZersRHsGCR8Y4vqAjwTKOJxfU4SeVK4IZjG7aKoIbeoaRFIq0v44HtYJi3iQNY-xruESX3EofRe11wZH18aGSZthW-ZuFjYed8GjRAQf1I1zXcxPQyqAN7sxAa6IhIdPtsoooLJCqbnVfDMVeMtgLYe7cZm4XvCoknrlEphzNjGJrsqeS6uitufL4lOpyLP2QAFuJ7Z4KH6AsfpqO_jQg-4COW3wy1FnJgqec1AHV4CeLXMPJ3zNmGQPZnS-go1UWXpvT0cxoM-HkcgjxeIllwlZqrBb87PTb-wkrPYwaCjM97dIAGO9tBai1l0ehjNDz8FZ_X9NzM12zOTSQHZB1aA2KHzqSHeptfMwhko-n181nBsdqykTjaAwIF_SIPVmrS3TZz5v1jUxu7LLqkVNgKWzJS-HP0oXCSn2OcT9--Kj8L4hiXCMzcr8Mf8lPxckefJqKAgpEBI'
    },
  })
);

export default useUserStore;
