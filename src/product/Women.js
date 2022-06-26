import Navbar from '../components/Navbar'
import Footers from '../components/Footers'
import Axios from "axios";
import React, { useState, useEffect } from "react";
  
  export default function Example() {
    
      const [womens, setWomen] = useState([]);
  
      useEffect(() => {
        getWomen();
      }, []);
      
      const getWomen = () => {
        Axios.get(`https://raw.githubusercontent.com/MaulanaIchsan12/mdbkjson/main/women.json`)
          .then((res) => {
            const data = res.data;
            setWomen(data.womens);
          })
          .catch(function (error) { 
            // handle error
            console.log(error);
          });
      };
  
    return (
      <>
      <div className="bg-white">
      <Navbar />
        <div className="max-w-2xl mx-auto py-6 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-extrabold text-center tracking-tight text-gray-900">WOMEN'S PRODUCT</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {womens.map((womens) => (
              <div key={womens.WomensID} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={womens.url}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={womens.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {womens.WomensName}
                      </a>
                    </h3>
                   <p>{womens.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{womens.Harga}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="flex space-x-2 justify-center">
          <a href='Home'>
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
  