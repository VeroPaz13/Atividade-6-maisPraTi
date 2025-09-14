export default function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.title}
        className="aspect-square object-cover rounded-t-xl mb-4 w-full"
      />
      <h2 className="text-lg font-semibold line-clamp-2">{product.title}</h2>
      <p className="text-blue-600 dark:text-blue-400 font-bold">
        R$ {product.price.toFixed(2)}
      </p>
      <div className="text-yellow-500 mb-1">
        {"★".repeat(product.rating) + "☆".repeat(5 - product.rating)}
      </div>
      <span
        className={`inline-block text-xs px-2 py-1 rounded-full ${
          product.tag === "Novo"
            ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
            : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
        }`}
      >
        {product.tag}
      </span>
      <button className="mt-2 w-full py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Comprar
      </button>
    </div>
  );
}
