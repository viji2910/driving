import { redirect } from "next/navigation";
export const WhyChooseUs = () => {
  return (
    <div className="p-6">
      <div className="my-8 float-left w-full">
        <h2 className="text-4xl float-left w-7/12">Why Choose Us</h2>
        <p className="w-5/12 float-right text-gray-500">
          An unmatched blend of innovative driving instructions and a
          student-centric approach, ensuring your driving skills are transformed
          into exam readiness.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 w-full my-8 gap-8">
        <div>
          <h3 className="text-2xl my-4">Expert Driving Instructios</h3>
          <p className="text-gray-500 text-justify">
            At Behind the wheel, our {"team's"} deep-rooted expertise in driving
            that resonate with both exam preparation and safe skills, ensuring
            every lesson serves a purpose.
          </p>
        </div>
        <div>
          <h3 className="text-2xl my-4">End-to-End Commitment</h3>
          <p className="text-gray-500 text-justify">
            From first lesson to the last, Behind The {"Wheel's"} commitment
            ensures your driving skills are nurtured through every stage,
            resulting in a best driving experience nothing short of exceptional.
          </p>
        </div>
        <div>
          <h3 className="text-2xl my-4">Seamless Learning Experience</h3>
          <p className="text-gray-500 text-justify">
            Choosing Behind The Wheel means embarking on a seamless and
            collaborative learning journey where your skills are nurtured and
            each lesson is curated to your need.
          </p>
        </div>
      </div>
      <div className="my-8 text-center my-16">
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
