import About from "../components/About";
import Hero from "../components/Hero";
import How from "../components/How";
import Inspiring from "../components/Inspiring";
import Mental from "../components/Mental";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <How />
      <Mental />
      <Inspiring />
    </section>
  );
}
