import React from 'react';
import Layout from '../shared/Layout';

const Product = () => {
  return (
    <Layout>
      <div className="p-10">
        <h1 className="text-2xl font-semibold">NUMBER OF PRODUCTS 6</h1>
        <div className="bg-white mt-10 p-10 w-fit rounded-md shadow-xl items-center flex flex-col gap-y-5 ">
          <ProductPriceAndName />
          <ProductPriceAndName />
          <ProductPriceAndName />

          <ProductPriceAndName />

          <ProductPriceAndName />

          <ProductPriceAndName />
          <button className="py-3 px-7 mt-10 bg-green-400 rounded-md text-white font-semibold">
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

const ProductPriceAndName = () => {
  return (
    <div className="flex gap-x-5 items-center ">
      <div>
        <p className="text-xs text-gray-400 font-semibold mb-1">Product Name</p>
        <input
          type="text"
          className="bg-gray-200 px-3 py-2 rounded-md outline-none"
        />
      </div>
      <div>
        <p className="text-xs text-gray-400 font-semibold mb-1">
          Product Price
        </p>
        <input
          type="number"
          className="bg-white border border-gray-400 rounded-md px-5 py-2 outline-none"
        />
      </div>
    </div>
  );
};
