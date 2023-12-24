import HeroImage from "../assets/hero.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I`m a Full Stack Developer</h2>
                <p className="text-gray-500 py-4 max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo ex reiciendis architecto fugit magni quia suscipit ducimus rem neque laudantium eveniet doloremque cumque repellendus facilis, sed itaque quae maxime.
                </p>
                <div>
                <button className="  group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                cursor-pointer
                bg-gradient-to-r from-cyan-500 to-blue-500">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight className="size={25} ml-1"/>
                    </span>
                </button>
            </div>
            </div>
            
            <div >
                <img src={HeroImage} alt="pic" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Home