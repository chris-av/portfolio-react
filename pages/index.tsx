import Introduction from '@/components/Introduction';
import Cryptos from '@/components/Cryptos';
import Services from '@/components/Services';
import { github, instagram, linkedin } from '@/data/socials';


export default function AboutMe() {
  return (
    <div>
          
      <div className="">
        <Introduction />
      </div>

      <Services />

      <h1 className="text-4xl text-center mt-24 mb-12">Wanna donate ? </h1>

      <Cryptos />

      <div className="w-full flex justify-center py-14">
        <a target="_blank" rel="noopener noreferrer" href={linkedin}><i className={`linkedin link big black icon`}></i></a>
        <a target="_blank" rel="noopener noreferrer" href={github}><i className={`github link big black icon`}></i></a>
        <a target="_blank" rel="noopener noreferrer" href={instagram}><i className={`instagram link big black icon`}></i></a>
      </div>


    </div>
  );
}


