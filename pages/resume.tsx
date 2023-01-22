import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useIsVisible from '@/hooks/useIsVisible';
import { resume } from '@/data/resume.data';



export default function Resume() {

  const testRef1 = useRef();
  const testRef2 = useRef();
  const testRef3 = useRef();


  const testRefIsVisible1 = useIsVisible(testRef1);
  const testRefIsVisible2 = useIsVisible(testRef2);
  const testRefIsVisible3 = useIsVisible(testRef3);

  const refs = [ testRef1, testRef2, testRef3 ];
  const visibles = [ testRefIsVisible1, testRefIsVisible2, testRefIsVisible3 ];

  return (
    <div>

      <h1 className="work-history text-center text-[2.5rem] my-[4rem]">Work History</h1>

      <div className="timeline">

        { resume.jobs.map((j, i) => (
          <TimeLineSection 
            key={j.id}
            organization={j.organization}
            jobtitle={j.jobtitle} 
            range={j.range} 
            description={j.description} 
            myref={refs[i]}
            isVisible={visibles[i]}
            i={i}
          />
        )) }
    
      </div>
    </div>
  )
}



interface ITimeLineSection {
  organization: any,
  jobtitle: any,
  range: any,
  description: any,
  myref: any,
  isVisible: any,
  i: number,
}

const TimeLineSection = ({ organization, jobtitle, range, description, myref, isVisible, i } : ITimeLineSection) => {

  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000,
  }

  return (
    <div className="timeline-section flex" >
      <div className="time-range font-bold italic text-center max-w-[250px] min-w-[20%] p-[5px]">{ range }</div>
      <div className="line mx-[15px] w-[1px] bg-black"></div>
      <animated.div style={useSpring({ ...animate, delay: 300*i })} className="min-h-[25vh]" >
        <h2 ref={myref} className="text-2xl">{jobtitle}</h2>
        <h3 className="text-xl my-2">{organization}</h3>
        <ul className="list-disc ml-12">
          { description.map((des: any, i: any) => <li key={i} className="my-2">{ des }</li>) }
        </ul>
      </animated.div>
    </div>
  );
}

