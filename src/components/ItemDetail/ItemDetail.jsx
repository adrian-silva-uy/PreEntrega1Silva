import "./ItemDetail.css";

// eslint-disable-next-line react/prop-types
const ItemDetail = ({ id, artículo, precio, descripción, img }) => {
  return (
    <div className="cardItem">
      <h2>Artículo: {artículo} </h2>
      <h3>Precio: $ {precio}</h3>
      <h3>ID: {id} </h3>
      <p>Descripción: {descripción} </p>
      <img className="imgProducto" src={img} alt={artículo} />
      <hr />
    </div>
  );
};

export default ItemDetail;
