import { github, linkedin, email, } from '@/data/socials';

export default function Footer() {
  return (
    <div className="flex w-full justify-center py-14">
      <a target="_blank" rel="noopener noreferrer" href={linkedin}><i className={`linkedin link big black icon`}></i></a>
      <a target="_blank" rel="noopener noreferrer" href={github}><i className={`github link big black icon`}></i></a>
      <a target="_blank" rel="noopener noreferrer" href={email}><i className={`mail link big black icon`}></i></a>
    </div>
  );
}
