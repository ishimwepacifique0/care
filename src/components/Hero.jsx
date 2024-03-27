import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex md:flex-col flex-row-reverse  justify-between items-center gap-10 py-20 px-20 md:px-[5%]">
      <section className="w-2/5 md:w-full md:items-center flex flex-col gap-10">
        <p className="text-8xl font-semibold text-[#a2e8e9] whitespace-nowrap">
        Carehealth
        </p>
        <p className="text-lg text-justify">
          Discover Carehealth platform, your daily retreat for mental wellness. Kickstart
          each day with uplifting affirmations, combatting stress and
          negativity. Journal your thoughts for personal growth through text,
          photos. Connect with a supportive community, sharing and fostering
          understanding.
        </p>
        <div className="flex gap-6">
          <Link
            className="hover:bg-[#a2e8e9] hover:text-black hover:duration-150 hover:transition-all border text-white font-medium px-12 py-2 rounded"
            to="signup"
          >
            Join Now
          </Link>
          <Link
            className="bg-[#a2e8e9] text-gray-800 font-medium px-12 py-2 rounded"
            to="login"
          >
            Log In
          </Link>
        </div>
      </section>
      <img className="w-2/4 md:w-full" src="/metal1.png" alt="hero image" />
    </section>
  );
}
