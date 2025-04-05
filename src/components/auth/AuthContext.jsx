import { supabase } from '@/config/db';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Obtener la sesión inicial
        const fetchSession = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.error('Error al obtener la sesión:', error);
            } else {
                setSession(data.session);
                setUser(data.session?.user || null);
            }
            setLoading(false);
        };

        fetchSession();

        // Escuchar cambios en la sesión
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user || null);
            setLoading(false);
        });

        // Limpiar la suscripción al desmontar
        return () => {
            authListener?.subscription?.unsubscribe();
        };
    }, []);

    // Funciones de autenticación comunes

    // LOGIN
    const signIn = async ({ email, password }) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        // console.log("🚀 ~ signIn ~ data:", data.user.user_metadata)
        return { data, error };
    };

    // REGISTER
    const signUp = async (formData) => {
        
        const { nombre, apellido_paterno, apellido_materno, email, password, roles } = formData;

        // 1. Crear usuario en Supabase Auth
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    nombre: nombre,
                    apellido_paterno: apellido_paterno,
                    apellido_materno: apellido_materno,
                    roles: roles,
                }
            }
        });

        if (error) {
            return { error };
        }

        // const userId = data.user?.id;

        // // 2. Insertar datos adicionales en la tabla "usuarios"
        // if (userId) {
        //     const { error: insertError } = await supabase
        //         .from("usuarios")
        //         .insert([
        //             {
        //                 nombre: nombre,
        //                 apellido_paterno: apellido_paterno,
        //                 apellido_materno: apellido_materno,
        //                 email: email,
        //                 rol: 1
        //             },
        //         ]);

        //     if (insertError) {
        //         return { error: insertError };
        //     }
        // }

        return { data };

    };

    // LOGOUT
    const signOut = async () => {
        return await supabase.auth.signOut();
    };


    return (
        <AuthContext.Provider value={{
            session,
            user,
            loading,
            signIn,
            signUp,
            signOut,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
};