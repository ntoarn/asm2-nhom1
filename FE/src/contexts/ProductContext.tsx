import instance from "@/apis";
import { IProduct } from "@/interfaces/Product";
import productReducer from "@/reducers/productReducer";
import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

type ProductContextType = {
    state: { products: IProduct[] }
    handleRemove: (id: string) => void
    handleAdd: (product: IProduct) => void
    handleEdit: (product: IProduct) => void
}

export const ProductContext = createContext({} as ProductContextType)

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(productReducer, { products: [] })

    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`/products`)
                dispatch({ type: 'SET_PRODUCTS', payload: data.data })
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        })()
    }, [])

    const handleRemove = async (id: string) => {
        if (confirm("Are you sure you want to delete?")) {
            try {
                await instance.delete(`/products/${id}`)
                dispatch({ type: 'DELETE_PRODUCT', payload: id })
            } catch (error) {
                console.error("Error deleting product:", error)
            }
        }
    }

    const handleAdd = async (product: IProduct) => {
        try {
            await instance.post(`/products`, product)
            dispatch({ type: 'ADD_PRODUCT', payload: product })
            navigate('/admin')
        } catch (error) {
            console.error("Error adding product:", error)
        }
    }

    const handleEdit = async (product: IProduct) => {
        try {
            await instance.patch(`/products/${product._id}`, product)
            dispatch({ type: 'UPDATE_PRODUCT', payload: product })
            navigate('/admin')
        } catch (error) {
            console.error("Error updating product:", error)
        }
    }

    return (
        <ProductContext.Provider value={{ state, handleRemove, handleAdd, handleEdit }}>
            {children}
        </ProductContext.Provider>
    )
}
