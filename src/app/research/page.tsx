import React from 'react'
import Image from 'next/image'
import { Quote1, Quote2 } from '@/components/Quote'

const Research = () => {
  return (
    <div className='bg-white py-20 h-full text-black px-12'>
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center text-2xl font-bold text-transparent md:text-6xl">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-teal-500 via-blue-500 to-blue-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span>Research at MI Lab</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 py-4">
            <span>Research at MI Lab</span>
          </div>
        </div>
        &nbsp;
        <span className='bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center text-2xl font-bold text-transparent md:text-6xl'>IIIT Delhi</span>
      </h1>

      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center italic text-transparent text-2xl">
        Decoding the&nbsp;
        <span className="bg-gradient-to-br from-teal-200 to-teal-500 bg-clip-text text-transparent">
          big stories of our little bugs
        </span>
      </h1>

      <div className='mx-auto max-w-screen-xl  flex flex-col pt-12 gap-12'>

        {/* Section 1 */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
          <div className="w-full md:w-[30%] flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem]">
              <Image
                src="/art/7.png"
                alt="img"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-[70%]">
            <div className="flex text-center">
              <div className=" text-2xl font-semibold leading-tight sm:text-3xl sm:leading-tight md:text-2xl md:leading-tight ">
                Unravelling the basis of assembly, resilience and stability of&nbsp;
                the gut microbiome communications network
              </div>
            </div>
            <div className='pt-4 text-center'>
              The gut microbiome is not simply a conglomeration of isolated microbes, but a gigantic communications network made up of multiple and diverse lineages of microbes. Interactions (communications) within these lineages are the key to maintaining intra-microbiome and host-microbiome homeostasis and is a marker of our health and well-being. However, while innumerable studies have associated specific microbiome summary statistics and certain members of the gut microflora with health and/or disease, many aspects of how the gut microbiome communications network is assembled are still a mystery.
              <br /><br />
              Under this research theme, we aim to utilize data-driven investigations of a combination of microbiome properties, ranging from taxxa abundances, microbial strain-interactions and (predictive) growth rate profiling of specific dominant microbes constituting our gut communities to understand the language of host-microbiome and intra-microbiome communications. Specifically, we aim to understand how the different members of the gut microbiome assemble in specific configurations to result in a global microbiome assembly; what factors (microbial or otherwise) determines the stability and resilience of this assembly? We also aim to understand how these assembly processes are influenced by our ethnicities, life-style, geography, age and other demographics.
            </div>
          </div>
        </div>
<hr className="border-0 border-t-2 border-slate-500" />
        {/* Section 2 */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
          <div className="w-full md:w-[70%]">
            <div className="flex text-center">
              <div className="text-center text-2xl font-semibold leading-tight sm:text-3xl sm:leading-tight md:text-2xl md:leading-tight ">
                Understanding the tripartite interactions between microbiome, host demographics and external environments/interventions like diet
              </div>
            </div>
            <div className='pt-4 text-center'>
              The human microbiome is one of the key omnipresent 'organs' of our body with three functional facets. The first is that of a “sensor”, where it “senses” the alterations and the deterioration of host physiology and acts and modifies itself accordingly, making it an excellent diagnostic target. The second is that of a direct “modulator”, wherein the microbiome members either positively or negatively affect host homeostasis, which makes these microbiome members useful for diagnostics and microbiome-derived therapeutics. The third crucial facet is that of a “transducer”, wherein it modulates the therapeutic effect of other interventions like diet, medications, or immune-therapies on host health.
              <br /><br />
              Despite recent studies supporting this transducer role, mediating microbiome members vary widely across studies. In this theme, we aim to understand how baseline gut microbiome properties affect responses to interventions (like diets for cardiometabolic disorders), medications (especially age-related), and cancer therapies. The goal is to unravel environment-microbiome-host health links to support personalized health strategies and predict susceptibility to various diseases.
            </div>
          </div>
          <div className="w-full md:w-[30%] flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem]">
              <Image
                src="/art/8.png"
                alt="img"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
<hr className="border-0 border-t-2 border-slate-500" />


         {/* Section 3 */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
          <div className="w-full md:w-[30%] flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem]">
              <Image
                src="/art/11.png"
                alt="img"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-[70%]">
            <div className="flex text-center">
              <div className=" text-2xl font-semibold leading-tight sm:text-3xl sm:leading-tight md:text-2xl md:leading-tight ">
               Data-driven functional metagenomics of the human microbiome for better mechanistic insights into disease-microbiome interactions and better microbiome-derived disease diagnostics
              </div>
            </div>
            <div className='pt-4 text-center'>
This theme has two major objectives. First is to investigate and address the basis of inconsistencies in the microbiome alteration patterns associated with the same disorder across studies and design better microbiome-derived diagnostic classifiers. Variations in microbiome alterations have been associated with age, region and socio-economic status of the study population. One of the approaches to bypass the above limitations move away from investigating alterations based on the taxonomic identities of the microbes to performing large-scale functional/metabolic characterizations of all microbiome members and subsequently profiling the functional/metabolic capabilities of the identified altered microbiome members as the diagnostic members.
              <br /><br />
Under this theme, we aim to investigate the above aspect by performing functional genomic characterization of gut microbiome members and utilize these to build microbiome-derived diagnostic classifiers for different diseases and disorders. The second objective is to investigate these alterations and strive to delineate the microbiome alterations into cause and effect classes.            </div>
          </div>
        </div>
<hr className="border-0 border-t-2 border-slate-500" />

        {/* Section 4 */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
          <div className="w-full md:w-[70%]">
            <div className="flex text-center">
              <div className="text-center text-2xl font-semibold leading-tight sm:text-3xl sm:leading-tight md:text-2xl md:leading-tight ">
Exploring the human microbiome besides the gut
              </div>
            </div>
            <div className='pt-4 text-center'>
The gut harbours the largest microbiome of our body, and consequently has been the focus of a large majority of microbiome-host interaction studies. However, microbiomes at several other body sites have also been implicated in different diseases and retaining host homeostasis in these sites. One of the key body sites in this regard has been the oral micro-environment which is not only associated with diseases pertaining to the oral cavity like caries, oral cancer and oral squamous cell carcinoma, but also those inflicting other body systems like cardiovascular diseases. Certain oral bacteria have also been associated with disorders inflicting the gut like inflammatory bowel diseases and causatively implicated in gut-associated diseases like colorectal cancer.
              <br /><br />
Despite their importance, our knowledge regarding several basis aspects of the oral microbiome (markers of health in oral microbiome, its variation across sub-sites, geography and life-style, oral microbiome members typically associated and the functional microbiome guilds within different sub-sites of the oral microbiome) are limited. A similar observation also pertains to other body sites in the GI-tract as well as skin. Barring a very few studies like the Human Microbiome Project, no study has profiled and investigated the pan-microbiome from different body sites of the same individual. Under this theme, we aim to collate and perform integrated meta-analyses of datasets from other human body sites, including integrated investigation of microbiome data from different body sites sampled from the same individual at a given time-point to understand the pan-human-microbiome interactions.            </div>
          </div>
          <div className="w-full md:w-[30%] flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem]">
              <Image
                src="/art/12.png"
                alt="img"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Research
