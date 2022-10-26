import create from "zustand";
import { axiosInstance, setAuthToken, yesDevAnonToken } from "../services";

interface UserStore {
  accessToken: string;
  refreshToken: string;
  uid: string;
  setTokens: ({accessToken, refreshToken}: {accessToken: string, refreshToken: string}) => void;
  setUid: (uid: string) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>()(
  (set) => ({
    accessToken: '',
    refreshToken: '',
    uid: '',
    setUid: (uid: string) => {
      set({
        uid
      })
    },
    setTokens: ({ accessToken, refreshToken }) => {
      set({
        accessToken,
        refreshToken
      });
      setAuthToken(accessToken);
    },
    logout: () => {
      set({
        accessToken: '',
        refreshToken: '',
        uid: ''
      });
      setAuthToken(yesDevAnonToken);
    },
  })
);

export default useUserStore;
