export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-[#a2e8e9] text-dark-200 px-20 md:px-10"
    >
      <section className="flex justify-between items-center flex-row-reverse md:flex-col gap-10">
        <img className="w-2/5 md:w-full" src="/about.png" alt="about image" />
        <section className="w-2/5 md:w-full flex flex-col gap-8">
          <div className="flex items-center gap-10">
            <p className="font-bold text-3xl">About Carehealth platform</p>
            <div className="w-12 h-px bg-dark-200 mt-1"></div>
          </div>
          <p className="text-justify">
            {`Welcome to Carehealth platform – the empowering community for African youth.
          Share, connect, and engage on our user-driven platform, fostering
          understanding and support. Receive daily motivation with uplifting
          quotes and explore our educational homepage for valuable mental health
          insights. Carehealth platform is more than a website; it's a movement dedicated
          to empowering African youth. Join us in riding the carehealth platform to
          brighter, empowered futures.`}
          </p>
          <a
            href="#meet"
            className="bg-blue-950 w-fit text-white font-medium rounded px-8 py-2"
          >
            Meet the psychologist
          </a>
        </section>
      </section>
      <section className="flex gap-6 mt-16 md:flex-col w-full">
        <div className="flex gap-6 w-full sm:flex-col">
          <div className="w-1/2 sm:w-full border-1 bg-slate-100 border-dark-200 p-4 rounded-lg">
            <p className="font-bold text-lg whitespace-nowrap truncate text-blue-950">
              User-Driven Support
            </p>
            <p className="text-sm mt-4 text-gray-500">
              At Carehealth platform, we believe in the strength of shared experiences. Our
              user-driven support system creates a space where individuals can
              openly share their feelings.
            </p>
          </div>
          <div className="w-1/2 sm:w-full border-1 bg-slate-100 p-4 rounded-lg">
            <p className="font-bold text-lg whitespace-nowrap truncate text-blue-950">
              Interactive Discussion Platform
            </p>
            <p className="text-sm mt-4 text-gray-500">
              Connect & Empower - Engage in conversations that matter. Our
              interactive discussion platform is a haven for meaningful
              exchanges.
            </p>
          </div>
        </div>
        <div className="flex gap-6 w-full sm:flex-col sm:hidden">
          <div className="w-1/2 sm:w-full border-1 bg-slate-100 p-4 rounded-lg">
            <p className="font-bold text-lg whitespace-nowrap truncate text-blue-950">
              Daily Motivation Quotes
            </p>
            <p className="text-sm mt-4 text-gray-500">
              {`
            Inspiration Every Day" - Elevate your spirits with a daily dose of
            motivation. Our carefully curated quotes are designed to uplift and
            encourage positive thinking
            `}
            </p>
          </div>
          <div className="w-1/2 sm:w-full border-1 bg-slate-100 p-4 rounded-lg">
            <p className="font-bold text-lg whitespace-nowrap truncate text-blue-950">
              Educational Homepage
            </p>
            <p className="text-sm mt-4 text-gray-500">
              {`
            Knowledge is Power - Dive into our educational homepage, a treasure
            trove of valuable resources, articles, and insights on mental
            health.
            `}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
