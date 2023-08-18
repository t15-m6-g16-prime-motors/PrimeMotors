import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { IRegisterUserRequest, TLoginUser } from "../interfaces";

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: TLoginUser) => Promise<void>
    signUp: (data: IRegisterUserRequest) => Promise<void>
    loading: boolean
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('@TOKEN')

        if(!token){
            setLoading(false)

            return
        }
        
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setLoading(false)

    }, [])

    const signIn = async (data: TLoginUser) => {
        try {

            const response = await api.post('/login', data)
            const {token} = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem('@TOKEN', token)
            setLoading(false)

            navigate('/')
            
        } 
        
        catch (error) {
            console.log(error)
        }
    }

    const signUp = async (data: IRegisterUserRequest) => {
        try {
          const response = await api.post('/users', data);
          const { token } = response.data
    
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          localStorage.setItem('@TOKEN', token);
          setLoading(false);
    
          navigate('/login')
        } catch (error) {
          console.log(error);
        }
    }

    return(
        <AuthContext.Provider value={{ signIn, signUp, loading}}>
            {children}
        </AuthContext.Provider>
    )

    
}