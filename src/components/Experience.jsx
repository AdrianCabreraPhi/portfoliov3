
import ListExperience from "../storage/ListExperience"

function Experience(){

    return (
        <div className="flex flex-col pl-5 w-[95vw] md:w-auto md:pl-0 ">
        <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-10  text-white">
          Experience
        </h1>
        <div className="grid grid-cols-1  gap-4">
          * {ListExperience.map(function (experience) {
            return (
                <div className="card-experience group rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-zinc-700 justify-between border-zinc-600 flex flex-row">
                <img src={experience.image} alt="" className="md:grayscale-100 transition-all group-hover:grayscale-0 duration-300 ease-in-out rounded-md" width={250} />
                <div className="flex flex-col mt-2 mr-2">
                  <span className="text-white">{experience.duration}</span>
                  <span className="text-zinc-500">{experience.name}</span>
                  <span className="text-zinc-500">{experience.role}</span>
                </div>
                </div>
            )

          })} 
  
        </div>
      </div>
    )


}

export default Experience