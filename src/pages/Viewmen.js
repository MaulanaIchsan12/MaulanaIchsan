const products = [
    {
      id: 1,
      name: 'EIGER AMVINE HENLEY LS',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1EwC5rIHhk85FfMvP6TbAiRfyq1EajvB2',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'RP 299.000,00',
    },
    {
      id: 1,
      name: 'EIGER THRIFT WALLET',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1yaOGyt2rQbl_UgcfuRSBaCpFhnkGgOKX',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'RP 109.000,00',
    },
      {
        id: 1,
        name: 'EIGER Z-RATTLER 1.0 SE WAIST BAG',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1Uf76bV7vE8Ge29ObXOyYe0HLCuicXavL',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 219.000,00',
      },
      {
        id: 1,
        name: 'EIGER ACCELERATION JACKET SHIRT',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1GbO6SXEvk4tGsGlhOTBFrQADOj5WszWa',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 509.000,00',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-extrabold text-center tracking-tight text-gray-900">MEN'S PRODUCT</h2>
            <div class="space-x-2 text-right">
            <a href='Men'>
            <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5  text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
            >lihat semua...
            </button>
            </a>
            </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    )
  }
  