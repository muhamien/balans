import React, { useEffect } from 'react'
import { Input as antdInput } from 'antd';

const { Search } = antdInput;
const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function JobList({type,listName,hasRefreshButton}) {
    useEffect(()=>{
        console.log(listName,'props');
    },[])
  return (
    <div>
        {
            type === "jobs" && (
                <Search placeholder="input search text" onSearch={onSearch} size="large" enterButton />
            )
        }
        <div className='border-[#73B729] border py-2 rounded-lg my-4 min-w-56 w-full bg-white'>
            <div className='border-b border-[#73B729] p-4 flex justify-between'>
                <h2 className='font-semibold text-xl'>{listName}</h2>
                {
                    !!hasRefreshButton && (
                        <button className='w-max'>
                            <div className='p-2 w-max hover:text-white ease-out duration-300 bg-lime-100 text-black hover:bg-[#73B729] rounded-full'>
                                <FaArrowLeft/>
                            </div>
                        </button>
                    )
                }
            </div>
            <div className='border-b border-[#73B729] p-4 hover:bg-lime-200 ease-out duration-300 cursor-pointer'>
                <a href='/jobs/job-slug'>
                    <h2 className='font-semibold text-lg'>
                        Fullstack Java Developer required, long-term possibilty
                    </h2>
                    <span className='text-xs'>$20/hour - Posted 1 minutes ago</span>
                    <p className='text-sm text-gray-500 truncate'>
                        Hello, I need a Full-stack Java developer.

                        Tech stack:
                        - Java, Spring Boot, Spring, Spring Security, JPA/Hibernate, PgSQL
                        - Angular, React
                        - Docker, Git, IntelliJ, AWS
                        - WebSocket
                        - Knowledge of C#/Python and Kafka is big plus

                        Fell free and send me proposal.

                        I don't accept bot proposal, therefore start yoru proposal with the latest version of Spring Boot. For example, "--- 2.5.5 ---".
                    </p>   
                    <div className='flex gap-2 my-2'>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Boot</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Framework</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Angular</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>+2 lagi</span>
                    </div> 
                </a>
            </div>
            <div className='border-b border-[#73B729] p-4 hover:bg-lime-200 ease-out duration-300 cursor-pointer'>
                <a href='/jobs/job-slug'>
                    <h2 className='font-semibold text-lg'>
                        Looking for female freelancer to discuss a virtual boxing match 
                    </h2>
                    <span className='text-xs'>$20/hour - Posted 1 minutes ago</span>
                    <p className='text-sm text-gray-500 truncate'>
                    I'm looking for multiple female freelancers interested in discussing a virtual boxing match over messages throughout the course of a week. Specifically your opinions  in regards to boxing gloves you'd use, boxing equipment if we were in a boxing match together. As well as discuss various boxing related scenarios. You really don't have to be a pro at boxing or boxing terminology either. I'm thinking this could be something ongoing depending on the outcome.

                    The topic of our various discussions will be "what would it be like to lose to you in a boxing match?" The main idea of the project is to discuss the idea as if it were a virtual boxing match between us. Also I usually give bonuses depending on performance. Think of this like a trial run

                    The ideal candidate is responsive, talkative, a self starter, good at communication, creative, and has a bit of knowledge in pop culture/pop culture fashion as well as knowledge of various female characters across media such as: movies, cartoons, books, etc
                    </p>   
                    <div className='flex gap-2 my-2'>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Boot</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Framework</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Angular</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>+2 lagi</span>
                    </div> 
                </a>
            </div>
            <div className='border-b border-[#73B729] p-4 hover:bg-lime-200 ease-out duration-300 cursor-pointer'>
                <a href='/jobs/job-slug'>
                    <h2 className='font-semibold text-lg'>
                        Fullstack Java Developer required, long-term possibilty
                    </h2>
                    <span className='text-xs'>$20/hour - Posted 1 minutes ago</span>
                    <p className='text-sm text-gray-500 truncate'>
                        Hello, I need a Full-stack Java developer.

                        Tech stack:
                        - Java, Spring Boot, Spring, Spring Security, JPA/Hibernate, PgSQL
                        - Angular, React
                        - Docker, Git, IntelliJ, AWS
                        - WebSocket
                        - Knowledge of C#/Python and Kafka is big plus

                        Fell free and send me proposal.

                        I don't accept bot proposal, therefore start yoru proposal with the latest version of Spring Boot. For example, "--- 2.5.5 ---".
                    </p>   
                    <div className='flex gap-2 my-2'>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Boot</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Framework</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Angular</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>+2 lagi</span>
                    </div> 
                </a>
            </div>
            <div className='border-b border-[#73B729] p-4 hover:bg-lime-200 ease-out duration-300 cursor-pointer'>
                <a href='/jobs/job-slug'>
                    <h2 className='font-semibold text-lg'>
                        Looking for female freelancer to discuss a virtual boxing match 
                    </h2>
                    <span className='text-xs'>$20/hour - Posted 1 minutes ago</span>
                    <p className='text-sm text-gray-500 truncate'>
                    I'm looking for multiple female freelancers interested in discussing a virtual boxing match over messages throughout the course of a week. Specifically your opinions  in regards to boxing gloves you'd use, boxing equipment if we were in a boxing match together. As well as discuss various boxing related scenarios. You really don't have to be a pro at boxing or boxing terminology either. I'm thinking this could be something ongoing depending on the outcome.

                    The topic of our various discussions will be "what would it be like to lose to you in a boxing match?" The main idea of the project is to discuss the idea as if it were a virtual boxing match between us. Also I usually give bonuses depending on performance. Think of this like a trial run

                    The ideal candidate is responsive, talkative, a self starter, good at communication, creative, and has a bit of knowledge in pop culture/pop culture fashion as well as knowledge of various female characters across media such as: movies, cartoons, books, etc
                    </p>   
                    <div className='flex gap-2 my-2'>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Boot</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Framework</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Angular</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>+2 lagi</span>
                    </div> 
                </a>
            </div>
            <div className='border-b border-[#73B729] p-4 hover:bg-lime-200 ease-out duration-300 cursor-pointer'>
                <a href='/jobs/job-slug'>
                    <h2 className='font-semibold text-lg'>
                        Fullstack Java Developer required, long-term possibilty
                    </h2>
                    <span className='text-xs'>$20/hour - Posted 1 minutes ago</span>
                    <p className='text-sm text-gray-500 truncate'>
                        Hello, I need a Full-stack Java developer.

                        Tech stack:
                        - Java, Spring Boot, Spring, Spring Security, JPA/Hibernate, PgSQL
                        - Angular, React
                        - Docker, Git, IntelliJ, AWS
                        - WebSocket
                        - Knowledge of C#/Python and Kafka is big plus

                        Fell free and send me proposal.

                        I don't accept bot proposal, therefore start yoru proposal with the latest version of Spring Boot. For example, "--- 2.5.5 ---".
                    </p>   
                    <div className='flex gap-2 my-2'>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Boot</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Framework</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Angular</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>+2 lagi</span>
                    </div> 
                </a>
            </div>
            <div className='border-b border-[#73B729] p-4 hover:bg-lime-200 ease-out duration-300 cursor-pointer'>
                <a href='/jobs/job-slug'>
                    <h2 className='font-semibold text-lg'>
                        Looking for female freelancer to discuss a virtual boxing match 
                    </h2>
                    <span className='text-xs'>$20/hour - Posted 1 minutes ago</span>
                    <p className='text-sm text-gray-500 truncate'>
                    I'm looking for multiple female freelancers interested in discussing a virtual boxing match over messages throughout the course of a week. Specifically your opinions  in regards to boxing gloves you'd use, boxing equipment if we were in a boxing match together. As well as discuss various boxing related scenarios. You really don't have to be a pro at boxing or boxing terminology either. I'm thinking this could be something ongoing depending on the outcome.

                    The topic of our various discussions will be "what would it be like to lose to you in a boxing match?" The main idea of the project is to discuss the idea as if it were a virtual boxing match between us. Also I usually give bonuses depending on performance. Think of this like a trial run

                    The ideal candidate is responsive, talkative, a self starter, good at communication, creative, and has a bit of knowledge in pop culture/pop culture fashion as well as knowledge of various female characters across media such as: movies, cartoons, books, etc
                    </p>   
                    <div className='flex gap-2 my-2'>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Boot</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Spring Framework</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>Angular</span>
                        <span className='px-3 py-1 rounded-full text-xs bg-lime-50'>+2 lagi</span>
                    </div> 
                </a>
            </div>
        </div>
    </div>
  )
}
