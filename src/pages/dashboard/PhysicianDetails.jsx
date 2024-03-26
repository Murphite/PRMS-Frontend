import Container from "../../components/Container";
import DashLayout from "../../layouts/DashLayout";
import PhysicianCard from "../../components/PhysicianCard";
import ReviewerPhoto from "../../assets/images/Reviewer1.png";
import Rating from "../../assets/vectors/rating.svg";

const PhysicianDetails = () => {
    return (
        <DashLayout>
            <Container>
                <div>
                    <div className="flex justify-center mt-12">
                        <PhysicianCard />
                    </div>
                    <div className="flex flex-col justify-center mt-4 ml-14 w-full">
                        <p className="font-semibold w-[5.44rem] overflow-hidden">
                            About me
                        </p>
                        <p className="w-[59.5rem] text-sm pt-2">
                            I am Dr. David Patel, a dedicated and compassionate
                            Cardiologist committed to providing exceptional
                            cardiovascular care. Currently, I serve as a
                            Cardiologist at Vanguard Clinic and Maternity Home,
                            located at 4, Benson Adedipe Street, Off Agric Road,
                            Ikorodu. Professional Highlights: Cardiology
                            Expertise: With a specialization in cardiology, I
                            bring a wealth of knowledge and experience in the
                            prevention, diagnosis, and treatment of
                            cardiovascular diseases. Patient-Centered Approach:
                            My practice revolves around a patient-centered
                            philosophy, ensuring that each individual receives
                            personalized and comprehensive care tailored to
                            their unique health needs. Cutting-Edge Technology:
                            At Vanguard Clinic, we leverage state-of-the-art
                            medical technology to deliver precise diagnostics
                            and advanced treatment options, striving for the
                            highest standards of healthcare excellence. Passion
                            for Healthcare Innovation: In addition to my
                            clinical responsibilities, I am deeply passionate
                            about staying at the forefront of healthcare
                            innovation. I actively engage in ongoing education,
                            research, and collaboration within the medical
                            community to contribute to advancements in
                            cardiovascular care.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center mt-4 ml-14 w-full">
                        <p className="font-semibold w-[7.82rem] overflow-hidden">
                            Working Time
                        </p>
                        <p className="w-[21.4rem] text-sm pt-2">
                            Monday-Friday, 08.00 AM-18.00 pM
                        </p>
                    </div>
                    <div className="flex flex-col justify-center mt-4 ml-14 w-full">
                        <div className="overflow-hidden flex flex-row">
                            <p className="font-semibold">Reviews</p>
                            <p className="ml-[51.5rem] overflow-hidden">
                                See All
                            </p>
                        </div>
                        <div className="overflow-hidden flex flex-row mt-2">
                            <div>
                                <img src={ReviewerPhoto} alt="" />
                            </div>
                            <div className="pl-4">
                                <p className="mt-1 font-medium">
                                    Emily Anderson
                                </p>
                                <div className="pt-2 flex flex-row">
                                    <p className="text-xs">5.0</p>
                                    <span className="flex flex-row">
                                        <img
                                            className="ml-1"
                                            src={Rating}
                                            alt=""
                                        />
                                        <img
                                            className="ml-1"
                                            src={Rating}
                                            alt=""
                                        />
                                        <img
                                            className="ml-1"
                                            src={Rating}
                                            alt=""
                                        />
                                        <img
                                            className="ml-1"
                                            src={Rating}
                                            alt=""
                                        />
                                        <img
                                            className="ml-1"
                                            src={Rating}
                                            alt=""
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="w-[59.5rem] text-sm pt-2">
                            I recently had the pleasure of being under the care
                            of Dr. David Patel at Vanguard Clinic and Maternity
                            Home, and I couldn't be more impressed. Dr. Patel's
                            professionalism and expertise in cardiology are
                            truly commendable. From the moment I walked into the
                            clinic, the staff made me feel welcomed, and the
                            atmosphere was calming. Dr. Patel took the time to
                            listen to my concerns, thoroughly explained the
                            diagnosis, and discussed the recommended treatment
                            plan with great clarity. What stood out to me was
                            Dr. Patel's commitment to a patient-centered
                            approach. He made sure I felt comfortable, answered
                            all my questions, and involved me in decisions about
                            my health. His genuine concern for his patients is
                            evident, creating a sense of trust and reassurance.
                            The clinic itself is well-equipped with modern
                            technology, reflecting a commitment to providing the
                            highest standard of care. The efficiency of the
                            administrative processes also contributed to a
                            smooth and hassle-free experience. In conclusion, I
                            highly recommend Dr. David Patel and Vanguard Clinic
                            for anyone seeking top-notch cardiology services.
                            Thank you to the entire team for their exceptional
                            care and dedication to patient well-being.
                        </p>
                    </div>
                </div>
            </Container>
        </DashLayout>
    );
};

export default PhysicianDetails;
