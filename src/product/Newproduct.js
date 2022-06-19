import Navbar from '../components/Navbar'
import Footers from '../components/Footers'

const products = [
    
    {
        id: 1,
        name: 'REEBOK MENS TRAINING POLO',
        href: '#',
        imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/4/04-reebok-afaporee5-reebok-men-s-training-polo---grey-reemgctpo92c-grey1.jpg',
        imageAlt: "",
        price: 'Rp.199.000,00',
        color: 'GREY',
      },
      {
        id: 1,
        name: 'REEBOK MENS LCT POLO',
        href: '#',
        imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/4/04-REEBOK-AYAPOREE5-Reebok-Mens-LCT-Polo--Burgundy-Burgundy.jpg',
        imageAlt: "",
        price: 'Rp.299.000,00',
        color: 'MAROON',
      },
      {
        id: 1,
        name: 'REEBOK VECTOR MENS TEE',
        href: '#',
        imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/3/03-REEBOK-AYAV6REE5-REEMGCLT212A-Black.jpg',
        imageAlt: "",
        price: 'Rp.199.000,00',
        color: 'BLACK',
      },
      {
        id: 1,
        name: 'REEBOK MENS RUNNING TEE',
        href: '#',
        imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/3/03-REEBOK-ARAV6REE5-REEMGCRT211V-Blue.jpg',
        imageAlt: "",
        price: 'Rp.199.000.000,00',
        color: 'MISTY BLUE',
      },
      {
        id: 1,
        name: 'REEBOK GS VECTOR TEE MENS T-SHIRT',
        href: '#',
        imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/1/01-Reebok-AYAV6REE5-REEHD3999-Coral.jpg',
        imageAlt: "",
        price: 'Rp.259.000.000,00',
        color: 'CORAL',
      },
      {
        id: 1,
        name: 'REEBOK STACKED MENS T-SHIRT',
        href: '#',
        imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/1/01-REEBOK-AYAV6REE5-REEFP9150-Black.jpg',
        imageAlt: "",
        price: 'Rp.259.000,00',
        color: 'BLACK',
      },
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
        name: 'EIGER ETRIER MT SHORTS',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1CG-G4DMhEuH0DAWwogtgr-RcQqZaYpKL',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 569 000,00',
      },
      {
        id: 1,
        name: 'EIGER ON CLOUD NINE',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1HwMcNCX8dR4bQeBdmuiOIjXnN2YvdIVc',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 199.000,00',
      },
      {
        id: 1,
        name: 'EIGER EQUATOR LINE WALLET',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1CHThsLiRoWAnipa9s6tfYzYkc-n14WFY',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 89.000,00',
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
        name: 'EIGER NEPALESE SCRAF',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1Ux9pc2Gw6-8rXYcdtimJLweJBrYTCNAT',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 179.000,00',
      },
      {
        id: 1,
        name: 'EIGER HYDRA 15 HYDROPACK',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=15kUZOpjwHEny5WzH3PnvH9uPyFjcT5KE',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 649.000,00',
      },
      {
        id: 1,
        name: 'EIGER 89 PATTERN HONALO FACE MASK',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1IbdlCS7yofKoS8K5ymDg7Fwn7atxEeTO',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 49.000,00',
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
        name: 'EIGER Z-KANE WATER BOTTLE',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1naucJTvbMEWqAq1UijdbqwZhIWmkQ-1t',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 79.000,00',
      },
      {
        id: 1,
        name: 'EIGER VANQUISH 1.3 TANK BAGS',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1U9QOgCsA65hdsS-GboIPX6LnMEW0qBJu',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 699.000,00',
      },
      {
        id: 1,
        name: 'EIGER DRY BAG 2L',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1ZuT82haKHR77J_Q0pl01jFWYyrhBWYba',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 69.000,00',
      },
      {
        id: 1,
        name: 'EIGER ROCKLANDS ',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=18xPinEGuf2iXmAqQZndi7wWyN-D_ZMLl',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 159.000,00',
      },
      {
        id: 1,
        name: 'EIGER ETRIER MT LP UPDATE PANTS',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1NlXdlQdj2wCvDyY1JArxEy74YNjtoOOo',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'RP 659.000,00',
      },
      {
        id: 1,
        name: 'EIGER LA VAGUE LS',
        href: '#',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1Qfl14fJJeRPYtzANwzyXJWxIM37e7O8k',
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
      {
        id: 1,
        name: 'REEBOK TE WOVEN JACKET MENS',
        href: '#',
        imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/1/01-REEBOK-AFAJKREE5-REEFP9172-black.jpg',
        imageAlt: "",
        price: 'Rp.599.000,00',
        color: 'BLACK',
        },
        {
          id: 1,
          name: 'REEBOK MENS TRAINING JACKET',
          href: '#',
          imageSrc: 'https://www.reebok.id/media/catalog/product/cache/1384ea813c36abc3a773dd6494b9b881/0/4/04-REEBOK-AFAJKREE5-REEMGCTJ211B-Navy.jpg',
          imageAlt: "",
          price: 'Rp.499.000,00',
          color: 'NAVY',
        },
        {
          id: 1,
          name: 'REEBOK MENS HOODIE',
          href: '#',
          imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/1/01-REEBOK-AYAHDREE5-Reebok-Mens-Hoodie---Black-Black.jpg',
          imageAlt: "",
          price: 'Rp.599.000,00',
          color: 'BLACK',
        },
        {
          id: 1,
          name: 'REEBOK TE WOVEN JACKET MENS JACKET',
          href: '#',
          imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/1/01-Reebok-AFAJKREE5-REEFU3098-Navy.jpg',
          imageAlt: "",
          price: 'Rp.559.000,00',
          color: 'NAVY',
        },
        {
          id: 1,
          name: 'REEBOK MENS VECTOR HOODIE',
          href: '#',
          imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/1/01-REEBOK-AYAHDREE5-Reebok-MEN-S-VECTOR-HOODIE---NAVY-REEMGCLH921B-Navy_11_1.jpg',
          imageAlt: "",
          price: 'Rp.599.000,00',
          color: 'NAVY',
        },
        {
          id: 1,
          name: 'REEBOK MEN GRAPH VECTOR TEE',
          href: '#',
          imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/1/01-REEBOK-AFAV6REE5-REEMGCTT923P-Blue.jpg',
          imageAlt: "",
          price: 'Rp.199.000,00',
          color: 'BLUE HILLS',
        },
        
    {
        id: 1,
        name: 'REEBOK VECTOR MENS TEE',
        href: '#',
        imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/3/03-REEBOK-AYAV6REE5-REEMGCLT212A-Black.jpg',
        imageAlt: "",
        price: 'Rp.199.000,00',
        color: 'BLACK',
      },
      {
        id: 1,
        name: 'REEBOK MENS RUNNING TEE',
        href: '#',
        imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/3/03-REEBOK-ARAV6REE5-REEMGCRT211V-Blue.jpg',
        imageAlt: "",
        price: 'Rp.199.000.000,00',
        color: 'MISTY BLUE',
      },
      {
        id: 1,
        name: 'REEBOK GS VECTOR TEE MENS T-SHIRT',
        href: '#',
        imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/1/01-Reebok-AYAV6REE5-REEHD3999-Coral.jpg',
        imageAlt: "",
        price: 'Rp.259.000.000,00',
        color: 'CORAL',
      },
      {
        id: 1,
        name: 'REEBOK STACKED MENS T-SHIRT',
        href: '#',
        imageSrc: 'https://www.reebok.id/media/catalog/product/cache/c1feb3550df60acd013ba17bf29e4991/0/1/01-REEBOK-AYAV6REE5-REEFP9150-Black.jpg',
        imageAlt: "",
        price: 'Rp.259.000,00',
        color: 'BLACK',
      },
      
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
        {
          id: 1,
          name: 'EIGER X-NIVALE SS TEES',
          href: '#',
          imageSrc: 'https://drive.google.com/uc?export=view&id=1T12Xx-y7L5NnGdGMoLYeIUzbgT8vmHyg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: 'RP 239.000,00',
        },
        {
          id: 1,
          name: 'EIGER SINKA SS ACTIVE TEES WS',
          href: '#',
          imageSrc: 'https://drive.google.com/uc?export=view&id=11JlQyNEmbbyhXLhKfhNu3u_P1OjXK8iO',
          imageAlt: "Front of men's Basic Tee in black.",
          price: 'RP 189.000,00',
        },
        {
          id: 1,
          name: 'EIGER SINKA LS ACTIVE TESS WS',
          href: '#',
          imageSrc: 'https://drive.google.com/uc?export=view&id=1uBA-ukUZ7v2_FzRcN1PXFlVkO28g94Ft',
          imageAlt: "Front of men's Basic Tee in black.",
          price: 'RP 239.000,00',
        },
        {
          id: 1,
          name: 'EIGER TWO WHEELERS T-SHIRT',
          href: '#',
          imageSrc: 'https://drive.google.com/uc?export=view&id=1eYtqzTlUmbREdVh5IVHiWib13qk0LwGz',
          imageAlt: "Front of men's Basic Tee in black.",
          price: 'RP 199.000,00',
        },
        {
          id: 1,
          name: 'EIGER SERAYU SS TEES',
          href: '#',
          imageSrc: 'https://drive.google.com/uc?export=view&id=1gAON7J3SzM04FMj64tcXn2saStrb5EA9',
          imageAlt: "Front of men's Basic Tee in black.",
          price: 'RP 169.000,00',
        },
    // More products...
  ]
  
  export default function Example() {
    return (
      <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-2 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-extrabold text-left tracking-tight text-gray-900">NEW's PRODUCT</h2>
          <br />
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
        <div class="flex space-x-2 justify-center">
          <a href='StoreNav'>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >Click me
          </button>
          </a>
        </div>
        <br />
      </div>
      <Footers />
      </>
    )
  }
  