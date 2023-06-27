import Form from "./Form";

export default function Page() {
  return (
    <div>
      <div className="m-auto w-full max-w-[500px]">
        <div className="mt-[80px] text-center">
          <h1 className="text-3xl">Contact Me</h1>
          <p className="my-2 text-xl">Wanna work together? Hit me up!</p>
        </div>
        <Form />
      </div>
    </div>
  );
}
