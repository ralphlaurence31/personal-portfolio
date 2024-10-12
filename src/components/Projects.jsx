import React from 'react';
import calculator from '../src/assets/calculator.png'
import crud from '../src/assets/crud.png'

// Sample data for the projects
const projects = [
  {
    imageUrl: calculator,
    title: 'RLSR Scientific Calculator',
    description: 'This project used Tailwind CSS for UI and JavaScript for function.',
    link: 'https://scientific-calculator-brown.vercel.app/'
  },
  {
    imageUrl: crud,
    title: 'myclassmates-crud',
    description: 'This project used Tailwind CSS for UI, PHP for backend.',
    link: 'https://github.com/ralphlaurence31/crud-myclassmates'
  }
   
];

function Projects() {
  return (
    <div className='titleTechnologies mt-20' id='my-projects'>
      <p className='text-3xl text-center'>Projects</p>

      <div className='w-full gap-4 mt-10 grid md:grid-cols-4 grid-cols-1'>
        {projects.map((project, index) => (
          <div key={index} className="w-full bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a target='_blank' href={project.link}>
              <img className="rounded-t-lg w-full h-[150px]" src={project.imageUrl} alt={project.title} />
            </a>
            <div className="p-5">
              <a href={project.link} target='_blank'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <a href={project.link} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Open Project
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

