import React from 'react';

function Header() {
    return (
        <div className='w-full pt-10 pb-5'>
            <ul className='flex flex-row'>
                <li className='ml-20 px-3 py-1'>
                    <a href='#home' className='font-semibold text-primary px-[0.5] py-[0.3] border-b-2 border-b-primary'>Home</a>
                </li>
                <li className='ml-20 px-3 py-1 hover:bg-[#0001] hover:text-primary rounded-sm'>
                    <a href='#projects' className='font-semibold px-[0.5] py-[0.3]'>Projects</a>
                </li>
                <li className='ml-20 px-3 py-1 hover:bg-[#0001] hover:text-primary rounded-sm'>
                    <a href='#contact' className='font-semibold px-[0.5] py-[0.3]'>Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
