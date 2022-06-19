const products = [
    {
      id: 1,
      name: 'EIGER SOLEIL SS TEES',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=10-CsaOoo49wTunKFRLObBUP27sJjPnZL',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'RP 169.000,00',
    },
    {
        id: 1,
        name: 'EIGER HIRAYA INTO THE FOREST T-SHIRT',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1fS7EBkHkE204dWiBxaPbifueF8-C3Pcv',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 159 000,00',
      },
      {
        id: 1,
        name: 'EIGER DEMI BOUTONS LS TEES',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1Qgpehc3NzJmFzPRn2Oh5b_C8fRE_HFPW',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 219.000,00',
      },
      {
        id: 1,
        name: 'EIGER TRACES DE ROUES T-SHIRT',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1hXTH2VN_d3gXX6netCzvuSaZdev5eu58',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 149.000,00',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-extrabold text-center tracking-tight text-gray-900">WOMEN'S PRODUCT</h2>
            <div class="space-x-2 text-right">
            <a href='Women'>
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
  