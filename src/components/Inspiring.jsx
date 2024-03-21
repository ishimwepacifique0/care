import { useState } from "react";
import Faq from "./Faq";

export default function Inspiring() {
  const [test, settest] = useState(0);
  const testimonials = [
    "MindWave has been my anchor through the storm of mental health challenges. The community's warmth and the insightful resources gave me the courage to confront my struggles head-on. Connecting with others who shared their journeys inspired me to seek professional help. Today, I stand not just as a survivor but as someone who thrives. MindWave, to me, is more than a website; it's a lifeline that leads to a brighter future.",
    "MindWave has truly been a beacon of light during my darkest moments. The genuine support from the community and the interactive discussions provided a safe space for me to express my feelings. The daily motivation quotes became a source of strength, helping me navigate each day with a positive mindset. MindWave is not just a website; it's a catalyst for change, and I am grateful for the empowering journey it has guided me through.",
    "MindWave came into my life like a breath of fresh air. The educational resources on the homepage offered valuable insights that enabled me to understand and manage my mental health better. The connection with fellow users in the community was uplifting, and the shared experiences made me feel less alone. MindWave is a powerful tool for empowerment, and I'm proud to be part of a community that advocates for mental well-being. It's more than a website; it's a testament to the strength that lies within each of us.",
  ];

  function handleTest(num) {
    settest(num);
  }
  return (
    <article className="mt-28" id="testimonials">
      <section className="px-[5%] text-dark-200 bg-[url('/faq.jpg')] bg-cover bg-center py-12 relative ">
        <section className="flex justify-between gap-6 sm:flex-col">
          <p className="font-bold text-4xl md:text-3xl w-fit whitespace-nowrap z-10">
            Inspiring Stories
          </p>
          <div className="w-3/5 sm:w-full flex flex-col gap-6 z-10">
            <p className="text-justify text-lg font-medium">
              {testimonials[test]}
            </p>
            <section className="flex justify-between">
              <div
                className="flex items-center gap-4"
                onClick={() => handleTest(0)}
              >
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="/diana.jpg"
                  alt=""
                />
                <div>
                  <p className="font-serif font-bold">Diana Ingabire</p>
                  <p className="text-sm">Mind Wave user</p>
                </div>
              </div>
              <div
                className="flex items-center gap-4"
                onClick={() => handleTest(1)}
              >
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="/imp.jpg"
                  alt=""
                />
                <div>
                  <p className="font-serif font-bold">Fidel IMPANO</p>
                  <p className="text-sm">Mind Wave user</p>
                </div>
              </div>
              <div
                className="flex items-center gap-4"
                onClick={() => handleTest(2)}
              >
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="/linda.jpg"
                  alt=""
                />
                <div>
                  <p className="font-serif font-bold">Linda Irakoze</p>
                  <p className="text-sm">Mind Wave user</p>
                </div>
              </div>
            </section>
          </div>
        </section>
        <div className="w-full h-full bg-dark-100/70 absolute top-0 left-0 z-0"></div>
      </section>
      <section
        id="faq"
        className="mx-auto rounded-2xl z-2 text-dark-200 w-3/5 bg-light-200 sm:w-4/5"
      >
        <Faq />
      </section>
    </article>
  );
}
