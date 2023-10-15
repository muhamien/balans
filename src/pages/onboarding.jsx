import React, { useState } from 'react'

export default function onboarding() {
    const [userType, setUserType] = useState("");
    const [currentMode, setCurrentMode] = useState("selectType");

    const selectUserType = (type) => {
        setUserType(type);
        setCurrentMode("completeBio")
    }

    if(currentMode === "selectType")
        return (
            <section>
                <div className="flex flex-col gap-20 items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div>
                        <h3 className='text-2xl font-bold'>Apakah anda ingin mendaftar sebagai:</h3>
                    </div>
                    <div className='flex flex-row gap-4 items-center justify-center '>
                        <button onClick={()=>{ selectUserType("my-jobs")}}>
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow h-[200px] hover:border-[#73B729] ease-out duration-300">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Client</h5>
                                <p className="mb-3 font-normal text-gray-700">Posting pekerjaan dan temukan talent terbaik</p>
                            </div>
                        </button>
                        <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-gray-400 opacity-100 dark:opacity-50"></div>
                        <button onClick={()=>{selectUserType("jobs")}}>
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow h-[200px] hover:border-[#73B729] ease-out duration-300">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Talent</h5>
                                <p className="mb-3 font-normal text-gray-700">Temukan pekerjaan dan bangun side hustle mu</p>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        )
    else
        return (
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white border-[#73B729] border rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Lengkapi Data dirimu
                            </h1>
                            
                            <form>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#73B729] focus:outline-none focus:ring-0 focus:border-[#73B729] peer" placeholder=" " required />
                                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#73B729] peer-focus:dark:text-[#73B729] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Lengkap</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#73B729] focus:outline-none focus:ring-0 focus:border-[#73B729] peer" placeholder=" " required />
                                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#73B729] peer-focus:dark:text-[#73B729] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birthdate</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#73B729] focus:outline-none focus:ring-0 focus:border-[#73B729] peer" placeholder=" " required />
                                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#73B729] peer-focus:dark:text-[#73B729] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No. KTP</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#73B729] focus:outline-none focus:ring-0 focus:border-[#73B729] peer" placeholder=" " required />
                                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#73B729] peer-focus:dark:text-[#73B729] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No. NPWP</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#73B729] focus:outline-none focus:ring-0 focus:border-[#73B729] peer" placeholder=" " required />
                                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#73B729] peer-focus:dark:text-[#73B729] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pekerjaan Utama</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#73B729] focus:outline-none focus:ring-0 focus:border-[#73B729] peer" placeholder=" " required />
                                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#73B729] peer-focus:dark:text-[#73B729] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Durasi Bekerja</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#73B729] focus:outline-none focus:ring-0 focus:border-[#73B729] peer" placeholder=" " required />
                                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#73B729] peer-focus:dark:text-[#73B729] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status Keluarga</label>
                                </div>
                    
                                <button type="submit" className="text-white bg-[#73B729] hover:bg-[#137536] ease-out duration-300 focus:ring-4 focus:outline-none focus:ring-[#137536] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Simpan</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        )
}
