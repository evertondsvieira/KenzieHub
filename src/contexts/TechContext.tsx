import { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/Api";
import { IResponseSession, ITechRequest } from "./AuthContext";

interface ITechProviderProps {
  children: ReactNode;
}

interface ITechContext {
  createTech: (data: ITechRequest) => Promise<any>;
  deleteTech: (id: string) => Promise<void>;
}

export const TechContext = createContext({} as ITechContext);

const AuthTech = ({ children }: ITechProviderProps) => {
  const createTech = async (data: ITechRequest) => {
    const response = await api
      .post<IResponseSession>("/users/techs", data)
      .then((response) => {
        toast.success("Tecnologia adicionada com sucesso", {
          theme: "dark",
        });
        return response;
      })
      .catch((error) => {
        toast.error("Ops! Algo deu errado!", {
          theme: "dark",
        });
        return error;
      });
    return response;
  };

  const deleteTech = async (id: string) => {
    await api
      .delete(`/users/techs/${id}`)
      .then((response) => {
        toast.success("Tecnologia deletada com sucesso", {
          theme: "dark",
        });
      })
      .catch((error) =>
        toast.error("Ops! Algo deu errado!", {
          theme: "dark",
        })
      );
  };

  return (
    <TechContext.Provider value={{ createTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default AuthTech;