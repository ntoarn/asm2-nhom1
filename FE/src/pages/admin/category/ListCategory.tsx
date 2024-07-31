import { CategoryContext } from '@/contexts/CategoryContext'
import { ProductContext } from '@/contexts/ProductContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const ListCategory = () => {
    const { state, handleRemoveCate } = useContext(CategoryContext)

    return (
        <>
            <Link to="/admin/category-add">
                <button className='btn btn-primary'>Add new Category</button>
            </Link>
            <div className="container mx-auto px-4">
                <table className="min-w-full bg-white border border-gray-200 text-center">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">#</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Slug</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state?.categories.map((category, index) => (
                            <tr key={category._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">{category.name}</td>
                                <td className="py-2 px-4 border-b">{category.slug}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => handleRemoveCate(category._id!)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    >
                                        Xóa
                                    </button>
                                    <Link
                                        to={`/admin/category/edit/${category._id}`}
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

export default ListCategory
