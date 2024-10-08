import { ProductContext } from '@/contexts/ProductContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const ListProduct = () => {
    const { state, handleRemove } = useContext(ProductContext)

    return (
        <>
            <Link to="/admin/product-add">
                <button className='btn btn-primary'>Add new Product</button>
            </Link>
            <div className="container mx-auto px-4">
                <table className="min-w-full bg-white border border-gray-200 text-center">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">#</th>
                            <th className="py-2 px-4 border-b">Image</th>
                            <th className="py-2 px-4 border-b">Title</th>
                            <th className="py-2 px-4 border-b">Price</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Danh muc</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.products.map((product, index) => (
                            <tr key={product._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">
                                    <img src={product.image} alt="" width={100} className="mx-auto" />
                                </td>
                                <td className="py-2 px-4 border-b">{product.title}</td>
                                <td className="py-2 px-4 border-b">{product.price}</td>
                                <td className="py-2 px-4 border-b">{product.description}</td>
                                <td className="py-2 px-4 border-b">{product.categoryId?.name}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => handleRemove(product._id!)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    >
                                        Xóa
                                    </button>
                                    <Link
                                        to={`/admin/product/edit/${product._id}`}
                                        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                    >
                                        Sửa
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListProduct
