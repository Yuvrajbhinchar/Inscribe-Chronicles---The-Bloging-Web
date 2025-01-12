import React from 'react';


const LandingPage = () => {
    return (
        <div className="bg-gray-100 w-full h-screen">
        <nav className="flex items-center sm:justify-between p-4 pb-5 mb-3 border-b-2">
            <div className="flex items-center">
              <h1 className='sm:text-2xl text-lg font-bold font-mono mr-2'>INSCRIBE CHRONICLES</h1>
            </div>
            <div>
            <ul className="flex sm:space-x-4">
                <li><a href="#ourStory" className="hover:text-gray-400 hidden md:block">Our Story</a></li>
                <li><a href="#membership" className="hover:text-gray-400 hidden md:block">Membership</a></li>
                <li><a href="#write" className="hover:text-gray-400 hidden md:block">Write</a></li>
                <li><a href="#signIn" className="hover:text-gray-400 hidden md:block">Sign In</a></li>
                <li><a href="#getStarted" className="bg-black text-white font-bold sm:py-2 sm:px-4 rounded-md ml-3">Get Started</a></li>
            </ul>
            </div>
        </nav>

        <div className='w-full h-content flex justify-evenly m-0'>
            <div className='mt-16'>
            <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold'>Human <br/>stories & ideas</h1>
            <h1 className='md:text-2xl sm:text-xl  text-xl my-10'>A place to read, write, and deepen your understanding</h1>
            <button className='bg-black text-white font-bold py-2 px-4 rounded-md'>Start reading</button>
            </div>
        </div>
        <footer className='mt-20 border-t-2'>
            <h1 className='text-center pt-4'>@All Rights Are Reserved</h1>
        </footer>
        </div>
    );
};

export default LandingPage;