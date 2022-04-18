import React from 'react';

const loading = () => {
    return (
        <div className='flex align-center justify-center border-2 rounded-md text-white'>
            <button className='rounded-md text-white' type="button" class="bg-indigo-500 ..." disabled>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                </svg>
                Processing...
            </button>
        </div>
    );
};

export default loading;