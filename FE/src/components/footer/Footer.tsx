import React from 'react'

const Footer = () => {
  return (
    <>
  <div className="bg-[#053D29] text-white h-[320px]">
        <div className=" grid grid-cols-7 w-[1300px] mx-auto pt-10 text-[13px]">
          <div className="col-span-2 mt-14">
            <p className="my-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <p>elit, sed do eiusmod tempor incididunt ut labore et</p>
            <p>dolore magna aliqua</p>
            <div className="flex justify-around w-1/3 h-4 mt-7 space-x-8 ">
              <img src="src/assets/image/fb.png" alt="" />
              <img src="src/assets/image/twitter.png" alt="" />
              <img src="src/assets/image/ins.png" alt="" />
              <img src="src/assets/image/yt.png" alt="" />
              <img src="src/assets/image/mdi_instagram.png" alt="" />
            </div>
          </div>
          <div className="col-span-2">
            <p className="font-bold text-xl text-[#F9F3EE]">Um</p>
            <ul className="">
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Kontaktiere uns
              </li>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Über uns
              </li>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Karriere
              </li>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Unternehmensinformationen
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <p className="font-bold text-xl text-[#F9F3EE]">Hilfe</p>
            <ul>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Unsere Produzenten
              </li>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Zahlung
              </li>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Versand
              </li>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Stornierung & Rückgabe
              </li>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Verstoß melden
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <p className="font-bold text-xl text-[#F9F3EE]">pOLITIK</p>
            <ul>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Rücknahmegarantie
              </li>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Nutzungsbedingungen
              </li>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Sicherheit
              </li>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Privatsphäre
              </li>
              <li className="flex items-center text-[#F9F3EE] hover:opacity-[.6] cursor-pointer py-2">
                Seitenverzeichnis
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-[#062F21] h-16 text-white px-[220px]">
        <p className="text-sm">2023 hood.de , Inc.</p>
        <img
          src="src/assets/image/icons_payment 1.png"
          alt=""
          className="h-6"
        />
        <p className="text-sm">Scroll to top</p>
      </div>

    </>
  )
}

export default Footer