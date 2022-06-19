
export default function index() {
    return (
      <div className="overflow-y-hidden">
        <div className="relative flex justify-center items-center md:justify-start ">
          <img className="hidden lg:block h-90 w-full" src="https://thumbor.sirclocdn.com/unsafe/1170x420/filters:format(webp)/https://magento.eigeradventure.com/media/wysiwyg/Homepage/PWA/_1170X420.jpg" alt="randeer" />
          <img className="md:block lg:hidden hidden   w-full " src="https://thumbor.sirclocdn.com/unsafe/1170x420/filters:format(webp)/https://magento.eigeradventure.com/media/wysiwyg/Homepage/PWA/_1170X420.jpg" alt="randeer" />
          <img className="md:hidden w-full " src="https://thumbor.sirclocdn.com/unsafe/1170x420/filters:format(webp)/https://magento.eigeradventure.com/media/wysiwyg/Homepage/PWA/_1170X420.jpg" alt="randeer" />
          <div className="flex absolute justify-start flex-col md:flex-row items-center">
            <div className=" py-32 sm:py-20  md:hidden" />
            <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
              <h4 className="text-xl sm:text-5xl xl:text-4xl text-center md:text-left font-extrabold leading-6 xl:leading-10 text-gray-100 md:w-96 5xl:w-1/2">PEACE THROUGH ANY POSE</h4>
              <p className="mt-4 md:w-80 lg:w-2/3 xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200">Eiger Your Style</p>
              <a href="Men">
              <button className="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
                Explore Now
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  