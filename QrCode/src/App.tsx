import { QRCodeCanvas } from 'qrcode.react';
import React, { useState } from 'react'

const App: React.FC = () => {
  
  const [url, setUrl] = React.useState<string>("Welcome!");
  const [color, setColor] = React.useState<string>("black");
  return (
    <div className='w-full h-screen flex flex-col gap-5 justify-center items-center border-2  border-black shadow-md'>
      <h1 className="text-center font-bold">QR Code Generator</h1>

      <QRCodeCanvas
        value={url}
        level='H'
        fgColor={color}
      />

<form>
      <div className="space-y-12">


        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Generator Information*</h2>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                URL/Text
              </label>
              <div className="mt-2 w-full">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              
              <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Color
              </label>
              <div className="mt-2 w-full">
                <input
                  type="color"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-10 rounded-md border-0  text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              

          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <input type="reset" className="text-sm font-semibold leading-6 text-gray-900" value="Cancel"/>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Generate
        </button>
      </div>
    </form>
    </div>
  )
}

export default App
