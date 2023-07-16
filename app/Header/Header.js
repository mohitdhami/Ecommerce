export default function Header() {
    return <>
        <header>
            {/* Header Line 1 */}
            <div className="flex bg-neu-black p-3 align-center justify-center fixed top-0 left-0 right-0 border-2 border-b-slate-white">
                {/*Logo Here */}
                <div className="text-slate-white cursor-pointer">Store</div>

                {/* Search Items: Input Bar */}
                <div className="ml-3">
                    <input className="p-2 rounded-l-lg h-7 focus:outline-none" type="text"/>
                    
                </div>

                {/* Search Items: Button Icon */}
                <div className="bg-slate-white rounded-r-md cursor-pointer p-0.5 pl-2 pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"> 
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                </div>

                {/* Icon and Button: Shopping Cart */}
                <div className="bg-slate-white rounded-md cursor-pointer p-0.5 pl-2 pr-2 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>

                {/* Login Icon and Button */}
                <div className="bg-slate-white rounded-md cursor-pointer p-0.5 pl-2 pr-2 ml-2 flex">
                    <p className="mr-1">Login</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            </div>
        </header>
    </>
}