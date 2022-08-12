import ProjectData from '../data/projects.json';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 pb-20 lg:pb-24 xl:pb-32 h-full">
      <div className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center mb-3">
          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">
            <span className="block xl:inline">
              Some of my{' '}
              <span className="block text-orange-600 xl:inline">
                work<span className="text-black">.</span>
              </span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Throughout my career I have developed applications for businesses in
            various industries, government entities and educational institutes.
            To mention a few, my recent works include; I was the lead developer
            for the Students’ Portal as well as the University’s Application
            portal with online payment integration for the University of
            Namibia.
          </p>
        </div>
        <div className="flex justify-center flex-column flex-wrap">
          {ProjectData.map((data) => {
            return (
              <div className="max-w-2xl m-2" key={data.id}>
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="rounded-t-lg" src={data.image} alt="" />
                  </a>
                  <div className="p-5">
                    <a href={data.link} target="_blank">
                      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                        {data.name}
                      </h5>
                    </a>
                    <p className="font-bold text-sm text-gray-700 mb-3 dark:text-gray-400">
                      {data.stack}
                    </p>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                      {data.description}
                    </p>
                    <a
                      href={data.link}
                      target="_blank"
                      className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                      rel="noreferrer">
                      View project
                      <svg
                        className="-mr-1 ml-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
