function ProductCard() {
  return (
    <div className="d-flex justify-content-center flex-wrap gap-3 p-3">
      <h1 className="text-danger text-center w-100">Treding Products</h1>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Coffee" />
        <div className="card-body">
          <h5 className="card-title">Coffee</h5>
          <p className="card-text">“Some days make the coffee, other days the coffee makes you”</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="https://images.pexels.com/photos/14440749/pexels-photo-14440749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Coffee" />
        <div className="card-body">
          <h5 className="card-title">Coffee</h5>
          <p className="card-text">“Some days make the coffee, other days the coffee makes you”</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="https://images.pexels.com/photos/1419939/pexels-photo-1419939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Coffee" />
        <div className="card-body">
          <h5 className="card-title">Coffee</h5>
          <p className="card-text">“Some days make the coffee, other days the coffee makes you”</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
