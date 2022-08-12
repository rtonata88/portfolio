import ExperienceData from '../data/experience.json';

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-900 pb-20 lg:pb-24 xl:pb-32 h-full">
      <div className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center mb-10">
          <h1 className="text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-4xl">
            <span className="block xl:inline">
              Work{' '}
              <span className="block text-orange-600 xl:inline">
                Experience<span className="text-white">.</span>
              </span>
            </span>
          </h1>
        </div>
        {ExperienceData.map((data) => {
          return (
            <div
              className="bg-white shadow overflow-hidden sm:rounded-lg mb-10"
              key={data.id}>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {data.company}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Location: {data.location}
                </p>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Position
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {data.position}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Period
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {data.period}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Accomplishments and Duties
                    </dt>
                    <dd className="text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {data.description.split('|').map((task, index) => {
                        return (
                          <ul
                            key={index}
                            role="role"
                            className="order-last flex flex-col text-sm">
                            <li className="flex">
                              <svg
                                aria-hidden="true"
                                className="h-6 w-6 flex-none text-white">
                                <path
                                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                                  strokeWidth={0}></path>
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="8.25"
                                  fill="none"
                                  strokeWidth={1.5}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></circle>
                              </svg>
                              {task}
                            </li>
                          </ul>
                        );
                      })}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
