import axios from "axios";
import { getSession, useSession } from "next-auth/react";

export function useAxios() {
    const { data: session, status } = useSession();
    return axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`,  
        headers: {
            'Authorization': session?.accessToken ? `Bearer ${session.accessToken}` : undefined
        }
    })
}