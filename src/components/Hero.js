import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Hero = () => {
  const {
    file:
     {
      childImageSharp: { fluid },
     },
  } = useStaticQuery(query);
  return <section>
    <Image fluid={fluid} className="heroImg"/>
    <Link to='/contact' className='scrollButton'>Contact Me</Link>
    <SocialLinks/>
  </section>
}

export default Hero
