import React, { useEffect } from "react";

// custom
import Header from '../../components/Shared/Header'
import Sidebar from '../../components/Shared/Sidebar'
import Footer from '../../components/Shared/Footer'
import { scrollToSection } from '../../utils/helpers'

function DashboardPage() {

    useEffect(()=>{
        scrollToSection(null)
    },[])

  return (
        <div className='flex flex-col items-center justify-center space-y-5 w-full h-screen bg-[#282c34] text-white font-semibold'>
            <Header/>
            <Sidebar/>
            <div className='text-clr-success text-5xl font-bold'>
                Dashboard
            </div>
            <Footer/>
        </div>
    );
}

export default DashboardPage