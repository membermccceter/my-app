import { useEffect, useState } from 'react'
import CardProduct from '../components/CardProduct/CardProduct'
import "./Slidesohow.scss"
import "./Atoutuse.scss"


export default function Home() {
 

   const [data, setData] = useState([])
   
   useEffect(() => {
       fetch('https://fakestoreapi.com/products')
           .then(res=>res.json())
           .then(json=> setData(json))
   })  
       return  (
        
          <>
               <div className='about container'>
                   <img src="https://images.pexels.com/photos/175694/pexels-photo-175694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
               </div>

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
