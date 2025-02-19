import React  from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
    const navigate=useNavigate();

    return (
        <div className=' hidden w-1/4 h-full p-2 flex flex-col gap-3 text-white lg:flex'>
            <div className='bg-[#121212] rounded flex flex-col justify-around gap-6 py-6'>
                <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} alt="Home Icon"/>
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} alt="Home Icon"/>
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon}alt=""/>
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt=""/>
                        <img className='w-5' src={assets.plus_icon} alt=""/>
                    </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create your very own playlist</h1>
                    <p className='font-light'> It's easy! We'll help you!</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Join the music communities of your idols!</h1>
                    <p className='font-light'>Now, you can not only listen to your favourite idol but also chat with people sharing your interests!</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Join communities</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
