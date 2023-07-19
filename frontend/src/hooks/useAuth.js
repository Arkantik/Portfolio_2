import axios from "axios";
import useUserContext from "./useUserContext";

export default function useAuth() {
  const { account, setAccount } = useUserContext();

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const LOCAL_STORAGE_KEY = "account";

  let status;

  switch (account.is_admin) {
    case 0:
      status = "guest";
      break;
    case 1:
      status = "authenticated";
      break;
    case null:
      status = "guest";
      break;
    case undefined:
      status = "guest";
      break;
    default:
      status = "guest";
  }

  const checkAuthentication = (userStatus) => userStatus === "authenticated";
  const isLoggedIn = checkAuthentication(status);

  const checkPrivileges = (userAccount) => Boolean(userAccount?.is_admin);
  const isAdmin = checkPrivileges(account);

  const loadUserFromLocalStorage = () => {
    const userAccount = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (userAccount) setAccount(userAccount);
  };

  const setUserToLocalStorage = (userAccount) =>
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userAccount));

  const clearUserFromLocalStorage = () =>
    localStorage.removeItem(LOCAL_STORAGE_KEY);

  const loginUser = async (credentials) => {
    return axios.post(`${BASE_URL}/auth/login`, credentials, {
      withCredentials: true,
    });
  };

  const logoutUser = async () => {
    return axios.get(`${BASE_URL}/auth/logout`, {
      withCredentials: true,
    });
  };

  return {
    isLoggedIn,
    isAdmin,
    loadUserFromLocalStorage,
    setUserToLocalStorage,
    clearUserFromLocalStorage,
    loginUser,
    logoutUser,
    account,
  };
}
