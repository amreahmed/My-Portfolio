import React from 'react'
import "./portfolio.css"
import IMG from "../../assets/Create A pro DIscord bot.png"
import Portfolio from "../../assets/design.png"


const data = [
  {
    id: 1,
    image: Portfolio,
    title: 'My Portfolio',
    github: 'https://github.com/amreahmed/My-portfolio',
    demo: 'https://amreahmed.github.io/My-portfolio'
  },
  {
    id: 1,
    image: IMG,
    title: 'title',
    github: 'https://a7a',
    demo: 'aa'
  },
  {
    id: 1,
    image: IMG,
    title: 'title',
    github: 'https://a7a',
    demo: 'aa'
  },
  {
    id: 1,
    image: IMG,
    title: 'title',
    github: 'https://a7a',
    demo: 'aa'
  },
  {
    id: 1,
    image: IMG,
    title: 'title',
    github: 'https://a7a',
    demo: 'aa'
  },
  {
    id: 1,
    image: IMG,
    title: 'title',
    github: 'https://a7a',
    demo: 'aa'
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo}) => {
          return (
            <article  key = {id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src= {image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary'>Live Demo</a>
            </div>
          </article>    
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio
