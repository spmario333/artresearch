"use client"

import { sndFetch } from "@/fetch/sndFetch";
import { createContext, ReactNode, useContext, useState } from "react";

interface data {
    data: []
}




interface SndContext {
    data: data[];
    loading: boolean;
    err: string | null;
    searchSnd: (query: string) => Promise<void>;

}



const SndContext = createContext<SndContext | undefined>(undefined)

export const SndProvider = ({ children }: { children: ReactNode }) => {

    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState<string | null>(null)
    const [data, setData] = useState([])

    const searchSnd = async (query: string) => {

        setLoading(true)
        setErr(null)
        try {
            const result = await sndFetch(query)
            setData(result)

        } catch (err: any) {
            setErr(err.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <SndContext.Provider value={{ err, loading, data, searchSnd }}>
            {children}
        </SndContext.Provider>
    )


}

export function useSnd() {
    const context = useContext(SndContext)
    if (!context) throw new Error('Algo esta mal')
    return context
}