import "./Card.css";

function Card({veri}) {
  return (
    <div className="container">
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mx-4 p-5">
    {veri.map((item) => {
        //destructing
        const { id, title,desc,image}=item
        return(
            <div className="col mycard" key={id}>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <div  className="card-desc">
            <h2 className="desc-h2">{desc}</h2>
            </div>
            </div>
            
        )
    })}

</div>
</div>
  )
}

export default Card
