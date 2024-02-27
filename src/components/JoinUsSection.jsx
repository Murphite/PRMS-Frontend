import whitedoctor from "../assets/images/whitedoctor.jpg";
import greenarrowbtn from "../assets/vectors/greenarrowbtn.svg";
import Container from "./Container";

export default function JoinUsSection() {
    return (
        <Container>
            <section className="flex-row-reverse space-y-5 lg:flex justify-evenly">
                <div className="flex items-center justify-start lg:basis-1/2">
                    <img src={whitedoctor} alt="doctor dressed in white" />
                </div>
                <div className="space-y-4 text-gray-800 lg: basis-1/2 max-w-[502px]">
                    <h2 className="text-3xl font-bold lg:text-5xl">
                        Join Us Today
                    </h2>
                    <div className="space-y-3 ">
                        <p>
                            Ready to embark on your wellness journey? Sign up
                            now and become a part of a community dedicated to
                            enhancing health and happiness. Experience the full
                            spectrum of benefits [Your App Name] has to offer.
                            Our team is here to support you on your path to a
                            healthier and more fulfilling life.
                        </p>
                        <div>
                            <p className="font-semibold">
                                What You&apos;ll Gain:
                            </p>
                            <ul className="pl-6 list-disc list-outside">
                                <li>
                                    Personalized insights tailored to your
                                    well-being.
                                </li>
                                <li>
                                    Easy-to-use tools for tracking activities
                                    and achieving fitness goals.
                                </li>
                                <li>
                                    Guidance on nutrition for a well-nourished
                                    body.
                                </li>
                                <li>
                                    Techniques to support your mental wellness
                                    and stress relief.
                                </li>
                                <li>
                                    Timely reminders for medications and health
                                    check-ups.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span className="">
                            <a
                                href="/menu"
                                className="inline-flex text-base font-medium leading-tight tracking-normal text-left text-teal-600 align-top"
                            >
                                Start Your Wellness Journey
                                <img
                                    src={greenarrowbtn}
                                    alt=""
                                    className="pl-2"
                                />
                            </a>
                        </span>
                    </div>
                </div>
            </section>
        </Container>
    );
}
