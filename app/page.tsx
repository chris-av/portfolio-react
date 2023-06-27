import Introduction from '@/components/Introduction';
import Cryptos from '@/components/Cryptos';
import Services from '@/components/Services';
import { github, instagram, linkedin } from '@/data/socials';


export default function Page() {

  return (
    <div>
      <div className="">
        <Introduction />
      </div>

      <Services />

      <h1 className="mb-12 mt-24 text-center text-4xl">Wanna donate ? </h1>

      <Cryptos />

      <div className="flex w-full justify-center py-14">
        <a target="_blank" rel="noopener noreferrer" href={linkedin}><i className={`linkedin link big black icon`}></i></a>
        <a target="_blank" rel="noopener noreferrer" href={github}><i className={`github link big black icon`}></i></a>
        <a target="_blank" rel="noopener noreferrer" href={instagram}><i className={`instagram link big black icon`}></i></a>
      </div>

    </div>
  );
}



