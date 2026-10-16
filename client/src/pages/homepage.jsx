import { useState, useEffect } from "react"
import NavigationBar from "../components/navigationBar"


export default function Homepage(){

    const api = import.meta.env.VITE_ANIME_SITE_API_URL || "http://localhost:3000";
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [LoadingArray] = useState(new Array(9).fill(null));

    useEffect(() => {
        fetch(`${api}/anime`)
        .then(res => res.json())
        .then(data => setAnimeList(data))
        .then(() => console.log("Anime data fetched successfully"))
        .catch(err => console.error("Error fetching anime data:", err))
        .finally(() => setLoading(false));
    }, [api])

    if (loading) {
        return 
        <>
        <NavigationBar />
        <div className="flex justify-center items-center min-h-full">
            <div className="grid grid-cols-3 gap-4">
                {LoadingArray.map((_, index) => (
                    <div key={index} className="animate-pulse bg-gray-300 rounded-lg h-64 w-64"></div>
                ))}
            </div>
        </div>;
        </>
    }

    return(
        <>  
        <NavigationBar />
        <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-2 p-4">
            {
                animeList.map(anime => (
                    <>
                    <div key={anime.id} className="group flex flex-col rounded-lg m-4 relative">
                        <div className="relative group-hover:cursor-pointer">
                        <div className="flex min-w-full min-h-64 overflow-hidden rounded-lg">
                            <img src={anime.Image} alt={anime.title} className="w-full min-h-full object-cover " />
                        </div>
                        <div className="invisible inset-0 absolute group-hover:visible flex flex-col p-2 min-w-full min-h-64 z-10 justify-center rounded-lg shadow-md text-white hover:bg-black/70">
                            <h2 className="text-xl font-bold mb-2">{anime.title}</h2>
                            <p>{anime.description}</p>
                        </div>   
                    </div>
                    <p className="mt-2 text-lg font-semibold">{anime.title}</p>
                    </div>
                    </>
                ))
            }
            
        </div> 
         
        
        </>
    )
}