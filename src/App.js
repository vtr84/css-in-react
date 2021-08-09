
const App = () => {
    return (
      <div className="pt-20 bg-gray-100 h-screen">
        <div className="px-10">
          <div id="profile" className="w-full rounded-lg shadow-2xl bg-white">
            <div className="pt-4 px-4 md:pt-8 md:px-8 text-center bg-bookWhite">
              <div className="block rounded-full bg-indigo-200 shadow-xl mx-auto -mt-16 h-36 w-36 bg-cover bg-center" style={{backgroundImage: `url('avatar1.png')` }}>
              </div>
              <h1 className="text-3xl font-bold pt-3">Username</h1>
              <div className="mx-auto w-4/5 pt-3 border-b-2 border-indigo-600 opacity-25"></div>
            </div>
            <div className="px-2">
              <div>
                <p className="pl-4 pt-4 text-base font-bold flex items-center justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 fill-current text-indigo-700 pr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  My Favourite Books :
                </p>
                <div class="flex items-center overflow-hidden mt-2 ml-14">
                  <img class="inline-block h-32 w-20 rounded-md text-white border-2 border-white hover:border-black object-cover object-center" src="https://picsum.photos/200/300" alt=""/>
                  <img class="-ml-3 sm:ml-1 md:ml-3 inline-block h-32 w-20 rounded-md text-white border-2 border-white hover:border-black object-cover object-center" src="https://picsum.photos/200/300" alt=""/>
                </div>
              </div>
              <div>
                <p className="pl-4 pt-4 text-base font-bold flex items-center justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 fill-current text-indigo-700 pr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Books that I have read :
                </p>
                <div class="flex items-center overflow-hidden mt-2 ml-14 mb-2">
                  <img class="inline-block h-32 w-20 rounded-md text-white border-2 border-white hover:border-black object-cover object-center" src="https://picsum.photos/200/300" alt=""/>
                  <img class="-ml-3 sm:ml-1 md:ml-3 inline-block h-32 w-20 rounded-md text-white border-2 border-white hover:border-black object-cover object-center" src="https://picsum.photos/200/300" alt=""/>
                  <img class="-ml-3 sm:ml-1 md:ml-3 inline-block h-32 w-20 rounded-md text-white border-2 border-white hover:border-black object-cover object-center" src="https://picsum.photos/200/300" alt=""/>
                  <img class="-ml-3 sm:ml-1 md:ml-3 inline-block h-32 w-20 rounded-md text-white border-2 border-white hover:border-black object-cover object-center" src="https://picsum.photos/200/300" alt=""/>
                  <img class="-ml-3 sm:ml-1 md:ml-3 inline-block h-32 w-20 rounded-md text-white border-2 border-white hover:border-black object-cover object-center" src="https://picsum.photos/200/300" alt=""/>
                </div>
              </div>
              <div className="text-center">
                <button className="-mb-4 bg-pink-200 hover:bg-pink-400 text-black font-bold px-2 pb-2 rounded-full">
                ...
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default App