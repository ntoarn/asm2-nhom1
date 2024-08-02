import instance from "@/apis";
import { IProduct } from "@/interfaces/Product";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams<{id: string}>();
  const [product, setProduct] = useState<IProduct>(
    {
      image: "",
        title: "",
        price: 0,
        description: "",
    }
  );
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <>
 <div className="backgound-two">
        <div className="px-[200px] w-full">
          <div className="flex mt-[100px] gap-6">
            <div className="flex-1 space-y-12 justify-center items-center flex-col flex">
              <img src={product.image} alt="" width={250}/>
              <div className="flex justify-center items-center gap-6">
                <img src={product.image} alt="" width={106} />
                <img src={product.image} alt="" width={106} />
                <img src={product.image} alt="" width={106} />
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-4">
              <p className="text-[#4E7C32] font-bold">{product?.categoryId?.name}</p>
              <span className="text-[#1D2025] font-bold text-[44px]">
                {product.title}
              </span>
              <span className="text-[#68707D] text-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </span>
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-[#1D2025] font-bold text-[30px]">
                     {product.price} VND
                  </span>
                  
                </div>
                <span className="text-[16px] font-bold text-[#1D2025] line-through block">
                  $250.00
                </span>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="w-[157px] h-[55px] bg-[#F7F8FD] flex justify-evenly items-center space-x-2">
                    <span className="text-[#505F4E] font-bold cursor-pointer ">
                      -
                    </span>
                    <span className="text-[16px] font-bold">3</span>
                    <span className="text-[#505F4E] font-bold cursor-pointer">
                      +
                    </span>
                  </div>
                  <div className="w-[273px] h-[55px] bg-[#4E7C32] flex justify-center items-center gap-4 rounded-lg hover:opacity-80 cursor-pointer">
                    <img src="/src/assets/image/icon-cart 2.png" alt="" />
                    <p className="text-[16px] font-bold text-white">Add to cart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <p className="text-[#4E7C32] text-[30px] mt-10">Description</p>
              <span className="text-[#665345]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the <br />
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of <br />
                type and scrambled it.
              </span>
            </div>
            
          </div>

          

         

          <div className="w-full grid grid-cols-2 gap-4 mt-10">
            <div className="flex items-end">
              <div className="mt-[30px]">
                <div className="flex items-center space-x-2">
                  <p className="text-[#4E7C32] text-[16px]">Aman Gupta</p>
                  <div className="pl-10 h-3" >
                  <i className='bx bx-star' ></i>
                  <i className='bx bx-star' ></i>
                  <i className='bx bx-star' ></i>
                  <i className='bx bx-star' ></i>
                  <i className='bx bx-star' ></i>
                    
                    </div>
                </div>
                <span className="text-[#665345]  text-[11px]">
                  I've been using this cleanser for about five or six months now
                  and my acne
                  <br />
                  is almost completely gone. I really struggled for years with
                  my skin and tried
                  <br />
                  everything possible but this is the only thing that managed to
                  clear up my
                  <br />
                  skin. 100% recommend and will continue to use it for sure.
                </span>
              </div>
            </div>
            <div>
              <div>
               
              </div>
              <div>
                <div className="mt-[30px]">
                  <div className="flex items-center space-x-2">
                    <p className="text-[#4E7C32] text-[16px]">Aman Gupta</p>
                    <div className="flex items-center space-x-2">
                  <p className="text-[#4E7C32] text-[16px]">Aman Gupta</p>
                  <div className="pl-10 h-3" >
                  <i className='bx bx-star' ></i>
                  <i className='bx bx-star' ></i>
                  <i className='bx bx-star' ></i>
                  <i className='bx bx-star' ></i>
                  <i className='bx bx-star' ></i>
                    
                    </div>
                </div>
                  </div>
                  <span className="text-[#665345]  text-[11px]">
                    I've been using this cleanser for about five or six months
                    now and my acne
                    <br />
                    is almost completely gone. I really struggled for years with
                    my skin and tried
                    <br />
                    everything possible but this is the only thing that managed
                    to clear up my
                    <br />
                    skin. 100% recommend and will continue to use it for sure.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10">
           
          </div>

          <div className="flex mt-10 pb-10 justify-center items-center">
            <div className="w-2/5 p-4">
              <p className="text-[40px] font-bold text-[#505F4E]">
                Etwas abonnieren*
              </p>
              <p className="text-[40px] font-bold text-[#505F4E]">
                _ Unser Newsletter
              </p>
              <div className="pl-[90px] mt-10 text-[#555555]">
                <span className="text-[14px]">
                  Get weekly updates about our <br /> products via email, no
                  spam <br />
                  guaranteed we promise ✌️
                </span>
              </div>
            </div>

            <div className="relative mt-[185px] mb-12">
              <input
                type="text"
                placeholder="youremail123@gmail.com"
                className="p-2 border border-gray-300 mb-2 w-[508px] h-[62px]"
              />
              <button className="absolute top-0 right-0 mt-8 p-2 bg-[#656C66] text-white w-[180px] h-[56px]">
                ABONNIEREN
              </button>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default ProductDetail;
