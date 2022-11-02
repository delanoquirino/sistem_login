import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        /* pegando os valores de userToken e users_db */
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_bd");

        /*verifica se tem token e usuario e se o usuario tem o mesmo email do usuario*/
        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );
            /*Se for o mesmo vai setar setUSer  */
            if (hasUser) setUser(hasUser[0]);
        }
    },[]);

    const signin = (email, password) => {
        // receber os usuarário do localStorage
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
        // filtro para verificar se ja tem email cadastrado
        const hasUser = usersStorage?.filter((user) => user.email === email);

        // se tiver usuário verifica, depois verifica se  tem email ou pass errado e depois user não cadastrado
        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
              const token = Math.random().toString(36).substring(2);
              localStorage.setItem("user_token", JSON.stringify({ email, token }));
              setUser({ email, password });
              return;
            } else {
              return "E-mail ou senha incorretos";
            }
          } else {
            return "Usuário não cadastrado";
          }
    };

    const signup = (email, password) => {
        // receber os usuarário do localStorage
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
        // filtro para verificar se ja tem email cadastrado
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            return "Já tem uma conta com esse E-mail";
        }
      
        let newUser;
      
        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }];
        }
      
        localStorage.setItem("users_bd", JSON.stringify(newUser));
      
        return;
    };

    // seta setUser para null e remover o token do local storage 
    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };


    return (
        <AuthContext.Provider 
            value={{user, signed: !!user, signin, signup, signout}}
        >
        {children}
        </AuthContext.Provider>
    );
};