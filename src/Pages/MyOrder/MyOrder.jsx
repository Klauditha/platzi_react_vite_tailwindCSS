import Layout from '../../Components/Layout/Layout';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/Context';
import OrderCard from '../../Components/OrderCard/OrderCard';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  //const currentPath = window.location.pathname;
  //window.location.href
  const currentPath = window.location.hash.split('#')[1];
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') {
    index = context.order?.lenght - 1;
  }

  return (
    <Layout>
      <div className="flex w-80  relative items-center justify-center mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.images}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrder;
