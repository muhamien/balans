import Link from 'next/link';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

export default function JobDetail() {
  return (
    <div>
        <a href='/jobs' className='w-max'>
            <div className='p-2 w-max hover:text-white ease-out duration-300 bg-lime-100 text-black hover:bg-[#73B729] rounded-full'>
                <FaArrowLeft/>
            </div>
        </a>
        
        <div className='border-[#73B729] border py-2 rounded-lg my-4 min-w-56 w-full bg-white'>
            <div className='p-4 border-[#73B729]'>
                <div>
                    <div className='flex justify-between'>
                        <h2 className='font-semibold text-lg'>
                            Fullstack Java Developer required, long-term possibilty
                        </h2>
                        <button className='px-4 py-2 bg-[#73B729] text-white rounded-full'>Apply Job</button>
                    </div>
                    <span className='text-xs'>Rp. 100.000/hour - Posted 1 minutes ago</span>
                    <div className='text-sm text-gray-500 my-4'>
                        <div>
                            I'm looking for multiple female freelancers interested in discussing a virtual boxing match over messages throughout the course of a week. Specifically your opinions&nbsp;&nbsp;in regards to boxing gloves you'd use, boxing equipment if we were in a boxing match together. As well as discuss various boxing related scenarios. You really don't have to be a pro at boxing or boxing terminology either. I'm thinking this could be something ongoing depending on the outcome. <br/>
                            <br/>
                            The topic of our various discussions will be "what would it be like to lose to you in a boxing match?" The main idea of the project is to discuss the idea as if it were a virtual boxing match between us. Also I usually give bonuses depending on performance. Think of this like a trial run<br/>
                            <br/>
                            The ideal candidate is responsive, talkative, a self starter, good at communication, creative, and has a bit of knowledge in pop culture/pop culture fashion as well as knowledge of various female characters across media such as: movies, cartoons, books, etc
                        </div>
                    </div>   
                    <div className='flex gap-2 my-2'>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Node.js</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>React</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>vue</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>+2 lagi</span>
                    </div> 
                </div>
            </div>
            <div className='border-t border-[#73B729]'>
                <div className='p-5 text-xl font-bold'>
                    <h3>Proposal Submited</h3>
                </div>
                <div className='p-5'>
                    <ul className="max-w-md divide-y divide-gray-200">
                        <li className="py-3 sm:pb-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        neil@gmail.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    2 Hours/day
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:pb-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        neil@gmail.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    2 Hours/day
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:pb-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        neil@gmail.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    2 Hours/day
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:pb-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        neil@gmail.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    2 Hours/day
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
