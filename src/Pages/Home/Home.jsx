import { useContext } from 'react';
import Layout from '../../Components/Layout/Layout';
import Card from '../../Components/Card/Card';
import ProductDetail from '../../Components/ProductDetail/ProductDetail';
import { ShoppingCartContext } from '../../Context/Context';
const Home = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80  relative items-center justify-center mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) =>context.setSeachByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {context.items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
