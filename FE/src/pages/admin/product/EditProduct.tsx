import instance from '@/apis'
import { ProductContext } from '@/contexts/ProductContext'
import { ICategory } from '@/interfaces/Category'
import { IProduct } from '@/interfaces/Product'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
const productSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    categoryId: Joi.string().required()
 
})
const EditProduct = () => {
    const {id } = useParams()
    const {handleEdit} = useContext(ProductContext)
    const [categories, setCategories] = useState<ICategory[]>([])
    const [product, setProduct] = useState<IProduct[]>([])
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<IProduct>({
        resolver: joiResolver(productSchema)
    })
    useEffect(() => {
        if (id) {
          (async () => {
            const { data } = await instance.get(`/products/${id}`);
            reset(data.data);
          })();
        }
      }, [id]);
    useEffect(() => {
        (async () => {
            const { data } = await instance.get("/categories")
            setCategories(data.data)
        })()
    },[])
    const handleEditProduct = (data: IProduct) => {
        handleEdit({...data, _id:id})
        alert("Sửa thành công")
    }
  return (
    <div>
        <form onSubmit={handleSubmit(handleEditProduct)}>
            <h1>Edit PRODUCT</h1>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id='title' {...register('title')} />
                {errors.title && <span>{errors.title.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" id='price' {...register('price')} />
                {errors.price && <span>{errors.price.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" id='description' {...register('description')} />
                {errors.description && <span>{errors.description.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text" id='image' {...register('image')} />
                {errors.image && <span>{errors.image.message}</span>}
            </div>
            <div>
            <select id="categoryId" {...register("categoryId")}>
                <option value="">Danh muc</option>
                {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                        {category.name}
                    </option>
                ))}
            </select>
            {errors.categoryId && <span>{errors.categoryId.message}</span>}
            </div>
            <button type='submit'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default EditProduct
