
import SectionTitle from "@/components/Common/SectionTitle";

const Blog = () => {
  const principle=[
    'Roger W. Li OD, PhD  (Associate Professor)',
  ]

  const labmanager=[
    'Sandy W. Chat OD, MPhil',
  ]
  const assitantlabmanager=[
    'Anamaria Rey (pre-Opt; Independent Study: BIOL 4990, 2024F, 2025W, 2025F)',
'Lara Cereminati (pre-Opt; Independent Study: BIOL 4990, 2024F, 2025W)',

  ]

  const projectmanager=[
    'Jacob Ruby (pre-Opt)',
'Nada Bleibel (NSUCO; TA; Independent Study: BIOL 4950, 2023F)',


  ]

  const researchassit=[
      'Fiorella Maria Bayo (pre-med; Independent Study: BIOL 4990, 2025F)',      
      'Camila Nogueira Camejo (pre-med; Independent Study: BIOL 4990, 2025F)',      
  'Ami Darji (pre-Opt)',  
    'Andrea Hernandez (Pre-Med/Den; Independent Study: BIOL 4990, 2025W, 2025F)',
    'Ashley Godwin (pre-Opt)',
'Nimisha Kumar (pre-Med)',  
'Charlene Li (UF, Pre-Med)',
'Edxael Velez Rodriguez (NSUCO)',  
'Ledianys Nazala (Pre-PA; Independent Study: BIOL 4990, 2024F, 2025W)',    
'Triet Do (Computing)',
'Valeria Raterman (pre-Opt)',         
'Yingzi Luo (Pre-Opt/Pre-Med; TA; Independent Study: PSYC 4990, 2025W)', 

    
  ]

  const collaborator=[
'Crystal Yu OD, PhD (Assistant Professor, NSUCO)',  
'Tsz Wing Leung OD, PhD (Assistant Professor, School of Optometry, HKPU)',      
    ]

  
  const shadow=[ ]
  const member=[]
  return (
    <>

      <section className="pt-[120px] pb-[0px]">
        <div className="container">




        <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
            Principal Investigators
          </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {principle.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-0 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

        <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
           Lab Managers
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {labmanager.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-0 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>


          <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
           Assistant Lab Managers
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {assitantlabmanager.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-0 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

          <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
           Project Managers
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {projectmanager.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-0 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

          <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
           Research & Teaching Assistants
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {researchassit.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-0 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>



          <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
            Collaborators           
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {collaborator.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-0 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>


          
          <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[20px]">
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {shadow.map((item, index) => (
          <li style={{fontSize: "15px"}} className="mb-0 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>


          
        </div>

         <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Blog;
