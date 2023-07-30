const ProductDetails = ({ product }) => {
  return (
    <div className="max-w-7xl mx-auto items-center w-[80%]">
      <div className="grid md:grid-cols-2">
        <div className="w-full mx-auto m-4">
          <img src={product?.image} alt="" />
        </div>
        <div className="m-4 md:m-8 space-y-3 mx-auto">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-xl">Rating: {product?.rating}</p>
          <ul className="space-y-2 text-lg">
            {product?.features?.map((feature) => (
              <li key={feature}>
                <b>{feature.split(":")[0]}: </b>
                {feature.split(":")[1]}
              </li>
            ))}
          </ul>
          <p>Description: {product?.description}</p>
          <p>Individual Rating: {product?.individualRating}</p>
          <p>Average Rating: {product?.averageRating}</p>
          <p>Reviews: {product?.reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
