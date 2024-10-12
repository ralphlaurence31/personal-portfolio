import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import bootstrapIcon from '../assets/bootstrap.png';
import tailwindIcon from '../assets/tailwind.png';
import phpIcon from '../assets/php.png';
import mysqlIcon from '../assets/mysql.png';
import javaIcon from '../assets/java.png';
import javascriptIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';


const technologies = [
  { icon: htmlIcon, pointer: 'HTML5' },
  { icon: cssIcon, pointer: 'CSS' },
  { icon: bootstrapIcon, pointer: 'Bootstrap' },
  { icon: tailwindIcon, pointer: 'Tailwind' },
  { icon: phpIcon, pointer: 'PHP' },
  { icon: mysqlIcon, pointer: 'MySQL' },
  { icon: javaIcon, pointer: 'Java' },
  { icon: javascriptIcon, pointer: 'JavaScript' },
  { icon: reactIcon, pointer: 'React' },
];

function About() {
  
    useEffect(() => {
      AOS.init({duration:1200})
    }, []);
  
  return (
    <div className='about-me mt-20' id='about-me' data-aos="fade-right">

      <div className='aboutMeText' data-aos="fade-right">
        <p className='text-3xl text-center'>About</p>
        <p className='text-justify mt-5'>I am Ralph Laurence S. Razonable, currently taking up Bachelor of Science in Information Technology at Cavite State University - Imus Campus. I took my Internsip at South Imus Specialist Hospital. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores praesentium blanditiis labore, nesciunt natus aliquam repellat adipisci? In sed exercitationem ea nihil fuga quae voluptates nulla, voluptatem, ullam libero consectetur!</p>
      
      </div>

      <div className='myTechnologies'>

            <div className='titleTechnologies mt-20' data-aos="fade-right">
                <p className='text-3xl text-center'>Technologies</p>
            </div>

            <div className='myTechnologies mt-5 flex flex-wrap justify-around gap-5 gap-y-[3rem]' data-aos="fade-right">
              {technologies.map((technologies, index) => (
                <ul key={index} className='relative inline-flex  gap-[50px] mt-5'>
                  <li className='cursor-pointer transition-all duration-300 hover:-translate-y-5'title={technologies.pointer} alt={technologies.pointer} data-tooltip-target="tooltip-dark"><img src={technologies.icon} alt={technologies.icon} className='w-[50px] h-[50px]'/></li>
                </ul>
                
              ))}
                    
            </div>
        </div>
    </div>
  )
}

export default About

