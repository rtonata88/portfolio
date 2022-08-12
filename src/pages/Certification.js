import CertificationData from '../data/certifications.json';

const Certification = () => {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-orange-100 pb-20 lg:pb-24 xl:pb-32 h-full">
      <div className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center mb-3">
          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">
            <span className="block xl:inline">
              Certifications and{' '}
              <span className="block text-orange-600 xl:inline">
                Credentials<span className="text-black">.</span>
              </span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            After 9 months of sleepless nights, I have graduated from
            Microverse, an online program that teaches people how to become
            software developers through pair programming by building real life
            projects.
          </p>
        </div>
        <div className="flex flex-column flex-wrap justify-center gap-5">
          {CertificationData.map((data) => {
            return (
              <div className="flex items-center justify-center" key={data.id}>
                <div className="bg-white shadow-xl p-6 rounded-2xl border-2 border-gray-50">
                  <div className="flex flex-col">
                    <div className="my-6">
                      <div className="flex flex-row space-x-4 justify-center">
                        <a href={data.link} target="_blank" rel="noreferrer">
                          <img
                            className="object-cover h-48 items-center"
                            src={data.image}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="w-full place-items-end text-center border-t-2 border-gray-100 mt-2">
                      <a
                        href={data.link}
                        target="_blank"
                        className="text-indigo-600 text-xs font-medium"
                        rel="noreferrer">
                        View credential
                      </a>
                    </div>
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

export default Certification;
