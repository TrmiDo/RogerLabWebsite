
import SectionTitle from "@/components/Common/SectionTitle";

const Blog = () => {
  const principle=[
    'Roger W. Li OD, PhD  (Associate Professor)',
  ]

  const labmanager=[
    'Sandy W. Chat OD, MPhil',
  ]
  const assitantlabmanager=[
    'Anamaria Rey (NSU, Pre-Opt)',
'Lara Cereminati (NSU, Pre-Med)',

  ]

  const projectmanager=[
    'Jacob Ruby (NSU, Pre-Opt)',
'Srujan Miryala (NSU, Pre-Med, Independent Study)',

  ]

  const researchassit=[
    'Aliya DeJesus (NSU, pre-Opt)',
'Murielle Cayemitte (NSUCO)',
'Nada Bleibel (NSU, pre-Opt, Independent Study)',
'Nimisha Kumar (NSU, pre-Med)',
'Riya Vadalia (NSU, Pre-Med)',
'Taylor Zinkler (UF, Pre-DPsy)',
'Triet Do (NSU, Comp)',

  ]
  const shadow=[
    'Charlene Li (Cooper City High, Pre-Med)',
    'Emily Mello (Cypress Bay High Pre-Med)',
  ]
  const member=[]
  return (
    <>

      <section className="pt-[120px] pb-[120px]">
        <div className="container">

        <h5 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
           Team Members
        </h5>


        <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
            Principal Investigators
          </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {principle.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

        <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
           Lab Managers
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {labmanager.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>


          <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
           Assistant Lab Managers
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {assitantlabmanager.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

          <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
           Project Managers
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {projectmanager.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

          <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
           Research Assistants
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {researchassit.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

          <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
           High School Students
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {shadow.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>


          
        </div>
      </section>
    </>
  );
};

export default Blog;
