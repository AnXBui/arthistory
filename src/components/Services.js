import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return <section>
     <Title title='Services'/>
     <ul>
       {services.map(service => {
         const {id, icon, title, text} = service
         return <article key={id} className='service'>
           {icon}
           <h4>{title}</h4>
           <p>{text}</p>
         </article>
       })}
     </ul>
  </section>
}

export default Services
