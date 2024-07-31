import { ProductContext } from "@/contexts/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { state } = useContext(ProductContext);

  return (
    <>
      <h1 className="text-danger">Sản Phẩm</h1>
      <div className="container mx-auto px-4">
  <div className="row">
    {state.products.map((product) => (
      <div className="col-6 col-md-4 col-lg-3 mb-4" key={product._id}>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="p-5">
            <div className="flex justify-center">
              <img src={product.image} alt="" className="w-full h-48 object-cover rounded-t-lg" />
            </div>
            <h3 className="text-xl text-lg-font-bold mt-2">Tên: {product.title}</h3>
            <p className="text-red-500 mt-1"> Giá: {product.price} VND</p>
            <p className="text-gray-500-font-bold mt-1">Mô tả: {product.description}</p>
            <p className="text-gray-500-font-bold mt-1">Thể loại: {product.categoryId?.name}</p>
            <Link to={`/product-detail/${product._id}`} className="text-yellow-500 ml-14">Xem chi tiết</Link>
            <div className="flex justify-between mt-4 ">
              <button className="bg-blue-500 hover:bg-blue-70 py-2 px-3 rounded bx bx-cart-add">
               
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
               Mua ngay
              </button>
            </div>


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
