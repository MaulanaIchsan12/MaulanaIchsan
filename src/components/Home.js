/* This example requires Tailwind CSS v2.0+ */
import Navbar from './Navbar'
import Footers from './Footers'
import Banners from '../pages/Banners'
import Barview from '../pages/Barview'
import Catalog from '../pages/Overview'
import Viewmen from '../pages/Viewmen'
import Viewwomen from '../pages/Viewwomen'
export default function Example() {
    return (
        <>
        <Navbar />
        <Banners />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Cape Nyari Baju Keren Susah?</span>
            <span className="block text-black">Di Eiger Aja, Banyak Produk Bagus-Bagus.</span>
            <span className="block text-black">Ea ga?, Ea Dong.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="Men"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800"
              >
                Men
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="Women"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-indigo-50"
              >
                Women
              </a>
            </div>
          </div>
        </div>
      </div>
        <Barview />
        <Catalog />
        <Viewmen />
        <Viewwomen />
        <Footers />
      </>
    )
  }
  