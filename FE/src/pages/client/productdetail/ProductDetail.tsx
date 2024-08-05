import instance from '@/apis';
import { useAuth } from '@/contexts/AuthContext';
import { ProductContext } from '@/contexts/ProductContext';
import { IProduct } from '@/interfaces/Product';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ProductDetail = () => {
    const queryClient = useQueryClient();
    const { user } = useAuth();
    const userId = user?._id;
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<IProduct | null>(null);
    const { state } = useContext(ProductContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await instance.get(`/products/${id}`);
                setProduct(data.data);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            }
        };
        fetchProduct();
    }, [id]);

    useEffect(() => {
        console.log("User ID:", userId);
    }, [userId]);

    const { mutate } = useMutation({
        mutationFn: async ({ productId, quantity }: { productId: string, quantity: number }) => {
            if (!userId) {
                throw new Error("User ID is missing");
            }
            const { data } = await instance.post(`/cart/add-to-cart`, {
                userId,
                productId,
                quantity
            });
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId]
            });
            toast.success("Thêm sản phẩm vào giỏ hàng thành công!");
        },
        onError: () => {
            toast.error("Thêm sản phẩm vào giỏ hàng thất bại!. Vui lòng thử lại.");
        },
    });

    if (!product) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Chi tiết sản phẩm</h1>
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex justify-center">
                    <img src={product.image} alt={product.title} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-semibold mb-4">Tên sản phẩm: {product.title}</h2>
                    <p className="text-2xl text-red-500 mb-4">Giá: {product.price?.toLocaleString()} VNĐ</p>
                    <p className="text-lg text-gray-700 mb-6">Mô tả: {product.description}</p>
                    <button
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                        onClick={() => mutate({ productId: product._id!, quantity: 1 })}
                    >
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Sản phẩm tương tự</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {state.products.map((product) => (
                        <div className="bg-white border border-gray-200 rounded-lg shadow-md" key={product._id}>
                            <div className="p-5">
                                <div className="flex justify-center">
                                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
                                </div>
                                <h3 className="text-lg font-bold mt-2">Tên: {product.title}</h3>
                                <p className="text-red-500 mt-1">Giá: {product.price?.toLocaleString()} VND</p>
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
            <ToastContainer />
        </div>
    );
};

export default ProductDetail;
