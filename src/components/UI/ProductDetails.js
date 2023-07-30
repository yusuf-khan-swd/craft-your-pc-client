const ProductDetails = ({ product }) => {
  return (
    <div className="max-w-7xl mx-auto items-center w-[80%]">
      <div className="grid md:grid-cols-2">
        <div className="w-full mx-auto m-4">
          <img src={product?.image} alt="" />
        </div>
        <div className="m-4 md:m-8 space-y-2 mx-auto">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-lg">Category: {product?.category}</p>
          <p className="text-lg">
            Status: {product?.status ? "In stock" : "Out of stock"}
          </p>
          <p className="text-lg">Price: ${product?.price}</p>
          <p className="text-lg">
            Description: <span>{product?.description}</span>
          </p>
          <ul className="space-y-2 text-lg py-2">
            <p className="font-bold">Key Featured</p>
            {product?.features?.map((feature) => (
              <li key={feature} className="ml-4">
                <span>{feature.split(":")[0]}: </span>
                {feature.split(":")[1]}
              </li>
            ))}
          </ul>
          <p className="text-lg">
            Individual Rating: {product?.individualRating} (Out of 5 Stars)
          </p>
          <p className="text-lg">
            Average Rating: {product?.averageRating} (Out of 5 Stars)
          </p>
          <p className="text-lg">Reviews: {product?.reviews} </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
