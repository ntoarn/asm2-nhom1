import instance from "@/apis";
import { ICategory } from "@/interfaces/Category";
import categoryReducer from "@/reducers/categoryReducer";
import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

type CategoryContextType = {
    state: { categories: ICategory[] }
    handleRemoveCate: (id: string) => void
    handleCategory: (category: ICategory) => void
}

export const CategoryContext = createContext({} as CategoryContextType)

export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(categoryReducer, { categories: [] })

    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`/categories`)
                dispatch({ type: 'SET_CATEGORIES', payload: data.data })
                console.log(data.data)
            } catch (error) {
                console.error("Error fetching categories:", error)
            }
        })()
    }, [])
    const handleRemoveCate = async (id: string) => {
        if (confirm("Are you sure you want to delete?")) {
            try {
                await instance.delete(`/categories/${id}`)
                dispatch({ type: 'DELETE_CATEGORY', payload: id })
            } catch (error) {
                console.error("Error deleting categories:", error)
            }
        }
    }
    const handleCategory = async (category: ICategory) => {
		try {
			if (category._id) {
				const { data } = await instance.patch(`/categories/${category._id}`, category);
				dispatch({ type: "UPDATE_CATEGORY", payload: data.data });
			} else {
				const { data } = await instance.post("/categories", category);
				dispatch({ type: "ADD_CATEGORY", payload: data.data });
			}
			navigate("/admin/category");
		} catch (error) {
			console.log(error);
		}
	};

    return (
        <CategoryContext.Provider value={{ state, handleRemoveCate, handleCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}
