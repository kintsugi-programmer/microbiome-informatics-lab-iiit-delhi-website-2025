import Hero from "@/components/Hero";
import Image from "next/image";
import { Quote1,Quote2 } from '@/components/Quote'
import Artpack from "@/components/ArtPack";

export default function Home() {
  return (<>
  <Hero/>
    {/* <div className="flex flex-col p-5 space-y-5">
    
    <Quote1/>
    <Quote2/></div> */}
    
    <Intro/>
    <Artpack/>


    </>
  );
}


const Intro = () => {
  return (
    <div className='bg-white pt-12 h-full text-black px-12 '>
          
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-teal-500 via-blue-500 to-blue-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Microbiome Lab</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 py-4">
                <span>Microbiome Lab</span>
              </div>
            </div>
            &nbsp;<span className='bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl'>IIIT Delhi</span>
            
          </h1>
    
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text text-center  italic text-transparent text-2xl">
            Decoding the&nbsp;
      <span className="bg-gradient-to-br from-teal-200 to-teal-500 bg-clip-text text-transparent">
        big stories of our little bugs
      </span>
          </h1>
          
    
          <div className='mx-auto max-w-screen-xl text-justify flex flex-col pt-12 gap-12'>
          <div>
          <div className=' flex flex-col md:flex-row gap-6 md:gap-12'>
      <div className="flex-1 flex items-center justify-center">
  {/* ① wrapper now a flex-box that centers anything inside it */}
  <Image
    src="/art/5.png"
    alt="img"
    width={720}      // keeps the intrinsic 1 : 1 ratio for Next/Image
    height={720}
    /* ② let it shrink with breakpoints, never exceed the max-w you set */
    className="w-auto h-auto
               max-w-[240px] sm:max-w-[280px] md:max-w-[320px]
               object-contain"
  />
</div>
      <div className="flex-1">
      <div className="flex justify-center sm:justify-start">
    <div className="text-center text-2xl font-semibold leading-tight
                    sm:text-3xl sm:leading-tight
                    md:text-4xl md:leading-tight md:text-start">
      Driven by Vision&nbsp;
      <span className="bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">
        Defined by Impact
      </span>
    </div>
          </div>
          <div className='pt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis in laudantium molestiae laboriosam dolore vero autem corporis ullam? Saepe aliquid esse inventore, corrupti natus alias quo quam dignissimos nulla ab neque eos repellat laborum illum aspernatur enim nostrum molestiae ipsam ullam non facilis. Error quasi blanditiis quis illum maiores iste harum rem voluptatibus, accusamus id. Quidem pariatur dolore assumenda.
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam praesentium omnis dolore numquam eum beatae iste perferendis nobis voluptatibus recusandae, placeat ex sint veniam molestiae? Quisquam delectus aliquid fugit obcaecati fuga illum eveniet quae, deserunt similique a consequatur cupiditate incidunt earum officia nemo, non quam tempore ab dolorem expedita laborum.
        </div></div>
    </div>
    </div>
    
    <div>
          <div className=' flex flex-col md:flex-row gap-6 md:gap-12'>
          <div className="flex-1">
          <div className="flex justify-center sm:justify-start">
    <div className="text-center text-2xl font-semibold leading-tight
                    sm:text-3xl sm:leading-tight
                    md:text-4xl md:leading-tight md:text-start">
      Driven by Vision&nbsp;
      <span className="bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">
        Defined by Impact
      </span>
    </div>
          </div>
          <div className='pt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis in laudantium molestiae laboriosam dolore vero autem corporis ullam? Saepe aliquid esse inventore, corrupti natus alias quo quam dignissimos nulla ab neque eos repellat laborum illum aspernatur enim nostrum molestiae ipsam ullam non facilis. Error quasi blanditiis quis illum maiores iste harum rem voluptatibus, accusamus id. Quidem pariatur dolore assumenda.
        <br /><br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ipsum nesciunt culpa adipisci harum quis veritatis. Distinctio magnam cumque laudantium.
        </div></div>
      <div className="flex-1 flex items-center justify-center">
  {/* ① wrapper now a flex-box that centers anything inside it */}
  <Image
    src="/art/6.png"
    alt="img"
    width={720}      // keeps the intrinsic 1 : 1 ratio for Next/Image
    height={720}
    /* ② let it shrink with breakpoints, never exceed the max-w you set */
    className="w-auto h-auto
               max-w-[240px] sm:max-w-[280px] md:max-w-[320px]
               object-contain"
  />
</div>

      
    </div>
    </div>
    
         
          
       
    
    <Quote1/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, alias. Sunt ut cum officiis! Molestiae, earum iste qui ducimus dolore sint, officiis quibusdam repellendus quia inventore provident a possimus omnis, facere quos fugit? Eaque, autem. Animi aut sequi a molestiae, cumque placeat repellat possimus fugit, perspiciatis veritatis repudiandae distinctio quam obcaecati repellendus architecto illo accusamus aliquam est vitae? Eligendi, mollitia obcaecati? Quae eos labore inventore dolores atque autem laboriosam recusandae maiores, nihil saepe hic? Tempora nihil natus, quam debitis neque cum incidunt est quos accusamus nulla soluta quas recusandae corporis iure sed, officiis magni eveniet. Quod, sit voluptas? Debitis, obcaecati sequi. Error aliquid quaerat nobis exercitationem earum veniam eum consectetur asperiores neque officia magni voluptate minima fuga repellendus sapiente, provident odio quam maiores vero molestiae, iusto quis. Ducimus eaque cupiditate nesciunt, explicabo aliquam voluptas omnis dignissimos earum tenetur deserunt repudiandae, nulla culpa quidem fugit doloremque ratione, porro aliquid non blanditiis libero enim! Sequi dolorem dolor sint expedita alias obcaecati laboriosam doloribus, culpa minima, ab illo. Eligendi, dignissimos, inventore minima adipisci delectus natus reprehenderit repellat eos tempora non commodi soluta autem culpa animi ipsam dicta maiores consectetur! Nesciunt commodi error distinctio, dignissimos quibusdam amet ratione quis id exercitationem eum ducimus optio?
            <Quote2/>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis commodi cum repellat beatae! Vel voluptas quas aperiam, velit cupiditate maxime qui? Nulla quas ducimus quia repellat esse magni voluptatum maiores dicta cupiditate cum molestiae, ullam, labore eius vel ut veritatis animi dolorum aliquid similique! Labore nulla eum deserunt ipsa eaque corrupti consequatur non, tenetur fuga quos harum voluptatum dolorem, numquam nemo. Quae, assumenda. Excepturi esse ipsum, optio numquam, libero sequi obcaecati, ea adipisci consectetur placeat omnis eligendi accusamus quia non? Explicabo qui ducimus recusandae assumenda, facilis quas id incidunt ipsa. Suscipit illum quaerat, necessitatibus quod totam beatae a corporis!
            
            <br /><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, illum! Iure sit tenetur nulla quas corrupti suscipit facere dolorem odit tempore, iste iusto nostrum blanditiis alias! Dignissimos, blanditiis tempore dolorum, quo iusto enim, asperiores exercitationem vero dicta sed pariatur perspiciatis voluptas voluptatibus laborum id a amet architecto quas quis? Harum?
            </p>
            <Image
      alt="img"
      src="/img/img1.jpg"
      width={1280}
      height={720}
      className="w-full h-[70vh] object-cover rounded-xl"
    />
    <div className='flex sm:flex-row flex-col sm:gap-12 gap-6'>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil recusandae dolorem repellendus sapiente cupiditate provident aut, accusantium modi consequuntur debitis placeat explicabo voluptates temporibus at sint numquam tenetur reprehenderit ipsum quod voluptatum! Soluta, eaque error, quam repellendus cupiditate pariatur incidunt autem at possimus provident temporibus magnam suscipit accusamus sit.
        <br /><br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error autem temporibus veritatis magni? Fugiat non commodi deleniti delectus voluptate vel placeat veniam obcaecati, maiores similique ut impedit corporis id? Commodi.
    </div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil recusandae dolorem repellendus sapiente cupiditate provident aut, accusantium modi consequuntur debitis placeat explicabo voluptates temporibus at sint numquam tenetur reprehenderit ipsum quod voluptatum! Soluta, eaque error, quam repellendus cupiditate pariatur incidunt autem at possimus provident temporibus magnam suscipit accusamus sit.
        <br /><br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, vitae.
    </div>
    
    
    
            
            </div>
    
          </div>
        </div>
  )
}
