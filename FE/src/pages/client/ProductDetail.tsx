import instance from "@/apis";
import { IProduct } from "@/interfaces/Product";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams<{id: string}>();
  const [product, setProduct] = useState<IProduct>(
    {
      image: "",
        title: "",
        price: 0,
        description: "",
    }
  );
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <>
      <p>
        <img width={200} src={product.image} alt="" />
      </p>
      <h1>{product.title}</h1>
      <h1>{product.price}</h1>
    </>
  );
};

export default ProductDetail;
