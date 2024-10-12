import React from 'react'



const technologies = [
  {
    icon: '../src/assets/html.svg',
    pointer: 'HTML5'
  },
  {
    icon: '../src/assets/css.svg',
    pointer: 'CSS'
  },
  {
    icon: '../src/assets/bootstrap.svg',
    pointer: 'Bootstrap'
  },
  {
    icon: '../src/assets/tailwind.svg',
    pointer: 'Tailwind'
  },
  {
    icon: '../src/assets/php.svg',
    pointer: 'php'
  },
  {
    icon: '../src/assets/mysql.svg',
    pointer: 'MySQL'
  },
  {
    icon: '../src/assets/java.svg',
    pointer: 'Java'
  },
  {
    icon: '../src/assets/javascript.svg',
    pointer: 'JavaScript'
  },
  {
    icon: '../src/assets/react.svg',
    pointer: 'React'
  },
 
];

function About() {
  return (
    <div className='about-me mt-20' id='about-me'>

      <div className='aboutMeText'>
        <p className='text-3xl text-center'>About</p>
        <p className='text-justify mt-5'>I am Ralph Laurence S. Razonable, currently taking up Bachelor of Science in Information Technology at Cavite State University - Imus Campus. I took my Internsip at South Imus Specialist Hospital. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores praesentium blanditiis labore, nesciunt natus aliquam repellat adipisci? In sed exercitationem ea nihil fuga quae voluptates nulla, voluptatem, ullam libero consectetur!</p>
      
      </div>

      <div className='myTechnologies'>

            <div className='titleTechnologies mt-20'>
                <p className='text-3xl text-center'>Technologies</p>
            </div>

            <div className='myTechnologies mt-5 flex justify-around'>
              {technologies.map((technologies, index) => (
                <ul key={index} className='flex items-center gap-[50px] mt-5 '>
                  <li className='cursor-pointer transition-all duration-300 hover:-translate-y-5'title={technologies.pointer} alt={technologies.pointer} data-tooltip-target="tooltip-dark"><img src={technologies.icon} alt={technologies.icon} className='w-[50px] h-[50px]'/></li>
                </ul>
                
              ))}
                    
            </div>
        </div>
    </div>
  )
}

export default About

