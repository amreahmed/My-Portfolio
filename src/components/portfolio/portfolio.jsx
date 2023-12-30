import React from 'react'
import "./portfolio.css"
import IMG from "../../assets/discord.webp"
import PORTFOLIO from "../../assets/portfolio1.png"
import UIA from "../../assets/portfolio2.png"
import CLUX from "../../assets/clux.png"
import XMAS from "../../assets/xmas.png"
import MINI from "../../assets/mini.png"


const data = [
  {
    id: 1,
    image: PORTFOLIO,
    title: 'My Portfolio',
    github: 'https://github.com/amreahmed/My-Portfolio',
    demo: 'https://amreahmed.github.io/My-Portfolio/'
  },
  {
    id: 2,
    image: UIA,
    title: 'Portfolio',
    github: 'https://github.com/amreahmed',
    demo: 'https://github.com/amreahmed'
  },
  {
    id: 3,
    image: CLUX,
    title: 'Clux Paste (Pastebin clone)',
    github: 'https://github.com/amreahmed',
    demo: 'https://clux.xyz'
  },
  {
    id: 4,
    image: XMAS,
    title: 'Christmas Landing Page',
    github: 'https://github.com/amreahmed',
    demo: 'https://github.com/amreahmed'
  },
  {
    id: 5,
    image: MINI,
    title: 'Mini Portfolio Website',
    github: 'https://github.com/amreahmed',
    demo: 'https://github.com/amreahmed'
  },
  {
    id: 6,
    image: IMG,
    title: 'Clox Bot (Discord Bot)',
    github: 'https://github.com/amreahmed',
    demo: 'https://discord.gg/FCnj8jvPWj'
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
            <a href={github} target="_blank" className='btn'>Github</a>
            <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
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
