import { createContext, useContext, useState } from "react";
import type { UserInfo } from "../types/user";

export const defaultUser: UserInfo = {
  name: "",
  age: "",
  gender: "남성",
  mbti: "",
  image: null,
};

const UserContext = createContext<{
  user: UserInfo;
  setUser: React.Dispatch<React.SetStateAction<UserInfo>>;
} | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserInfo>(defaultUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("UserContext 사용 오류");
  return context;
};