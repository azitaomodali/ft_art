import React from 'react'

const Search = () => {
  return (
    <div>
        <h3 className='m-3'>اخرین وبلاگ ها</h3>
        <label classNameName=" block">
                <span className="sr-only">Search</span>
                <span className=" flex items-center  relative pr-2 mr-2">
                    
                    <svg className="h-5 w-5 fill-slate-300 absolute top-3 left-5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                   
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-2 pl-9 pr-3 shadow-company  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="جستجو کنید" type="text" name="search"/>
        </label>
    </div>
  )
}

export default Search