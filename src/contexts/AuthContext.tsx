import { createContext, useEffect, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ILoginForm } from "../components/Login";
import api from "../services/Api";

interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  signIn: (data: ILoginForm) => Promise<void>;
  loading: boolean;
  subRegister: (data: IRegister) => Promise<void>;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  avatar_url: string;
  techs: ITech[];
  created_at: Date;
  update_at: Date;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: Date;
  update_at: Date;
}

export interface ITechRequest {
  title: string;
  status: string;
}

export interface IRegister {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IResponseSession {
  user: IUser;
  token: string;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const signIn = async (data: ILoginForm) => {
    await api
      .post<IResponseSession>("/sessions", data)
      .then((response) => {
        const { user: userResponse, token } = response.data;
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        localStorage.setItem("@kenziehub:token", token);
        setUser(userResponse);
        toast.success("Login realizado com sucesso", {
          theme: "dark",
        });
        setTimeout(function () {
          history.push("/dashboard");
        }, 1000);
      })
      .catch((error) =>
        toast.error("Ops! Algo deu errado!", {
          theme: "dark",
        })
      );
  };

  async function loadUser() {
    const token = localStorage.getItem("@kenziehub:token");
    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, [user]);

  async function autoLogin() {
    const token = localStorage.getItem("@kenziehub:token");
    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        setUser(data);
        toast.success("Autologin realizado com sucesso", {
          theme: "dark",
          autoClose: 3000,
        });
        history.push("/dashboard");
      } catch (error) {
        localStorage.clear();
        history.push("/");
      }
    }
  }

  useEffect(() => {
    autoLogin();
  }, []);

  const subRegister = async (data: IRegister) => {
    await api
      .post("/users", data)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso", {
          theme: "dark",
        });
        history.push("/");
      })
      .catch((error) =>
        toast.error("Ops! Algo deu errado!", {
          theme: "dark",
        })
      );
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signIn, loading, subRegister }}> {children} </AuthContext.Provider>
  );
};

export default AuthProvider;