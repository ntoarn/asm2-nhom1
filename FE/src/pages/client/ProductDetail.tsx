import { ProductContext } from "@/contexts/ProductContext";
import { useContext } from "react";
const ProductDetail = () => {
  const { state } = useContext(ProductContext);
 

  return (
    <div><div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      {state.products.map((product) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8" key={product._id}>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md h-full">
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-center">
                  <img src={product.image} alt="" className="w-full h-48 object-cover rounded-t-lg" />
                </div>
                <h3 className="text-xl text-lg-font-bold mt-2">Tên: {product.title}</h3>
                <p className="text-red-500 mt-1"> Giá: {product.price} VND</p>
                <p className="text-gray-500-font-bold mt-1">Mô tả: {product.description}</p>
                <p className="text-gray-500-font-bold mt-1">Thể loại: {product.categoryId?.name}</p>
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div></div>
  )
}

export default ProductDetail