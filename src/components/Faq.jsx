import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Faq() {
  return (
    <section className="my-12 z-50 pb-8">
      <p className="font-semibold text-3xl text-center my-12">{`FAQ's`}</p>
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-light-200 transition-all duration-300 p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-dark-100 px-4 py-2 text-left text-sm font-medium text-dark-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>
                  How does MindWave ensure the privacy and confidentiality of
                  user information?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-dark-200`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-dark-200">
                At MindWave, user privacy is our top priority. We employ robust
                security measures to safeguard your personal information. All
                data is encrypted, and we adhere to strict privacy policies.
                Your participation in the community discussions and engagement
                with the app is entirely confidential. We do not share
                identifiable information without explicit consent, ensuring a
                secure space for your mental well-being journey.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-dark-100 px-4 py-2 text-left text-sm font-medium text-dark-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>
                  What makes MindWave different from other mental health
                  platforms?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-dark-200`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                MindWave stands out for its user-driven approach, fostering a
                supportive community for African youth. Our combination of daily
                affirmations, interactive discussions, motivational quotes, and
                an educational homepage creates a unique and comprehensive
                experience. We believe in empowerment, education, and positive
                engagement, making MindWave more than just a {`website—it's`} a
                movement dedicated to reshaping the narrative around mental
                health.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-dark-100 px-4 py-2 text-left text-sm font-medium text-dark-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>How can I contribute to the MindWave community?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-dark-200`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                We welcome your active participation! Engage in meaningful
                discussions, share your experiences, and offer support to fellow
                users. Contribute positively to the community by sharing
                resources, insights, and motivational content. Your involvement
                helps create a vibrant and empowering space for everyone. If you
                have expertise in mental health and would like to contribute
                educational content, reach out to us through our contact page.
                Together, we can build a stronger, more resilient community.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
}
