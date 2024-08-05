import useCart from "@/hooks/useCart";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data, calculateTotal, mutate, isLoading, isError } = useCart();
  const shippingFee = 30000;    

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error</p>;
  const totalAmount = calculateTotal() + shippingFee;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="flex-1 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Ảnh</th>
                <th className="px-4 py-2 border">Tên sản phẩm</th>
                <th className="px-4 py-2 border">Giá</th>
                <th className="px-4 py-2 border">Số lượng</th>
                <th className="px-4 py-2 border">Tổng giá</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.products?.map((product, index) => (
                <tr key={product._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">
                    <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded-md" />
                  </td>
                  <td className="px-4 py-2 border">{product.title}</td>
                  <td className="px-4 py-2 border">{product.price.toLocaleString()} VNĐ</td>
                  <td className="px-4 py-2 border">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => mutate({ action: 'DECREMENT', productId: product.productId })}
                      >
                        <FiMinus />
                      </button>
                      <span className="text-sm font-medium">{product.quantity}</span>
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => mutate({ action: 'INCREMENT', productId: product.productId })}
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2 border">{(product.price * product.quantity).toLocaleString()} VNĐ</td>
                  <td className="px-4 py-2 border">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => mutate({ action: 'REMOVE', productId: product.productId })}
                    >
                      <FiTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Thanh toán</h2>

            <div className="mb-4">
              <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-2">Mã giảm giá:</label>
              <div className="flex">
                <input
                  id="discount"
                  type="text"
                  className="border border-gray-300 px-3 py-2 rounded-l-md flex-1"
                />
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600"
                >
                  Áp dụng
                </button>
              </div>
            </div>

            <div className="mb-4">
            <p className="text-sm text-gray-600">Phí vận chuyển: {shippingFee.toLocaleString()} VNĐ</p>
            </div>

            <p className="text-xl font-semibold mb-4">Tổng cộng: {totalAmount.toLocaleString()} VNĐ</p>
            <Link
              to="/checkout"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 block text-center"
            >
              Thanh toán
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
