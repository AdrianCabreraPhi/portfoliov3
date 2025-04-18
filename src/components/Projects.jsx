import ListProjects from "../storage/ListProjects";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
   
    <div className="flex flex-col border-b border-dashed pb-10 border-zinc-800  pl-5  md:pl-0 ">
      <h1 className="font-bold  text-2xl md:text-4xl tracking-tight mb-10  text-white">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ListProjects.map(function (project,idx) {
          return <ProjectItem key={idx} index={idx} project={project} />;
        })}
      </div>
    </div>
 
  );
}

export default Projects;
