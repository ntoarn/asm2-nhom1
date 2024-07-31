import { ProductContext } from '@/contexts/ProductContext'
import  { useContext } from 'react'
import { Link } from 'react-router-dom'

const ListProduct = () => {
    const {state, handleRemove}= useContext(ProductContext)

  return (
    <>
    <Link to="/admin/product-add">
        <button>Add new Product</button>
    </Link>  
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Danh muc</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {state.products.map((product, index) => (
                    <tr key={product._id}>
                        <td>{index + 1}</td>
                        <td>{product.image}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.categoryId?.name}</td>
                        <td>
                            <button onClick={() => handleRemove(product._id!)}>Xoa</button>
                        </td>
                        <Link to={`/admin/product/edit/${product._id}`}>
                            Sua
                        </Link>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ListProduct
