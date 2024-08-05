import instance from '@/apis'
import { IOrder } from '@/interfaces/order'
import { useEffect, useState } from 'react'

const Order = () => {
  const [order, setOrder] = useState<IOrder[]>([])

  useEffect(() => {
    (async () => {
      const response = await instance.get('/order')
      setOrder(response.data)
    })()
  }, [])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Order List</h1>
      {order.length === 0 ? (
        <p className="text-gray-500">No orders available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Tên</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Địa chỉ</th>
                <th className="py-2 px-4 border-b">Sô điện thoai</th>
                <th className="py-2 px-4 border-b">Thanh toán</th>
                {/* <th className="py-2 px-4 border-b"></th> */}
                <th className="py-2 px-4 border-b">Order Items</th>
                <th className="py-2 px-4 border-b">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {order.map((order) => (
                <tr key={order.userId}>
                  <td className="py-2 px-4 border-b">{order.customerInfo.name}</td>
                  <td className="py-2 px-4 border-b">{order.customerInfo.email}</td>
                  <td className="py-2 px-4 border-b">{order.customerInfo.address}</td>
                  <td className="py-2 px-4 border-b">{order.customerInfo.phone}</td>
                  <td className="py-2 px-4 border-b">{order.customerInfo.payment}</td>
                  {/* <td className="py-2 px-4 border-b">{order.customerInfo.city}</td> */}
                  <td className="py-2 px-4 border-b">
                    <ul>
                      {order.items.map((item) => (
                        <li key={item._id} className="mb-2">
                          <div className="flex items-center space-x-2">
                            <img src={item.image} alt={item.title} className="w-10 h-10 object-cover" />
                            <div>
                              <p>{item.title}</p>
                              <p>Price: ${item.price}</p>
                              <p>Quantity: {item.quantity}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-2 px-4 border-b">${order.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Order
