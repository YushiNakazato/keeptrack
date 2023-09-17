import { Project } from './Project';
import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm';
import { useState } from 'react';

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {

    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    };

    const cancelEditing = () => {
        setProjectBeingEdited({});
    };

    const items = projects.map(project => (
        <div key={project.id} className="cols-sm">
            {project === projectBeingEdited ? (
                <ProjectForm onSave={onSave} onCancel={cancelEditing} project={project}/>) : (<ProjectCard project={project} onEdit={handleEdit} />
            )}
       </div>
     ));

     return <div className="row">{items}</div>;
}

export default ProjectList;