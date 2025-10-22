import React from 'react';
import { CloudIcon, ShieldCheckIcon, UserIcon } from '@heroicons/react/20/solid';




export function CHvertical({ array }) {
    const getmax = (arr) => {
        if (!Array.isArray(arr) || arr.length === 0) return null;
        return Math.max(...arr);
    }
    const max = getmax(array);
    return (
        <div>
            {array ? (
                <div className="flex items-end ">
                    {Array.isArray(array) ? (
                        array.map((value, index) => (
                            <div key={index} style={{ marginRight: '4px', height: `${max * 8 + 30}px` }} className=" flex-col items-center justify-between">
                                <div className="relative top-0 bg-gray-300 hover:bg-gray-100 cursor-pointer flex"
                                    style={{
                                        width: '10px',
                                        height: `${max * 8 - (value * 8) + 10}px`,
                                        borderRadius: '4px',
                                    }}
                                >
                                </div>
                                <div className="relative h-[10px]"></div>
                                <div className="relative bottom-0 bg-emerald-300 hover:bg-emerald-500 cursor-pointer flex"
                                    style={{
                                        width: '10px',
                                        height: `${value * 8 + 10}px`,
                                        borderRadius: '4px',
                                    }}
                                />
                            </div>
                        ))
                    ) : (
                        <>
                            no array
                        </>
                    )}
                </div>
            ) : (
                <>
                    no array
                </>
            )}
        </div>);

}
export function CHCircle() {
    return (
        <div className="flex w-full items-center justify-space-between justify-center gap-6">

            <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-500 cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <CloudIcon className='w-10 text-emerald-900' />
                </div>
            </div>
            <div className="w-24 h-24 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-500 cursor-pointer">
                <div className="w-[5.5rem] h-[5.5rem] bg-white rounded-full flex items-center justify-center shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="size-16 fill-emerald-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                </div>
            </div>
            <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-500 cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <UserIcon className='w-10 text-emerald-900' />
                </div>
            </div>
        </div>

    );
}