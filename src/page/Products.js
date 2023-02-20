 import { useEffect, useState } from 'react'
 import CardProduct from '../components/CardProduct/CardProduct'

export default function Products() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setData(json))
    })  
        return  (
           <>
                
                <div className='container' style={{display: "grid", gridTemplateColumns:"auto auto auto auto"}}>
                    {
                        data.map((item) =>{
                            return <CardProduct key={item.id} name={item.title} image={item.image} description={item.description} price={item.price} />
                        })
                    }
                </div>
           </> 
          )
        
 
}

