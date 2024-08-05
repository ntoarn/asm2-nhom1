import Banner from "@/components/banner/Banner";
import { ProductContext } from "@/contexts/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { state } = useContext(ProductContext);

  return (
    <>
      <Banner/>
      <h1 className="text-red-600 text-center text-3xl font-bold my-8">Sản Phẩm</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {state.products.map((product) => (
            <div className="bg-white border border-gray-200 rounded-lg shadow-md" key={product._id}>
              <div className="p-5">
                <div className="flex justify-center">
                  <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
                </div>
                <h3 className="text-lg font-bold mt-2">{product.title}</h3>
                <p className="text-red-500 mt-1">Giá: {product.price} VND</p>
                <p className="text-gray-500 font-bold mt-1">Mô tả: {product.description}</p>
                <p className="text-gray-500 font-bold mt-1">Thể loại: {product.categoryId?.name}</p>
                <Link to={`/product-detail/${product._id}`} className="text-yellow-500 mt-2 inline-block">Xem chi tiết</Link>
                <div className="flex justify-between mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded">
                    <i className="bx bx-cart-add"></i>
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
