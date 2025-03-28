import React from 'react'

const DashboardNav = ({ onClick, username }) => {
  return (
    <div className='flex flex-col items-center navbar-backg justify-between p-4 h-screen shadow-[10px_0px_30px_rgba(75,0,130,0.5)]'
        style={{}}>
        <div className='flex flex-col'>
        <img src="./interai_logo_white_no_bg.png" alt="InterAi Dashboard Logo" loading='lazy' className='w-40 mt-4'/>

        <div className='mt-6 flex flex-col gap-2 items-center'>
            <div className='bg-white rounded-full w-10 h-10 flex items-center justify-center'>
                <i className="ri-user-3-fill text-black text-2xl lg:text-2xl"></i>
            </div>
            <p className='mt-2'>{username}</p>
        </div>
        </div>
        <button 
                className='bg-gray-600 mt-4 w-full rounded-md px-2 transition duration-300 ease-in-out hover:bg-gray-800' 
                onClick={onClick}
                >Log out
        </button>
    </div>
  )
}

export default DashboardNav