import { useSelector } from "react-redux";

// imported files
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const items = useSelector((state) => state.item.item);
  const itemList = [
    { id: "p1", title: "Test Item", quantity: 1, price: 10 },
    { id: "p2", title: "Test Item2", quantity: 1, price: 50 },
    { id: "p3", title: "Test Item3", quantity: 1, price: 70 },
    { id: "p4", title: "Test Item4", quantity: 1, price: 20 },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {itemList.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            description="This is a first product - amazing!"
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
