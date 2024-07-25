import { useEffect, useState } from "react";
import "./App.css";
import { IProduct } from "./interfaces/Product";
import instance from "./apis";

function App() {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[])
    useEffect(() => {
     (async () => {
      const { data } = await instance.get(`/products`)
      setProducts(data.data)
     })()
    },[])
  
  return (
    <>
    {products.map((p) => (
      <div key={p._id}>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <p>Giá: {p.price}</p>
      </div>
    ))}
    </>
  );
}

export default App;
