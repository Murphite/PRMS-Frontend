import whitedoctor from "../assets/whitedoctor.jpg";
import greenarrowbtn from "../assets/vectors/greenarrowbtn.svg";

export default function JoinUsSection() {
  return (
    <section className="space-y-5 py-6 px-4 lg:flex flex-row-reverse justify-evenly lg:my-16 ">
      <div className="lg:basis-1/2 flex justify-start items-center">
        <img src={whitedoctor} alt="doctor dressed in white" />
      </div>
      <div className="space-y-4 text-gray-800 lg: basis-1/2 max-w-[502px]">
        <h2 className="text-3xl font-bold lg:text-5xl">Join Us Today</h2>
        <div className=" space-y-3">
          <p>
            Ready to embark on your wellness journey? Sign up now and become a
            part of a community dedicated to enhancing health and happiness.
            Experience the full spectrum of benefits [Your App Name] has to
            offer. Our team is here to support you on your path to a healthier
            and more fulfilling life.
          </p>
          <div>
            <p className="font-semibold">What You&apos;ll Gain:</p>
            <ul className="list-outside list-disc pl-6">
              <li>Personalized insights tailored to your well-being.</li>
              <li>
                Easy-to-use tools for tracking activities and achieving fitness
                goals.
              </li>
              <li>Guidance on nutrition for a well-nourished body.</li>
              <li>
                Techniques to support your mental wellness and stress relief.
              </li>
              <li>Timely reminders for medications and health check-ups.</li>
            </ul>
          </div>
        </div>
        <div>
          <span className="">
            <a
              href="/menu"
              className="text-left text-base font-medium leading-tight tracking-normal text-teal-600 inline-flex align-top"
            >
              Start Your Wellness Journey
              <img src={greenarrowbtn} alt="" className="pl-2" />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
