import { redirect } from "next/navigation";

export const HomeHeader = () => {
  return (
    <div className="mb-6 px-4 md:px-0">
      <h1 className="text-6xl mb-16">
        Dynamic Driving Instructors
        <br />
        Forging a New Path Forward
      </h1>
      <p className="text-3xl w-8/12">
        Where every driving lesson is curated according to students need and
        every detail of the exam is touched upon.
      </p>
      <div className="my-8">
        <button className="rounded-full text-2xl hover:bg-[#2d3d76] bg-[#eda029] text-white py-5 px-8">
          Get In Touch
        </button>
        <button
          onClick={() => redirect("/prices")}
          className="ml-6 rounded-full text-2xl hover:bg-[#2d3d76] hover:text-white bg-gray-100 border text-black border-gray-950 hover:text-white py-5 px-8"
        >
          Browse Prices
        </button>
      </div>
    </div>
  );
};
