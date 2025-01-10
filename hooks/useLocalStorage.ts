import {useState} from "react";


export function useLocalStorage(key: string) {

    const [value, setValue] = useState(() => {

        if (typeof window === "undefined") {
            return null;
        }
            const item =  localStorage.getItem(key)
            return item ? JSON.parse(item) : null

    })

    const setValueToStorage = (newValue: any) => {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [value, setValueToStorage] as const
}