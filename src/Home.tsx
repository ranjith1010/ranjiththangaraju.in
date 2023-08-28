import React from 'react';
import flag from './india-flag.png';

function Home() {
    return (
        <div className='relative h-full'>
            <div className='ml-36 vertical-center'>
                <div className='font-bold text-6xl'>
                    Hey!<br /><div className='my-4' />
                    I am <span className='text-primary'>Ranjith</span> Thangaraju<br />
                </div>
                <div className='mt-10 font-semibold text-3xl text-secondary'>
                    A Full Stack Developer from India&nbsp;<img className='w-9 inline' src={flag} alt='Indian Flag' /><br />
                </div>
                <button className='mt-10 font-light bg-primary text-md text-white px-8 py-3'>DOWNLOAD CV</button>
            </div>
        </div>
    );
}

export default Home;
