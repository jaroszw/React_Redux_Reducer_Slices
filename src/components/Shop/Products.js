import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My Firs Book',
    description: 'The firs Book I wrote',
  },
  {
    id: 'p2',
    price: 55,
    title: 'My Second Book',
    description: 'The Second Book I wrote',
  },
  {
    id: 'p3',
    price: 15,
    title: 'My Thied Book',
    description: 'The third Book I wrote',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
              desc={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
