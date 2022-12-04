import React from 'react'
import ListaProjetos from './listaProjetos'
import './projectList.css'

function ProjectList () {
  return (
    <div className="listProject ">
      <h2 className="h2Title projListTitle">projetos</h2>
      <ListaProjetos />
    </div>
  )
}

export default ProjectList
