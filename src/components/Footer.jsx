import { Link } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon";

export default function Footer() {
  return (
    <article>
      <section className="w-full bg-white text-blue-950 flex flex-col items-center text-center py-12 gap-3">
        <p className="font-serif text-sm font-semibold">We are here to help!</p>
        <p className="font-semibold text-3xl">Ready to give us a TRY?</p>
        <p className="w-1/2 text-lg">
          Join Carehealth platform today. Connect, share, and grow in our supportive mental
          health community. Your well-being matters – be part of the
          conversation and start your journey to a healthier mind.
        </p>
        <Link
          className="px-10 py-2 bg-blue-950 text-light-200 rounded"
          to="/signup"
        >
          Get Started
        </Link>
      </section>
      <section className="w-full py-6 px-12">
        <section className="flex justify-around border-b-2 border-light-200 pb-8">
          <div className="w-1/4 flex flex-col gap-4">
            <Link
              to="/"
              className="flex justify-start items-center gap-4 font-serif font-bold text-xl"
            >
              <img className="text-dark-100 w-12 h-12" src="pngtree-insurance-logo-vector-image_80257-removebg-preview.png" />
              <p>Carehealth </p>
            </Link>
            <p>
              Welcome to Carehealth platform – where conversations on mental health thrive.
              Explore resources, connect with a supportive community, and begin
              your journey to a healthier mind. Join us in fostering
              understanding, empathy, and growth. Your well-being starts here
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-2xl mb-4">Links</p>
            <Link to="/login">Login</Link>
            <Link to="/login">Sign Up</Link>
            <Link to="/login">About</Link>
            <Link to="/login">Team</Link>
            <Link to="/login">Mental Health</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl mb-4">Contacts</p>
            <p>Location: Kigali, Rwanda</p>
            <p>Email: mbanzabigwiesther@gmail.com</p>
            <p>Phone: +250788695489</p>
            <div className="flex justify-start gap-3">
              <img className="w-6" src="/twitter.png" alt="twitter" />
              <img className="w-6" src="/facebook.png" alt="twitter" />
              <img className="w-6" src="/linkedin.png" alt="twitter" />
              <img className="w-6" src="/instagram.png" alt="twitter" />
            </div>
          </div>
        </section>
      </section>
    </article>
  );
}
