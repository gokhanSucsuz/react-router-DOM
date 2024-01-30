/* eslint-disable react/prop-types */
export default function ProductCard({item}) {

  return (
    <>
        <div className="col shadow rounded-3 p-2">
          <div className="card h-100">
            <img src={item.image} className="card-img-top" style={{height:"250px", width:"100%", padding:"10px"}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title.substring(0,20)}</h5>
              <p className="card-text">{item.description.substring(0,20)}</p>
              <h6>${item.price.toFixed(2)}</h6>
               <a href="#" className="btn btn-primary">Fav</a>
            </div>
          </div>
        </div>
    </>
  );
}
