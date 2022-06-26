import Navbar from '../components/Navbar'
import Footers from '../components/Footers'
import Axios from "axios";
import React, { useState, useEffect } from "react";


export default function Example() {
    
    const [men, setMen] = useState([]);

    useEffect(() => {
      getMen();
    }, []);
    
    const getMen = () => {
      Axios.get(`https://raw.githubusercontent.com/MaulanaIchsan12/mdbkjson/main/Mens.json`)
        .then((res) => {
          const data = res.data;
          setMen(data.men);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };


    return (
      <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-2 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-extrabold text-left tracking-tight text-gray-900">MEN'S PRODUCT</h2>
          <br />
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {men.map((men) => (
            <a key={men.MenID} href={men.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={men.url}
                  alt='Person using a pen to cross a task off a productivity paper card.'
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{men.MenName}</h3>
              <p>{men.color}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">{men.Harga}</p>
            </a>
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
  