import {
    FaInstagram,
    FaGithubSquare,
    FaLinkedin,
    FaTwitter,
  } from 'react-icons/fa';
  
  const Footer = () => {
    return (
      <div className=' w-screen mx-auto py-16 px-4  gap-6 text-white text-center bg-black'>
        <div >
          <h1 className='w-full text-4xl font-bold text-cyan-300'>HUSHMATE.</h1>
          <p className='py-4 text-xl'>Reach Out through the following socials!!</p>
          <div className='flex justify-center space-x-10 mt-2 '>
            <a href="https://www.instagram.com/walkwithsanskar/ " target='_blank'>
                <FaInstagram size={30} className='mr-4  cursor-pointer transform hover:scale-150 transition-transform' />
            </a>

            <a href="" target='_blank'>

            <FaGithubSquare size={30} className='mr-4 cursor-pointer transform hover:scale-150 transition-transform' />

            </a>
            <a href="" target='_blank'>

            <FaLinkedin size={30} className='mr-4 cursor-pointer transform hover:scale-150 transition-transform' />

            </a>

            <a href="" target='_blank'>

            <FaTwitter size={30} className='mr-4 cursor-pointer transform hover:scale-150 transition-transform' />

            </a>
          </div>
        </div>
          <p className='text-gray-300 py-8 text-sm'>all rights reserved @SANSKAR PATEL</p>
          <p className='text-gray-300 text-xs'>email:walkwithsanskar3@gmail.com</p>
      </div>
    );
  };
  
  export default Footer;
  