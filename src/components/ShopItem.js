export default function ShopItem({ name, price, color, img }) {
    return (
      <div className="product">
        <div className="image-container">
          <img
            className="product__image"
            src={img}
            alt={name}
          />
        </div>
        <h3 className="product__title">{name}</h3>
        <span className="product__color">{color}</span>
        <span className="product__price">${price}</span>
        <button className="product__button" type="button">Add to cart</button>
      </div>
    );
  }