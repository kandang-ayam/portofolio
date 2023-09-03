// Work.js
import React from 'react';

const Work = () => {
  return (
    <div name='work' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Work Experience
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Internship at CV. Shopismata Global Indotama.</p>
          </div>
          <div>
            <p>Have had an internship at 
              CV. Shopismata Global Indotamaas DevOps engineer support. Build automation infrastructureweb 
              application deployment with AWS cloud services andmanage local servers.</p>  
          </div>
        </div>
        <div>
          =================================================================================================================================
        </div>
        
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Kubernetes Administrator.</p>
          </div>
          <div>
            <p>Working as Kubernetes administrator (vanilla version) for biggest internet provider in Indonesia.</p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
