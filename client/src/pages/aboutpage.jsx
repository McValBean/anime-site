import NavigationBar from "../components/navigationBar";

export default function AboutPage(){
    return(
        <><NavigationBar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">About Anime World</h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center">
                Welcome to Anime World, your ultimate destination for exploring the fascinating world of anime. 
                Our platform is dedicated to providing you with a comprehensive collection of anime series and movies, 
                along with detailed information about each title. Whether you're a long-time fan or new to the anime scene, 
                we aim to enhance your viewing experience by offering insights into the stories, characters, and genres that make anime so captivating.
            </p>
        </div>
        
        </>
    )
}