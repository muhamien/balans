import { signIn } from 'next-auth/react'
import React from 'react'

export default function login({providers}) {
  return (
    <div>
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center my-4">
                    <img src="/images/BALANS.png" className="h-8 mr-3" alt="Balans Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Balans<span className="text-[#137536]">Work</span></span>
                </a>
                <div className="w-full bg-white border-[#73B729] border rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <button
                            onClick={()=>{signIn('google')}}
                            className="px-4 py-2 w-full justify-center ease-out duration-300 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400">
                            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                            <span>Login with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
