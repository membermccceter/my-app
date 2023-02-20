import './index.scss';

export default function CardProduct({ name, image, description, price}) {
    return (
        <div className="card">
            <div className="card-cover">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <h5 className="title">
                    { name }
                </h5>
                <h6 className="description">
                    { description }
                </h6>
                <h6 className="price">
                    { price }
                </h6>
            </div>
         
       
        </div>
    );
}
