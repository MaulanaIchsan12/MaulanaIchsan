// Baris ke Tiga dalam Home

// Import BackGround Overview
import bgover from '../images/eiger.png'
const product = {
  images: [
    {
      src: 'https://magento.eigeradventure.com/media/wysiwyg/Homepage/PWA/JUNE22/Back_To_Trip_370x382_2.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://magento.eigeradventure.com/media/wysiwyg/Homepage/PWA/JUNE22/Tops_360x176_4.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://magento.eigeradventure.com/media/wysiwyg/Homepage/PWA/JUNE22/Sandals_360x176_5.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
    {
      src: 'https://magento.eigeradventure.com/media/wysiwyg/Homepage/PWA/JUNE22/Duffle_Bag360x176.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://magento.eigeradventure.com/media/wysiwyg/Homepage/PWA/JUNE22/Watch_360x176_3.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
}


export default function Example() {
  return (
    <>
    <div className="bg-white">

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[3].src}
                alt={product.images[3].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[4].src}
                alt={product.images[4].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
    </div>
    <br />
    <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src={bgover}
        class="block w-full"
        alt="Wild Landscape"
      />
    </div>
  </div>
</div>
    </>
  )
}
