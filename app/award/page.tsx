import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

const BlogDetailsPage = () => {
  const itemaspecial=[
    'Award Recipient. RPB Walt and Lilly Disney Award for Amblyopia Research (Research to Prevent Blindness, USA; 2022)',
  ]
  const itema=[
    'External Referee for Faculty Promotion. School of Optometry, Hong Kong Polytechnic University, Hong Kong (2024)',
    'Award Recipient. RPB Walt and Lilly Disney Award for Amblyopia Research (Research to Prevent Blindness, New York; 2022)',
    'Grant Review Panel. Research Grants Council, Hong Kong (2016-)',
'Grant Review Panel. Natural Sciences and Engineering Research Council of Canada, Canada (2014) ',
'Grant Review Panel. Food and Health Bureau, Hong Kong (2013-)',
'Grant Review Panel. Research into Ageing, United Kingdom (2008)',
'Editor. Scientific Reports (2013-)',
'Associate Editor. Frontiers in Neuroscience (2022-)',
'Associate Editor. Frontiers in Psychology (2022-)',
'Review Editor. Frontiers in Neuroscience (2016-2022)',
'Review Editor. Frontiers in Psychology (2010-2022)',
'Editor. Annals of Eye Science (2020-2022)',
'Editor. International Journal of Ophthalmic Research (2014-2020)',
'Editor. World Journal of Ophthalmology (2011-2018)',
'Exceptional Reviewer. Journal of Vision (2012-2013a, 2012-2013b)',
'External Ph.D. examiner. University of New South Wales, School of Optometry and Vision Science, Australia (2011-2012)',
'University Committee, Faculty Research Advisory Council, NSU (2022-)',   
'Departmental Research Committee, NSUCO (2022-)',
'Faculty Research Mentor, NSUCO (2023-)',
'19 Competitive Conference Travel Grants (AAOPT & ARVO; 2004-2022)'
  ]
  const itemstg =[
    'Charlene Li (2025, ARVO Alan Laties, MD Memorial Travel Grant)',
    'Anamaria Rey (2025, NSU Biology Student Award)',
    'Betty Li (2022, AAO J&J Vision Student Travel Fellowship Grant)',
'Betty Li (2022, UCB Graduate Assembly Professional Development Travel Award) ',
'Michelle Antonucci (2019, AAO J & J Vision Student Travel Fellowship Grant)',
'Betty Li (2019, AAO N. Rex Ghormley Student Travel Fellowship Grant)',
'John Bui (2019, ARVO National Eye Institute Travel Grant)',
'Michelle Antonucci (2018, AAO J & J Vision Student Travel Fellowship Grant)',
'Kayee So (2014, ARVO Foundation/ Tyson Research Initiative/ PAOF/ RRF Travel Grant)',
'Thomas Wu (2014, ARVO National Eye Institute Travel Grant)',
'Ashley Craven (2013, AAO VISTAKON® Student Travel Fellowship)',
'Truyet Tran (2012, AAO VISTAKON® Student Travel Fellowship)',
'Ashley Craven (2012, AAO Board Travel Fellowship)',
'Charlie Ngo (2010, AAO VISTAKON® Student Travel Fellowship)',
'Charlie Ngo (2009, AAO VISTAKON® Student Travel Fellowship)',
'Charlie Ngo (2008, AAO VISTAKON® Student Travel Fellowship)',
'Karen Young (2005, AAO Student Travel Grant)',
'Karen Young (2005, ARVO Travel Grant)',
'Karen Young (2004, ARVO Travel Grant)'
  ]
  const itemsrf = ['Diana Chau. Theodore Cohn Memorial Scholarship (2017, UCBSO)',
  'Michelle Antonucci. SURF Rose Hills Fellowship (2015, UCBSO)',
  'Calvin Nguyen. Theodore Cohn Memorial Scholarship (2012, UCBSO)'
  ]
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-left">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <h3 className="font-lg mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Awards and Honors
                  </h3>
                  
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {itema.map((item, index) => (
                  <li style={{ fontSize: '15px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
                  ))}
                  </ul>
                  

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Conference Travel Grants
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {itemstg.map((item, index) => (
                  <li style={{ fontSize: '15px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
                  ))}
                  </ul>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Research Fellowships
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {itemsrf.map((item, index) => (
                  <li style={{ fontSize: '15px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
                  ))}
                  </ul>
                  
                  
                </div>
              </div>
            </div>
          </div>
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

export default BlogDetailsPage;
