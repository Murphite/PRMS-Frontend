import purpledoctor from "../assets/images/purpledoctor.jpg";
import greencheckmark from "../assets/vectors/greencheckmark.svg";
import greenarrowbtn from "../assets/vectors/greenarrowbtn.svg";
import Container from "./Container";

const whyusList = [
    {
        id: "01",
        description:
            "Receive tailored health recommendations based on your unique profile.",
    },
    {
        id: "02",
        description:
            "Keep tabs on your daily activities and set achievable fitness goals.",
    },
    {
        id: "03",
        description:
            "Access personalized nutrition plans to fuel your body with the right nutrients.",
    },
    {
        id: "04",
        description:
            "Explore mindfulness exercises and stress-relief techniques for a balanced life.",
    },
    {
        id: "05",
        description:
            "Stay on track with medication reminders and health check-up notifications.",
    },
];

export default function WhyUsSection() {
    const whylist = whyusList;
    return (
        <Container>
            <section className="space-y-5 lg:flex justify-evenly lg:mb-10">
                <img
                    src={purpledoctor}
                    alt="doctor dressed in purple"
                    className=""
                />
                <div className="space-y-4 lg:pl-3">
                    <h2 className="text-3xl font-bold lg:text-5xl">
                        Why You Choose Us?
                    </h2>
                    <div>
                        {whylist.length > 0 ? (
                            <>
                                {whylist.map((x) => (
                                    <WhyUsList
                                        description={x.description}
                                        key={x.id}
                                    />
                                ))}
                            </>
                        ) : (
                            <>Not Available</>
                        )}
                    </div>
                    <div>
                        <span className="">
                            <a
                                href="/menu"
                                className="inline-flex text-base font-medium leading-tight tracking-normal text-left text-teal-600 align-top"
                            >
                                Get Started Now
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

// eslint-disable-next-line react/prop-types
function WhyUsList({ description }) {
    return (
        <div className="flex items-start justify-start py-1 space-x-2">
            <img src={greencheckmark} alt="check-mark" className=" pt-1.5" />
            <p className="font-normal text-gray-800 ">{description}</p>
        </div>
    );
}
