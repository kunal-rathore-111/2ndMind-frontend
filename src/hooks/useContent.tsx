import { useEffect, useState } from "react"
import { BackendUrl } from "../config/Url";


export const useContent = () => {
    const [contents, setContents] = useState([]);
    const [isLoaded, setIsloaded] = useState(false);


    async function refresh() {
        setIsloaded(false);
        const respond = await fetch(`${BackendUrl}/user/dashboard`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-type": "application/json"
            }
        });
        const res = await respond.json();
        setIsloaded(true);
        setContents(res.data);
    }
    useEffect(() => {
        refresh();
    }, [])

    return { contents, isLoaded, refresh };
}