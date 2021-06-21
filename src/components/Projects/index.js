import React from 'react'
import { projects } from '../../data/projects'
import Project from './Project'


const Projects = () => {
    return (
        <div id="projects" className="">
            <div className="text-4xl pt-20 font-semibold text-gray-600 dark:text-gray-200">Projects</div>
            <div className="grid lg:grid-cols-2 lg:gap-10">
                {projects.map(project => {
                    return (
                        <Project key={project.id} { ...project } />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects