import { useParams, Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { products } from "../../data/products";

export default function SingleProduct() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="text-white p-10">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <Link
        to="/products"
        className="flex items-center gap-2 text-gray-400 mb-6"
      >
        <ArrowLeft size={18} /> Back
      </Link>

    <div className="flex justify-center items-center flex-wrap gap-8 w-full py-10">
     <div className="w-4/12 flex justify-center items-center h-full">
         <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-xl rounded-xl border border-red-900/40 mb-6"
      />
     </div>

    <div className="w-6/12">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-400 mb-6">{product.description}</p>

      <div className="space-y-3">
        {product.specifications.map((spec, i) => (
          <div key={i} className="flex gap-3">
            <CheckCircle2 className="text-red-600" />
            {spec}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}