import { Link } from "react-router-dom";
const Hero = () => {
    return (
      <div className=' hero w-screen flex flex-col items-end'>
        <div className='self-end lg:w-[50%] md:w-[50%] w-[100%] h-screen pr-5 flex flex-col text-center justify-center items-end bg-gray-300 bg-opacity-50'>
          <h1 className="font-bold px-4 py-2 md:text-5xl sm:text-5xl text-4xl md:py-3 text-orange-600">SHARE SECRETS ANONYMOUSLY!!</h1>
          <p className="md:text-xl mt-5 text-2xl font-bold   lg:text-blue-400 md:text-blue-400 text-black">Welcome to <span className="font-extrabold text-purple-400">HushMate</span>, the exclusive space for your one-shot revelations!  let your message resonate in the echoes of anonymity</p>
          
          <button className="w-full md:w-[150px] sm:w-auto mx-auto bg-cyan-400 hover:bg-cyan-500 transform hover:scale-105 font-medium animate-pulse  rounded-md my-6 px-6 py-4 transition duration-300 ease-in-out">
          <Link to={"/login"}>
              <span className="">Get Started</span>
          </Link>
</button>

          
        </div>
      </div>
    );
  };
  
  export default Hero;
  