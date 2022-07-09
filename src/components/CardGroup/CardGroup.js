import Card from "../Card/Card";

const CardGroup = () => {
  const products = [
    { id: 1, name: "Laptop Pro", price: 10000 },
    { id: 2, name: "Laptop Crow", price: 20000 },
    { id: 3, name: "Laptop Grow", price: 30000 },
  ];

  return (
    <div>
      <h1>This is my card group</h1>
      <div className="card-group">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
