interface Props {
  organization: string,
  jobtitle: string,
  range: string,
  description: string[],
}

export default function TimeLineSection({ organization, jobtitle, range, description, }: Props) {
  return (
    <div className="flex" >
      <div className="mr-[15px] w-[20%] max-w-[250px] border-r border-black p-[5px] text-center font-bold italic">{range}</div>
      <div className="w-[80%] pb-12">
        <h2 className="text-2xl">{jobtitle}</h2>
        <h3 className="my-2 text-xl">{organization}</h3>
        <ul className="ml-12 list-disc">
          {description.map((des: string, i: number) => <li key={i} className="my-2">{des}</li>)}
        </ul>
      </div>
    </div>
  );
}
