import Layout from "../../Components/Layout/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import OrderCard from "../../Components/OrderCard/OrderCard";

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      MyOrder
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
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
