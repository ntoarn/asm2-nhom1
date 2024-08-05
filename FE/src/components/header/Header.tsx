
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#4E7C32] to-[#abaf98] py-4 px-6">
    <div className="flex justify-center items-center mb-4">
      <div className="flex items-center space-x-4 relative">
        <div>
        <input
          type="text"
          placeholder="Suchen Sie nach Produkten, Marken und mehr"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 w-[500px]"
        />
        <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-4 h-4 absolute left-[470px] top-3">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
        </div>
        <div className="text-white pl-20 pr-[150px] flex cursor-pointer">
          <img
            src="/src/assets/image/mui_ten_xuong.png"
            alt=""
            className="w-auto h-2 mt-[10px] ml-2"
          />
        </div>
        <div className="flex">
          <div>
          <i className='bx bxs-user-circle w-[25px]'  ></i>
          </div>
          <a href="#" className="text-gray-50 hover:text-white pl-1">
            Account
          </a>
        </div>
        <div className="flex pl-14">
        <div>
        <i className='bx bx-star w-[25px]' ></i>

          </div>
          <Link to={`/cart`}  className="text-gray-50 hover:text-white pl-1">
            Cart
          </Link>
        </div>
        <div className="flex pl-14">
        <div>
          </div>
          <Link to={`/register`} className="text-gray-50 hover:text-white pl-1">
            Register
          </Link>
        </div>
        <div className="flex pl-14">
        <div>
          </div>
          <Link to={`/login`} className="text-gray-50 hover:text-white pl-1">
            Login
          </Link>
        </div>
      </div>
    </div>

    {/* Thanh ngang phân cách */}
    <div className="border-t border-white w-full max-w-screen-xl mx-auto mb-4"></div>

    {/* Các mục menu */}
    <div className="flex items-start ml-16 ">
      <div className="flex items-center space-x-8 text-nowrap">
        <Link to={`/`}  className="text-gray-50 hover:text-white px-4">
         Home
        </Link>
        <div className="relative menu-item"><a href="#" className="text-gray-50 hover:text-white px-4 flex justify-center items-end gap-1 ">
          ProductList
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mb-[1px] size-4">
<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg></a>
<section className="w-[100px] bg-white text-[#665345] absolute left-4 top-6 z-10 hidden" id="dropdown-menu">
  <div className="flex gap-2 justify-start items-center px-2 cursor-pointer">
    <div className="w-1 h-1 rounded-full bg-[#665345] dotted-menu"></div>
    Cần Ta
  </div>
  <div className="flex gap-2 justify-start items-center px-2 cursor-pointer">
    <div className="w-1 h-1 rounded-full bg-[#665345] dotted-menu"></div>
    Cần Ta
  </div>
</section>

        </div>
        
        <Link to={`/about`} className="text-gray-50 hover:text-white px-4">
          About
        </Link>
        
        
      </div>
    </div>
  </div>
  )
  };
  export default Header;