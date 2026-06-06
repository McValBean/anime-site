import { useState, useEffect } from "react"


export default function Homepage(){

    const api = import.meta.env.VITE_ANIME_SITE_API_URL || "http://localhost:3000";
    const [animeList, setAnimeList] = useState([])

    useEffect(() => {
        fetch(`${api}/anime`)
        .then(res => res.json())
        .then(data => setAnimeList(data))
        .then(() => console.log("Anime data fetched successfully"))
        .catch(err => console.error("Error fetching anime data:", err));
    }, [api])

    return(
        <>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>  
        <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-2">
            {
                animeList.map(anime => (
                    <div key={anime.id} className=" flex flex-col border p-4 m-4">
                        <h2 className="text-xl font-bold">{anime.title}</h2>
                        <p>{anime.description}</p>
                    </div>
                ))
            }
            
        </div> 
         
        
        </>
    )
}