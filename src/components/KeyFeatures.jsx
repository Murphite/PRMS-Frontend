import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import PersonalHealth from "../assets/vectors/personalizedHealth.svg";
import ActivityTracking from "../assets/vectors/activityTracking.svg";
import NutrionalGuidance from "../assets/vectors/nutritionGuidance.svg";
import MentalWellness from "../assets/vectors/mentalWellness.svg";
import Container from "./Container";

export default function KeyFeaturesSection() {
    return (
        <Container>
            <section className=" grid grid-cols-1 gap-x-6 gap-y-10 py-10 sm:grid-cols-2 sm:my-8 lg:grid-cols-3 lg:py-10 xl:grid-cols-4 xl:gap-x-8">
                <Card className=" py-7 px-5 border-1 border-teal-500 max-w-[285px] hover:bg-teal-500 hover:text-white">
                    <CardHeader className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={PersonalHealth}
                            width="w-24"
                        />
                    </CardHeader>
                    <CardBody className="pb-0 px-4 space-y-2 flex-col items-start">
                        <h4 className="font-bold text-2xl text-teal-600 hover:text-white">
                            Personalized Health Insights
                        </h4>
                        <p>
                            Receive tailored health recommendations based on
                            your unique profile.
                        </p>
                    </CardBody>
                </Card>
                <Card className=" py-7 px-5 border-1 border-teal-500 max-w-[285px] lg:max-h-80 hover:bg-teal-500 hover:text-white">
                    <CardHeader className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={ActivityTracking}
                            width="w-24"
                        />
                    </CardHeader>
                    <CardBody className="pb-0 pt-2 px-4 space-y-2 flex-col items-start ">
                        <h4 className="font-bold text-2xl text-teal-600 hover:text-white">
                            Activity Tracking
                        </h4>
                        <p>
                            Keep tabs on your daily activities and set
                            achievable fitness goals.
                        </p>
                    </CardBody>
                </Card>
                <Card className=" py-7 px-5 border-1 border-teal-500 max-w-[285px] lg:max-h-80 hover:bg-teal-500 hover:text-white">
                    <CardHeader className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={NutrionalGuidance}
                            width="w-24"
                        />
                    </CardHeader>
                    <CardBody className="pb-0 pt-2 px-4 space-y-2 flex-col items-start ">
                        <h4 className="font-bold text-2xl text-teal-600 hover:text-white">
                            Nutrition Guidance
                        </h4>
                        <p>
                            Access personalized nutrition plans to fuel your
                            body with the right nutrients.
                        </p>
                    </CardBody>
                </Card>
                <Card className=" py-7 px-5 border-1 border-teal-500 max-w-[285px] lg:max-h-80 hover:bg-teal-500 hover:text-white">
                    <CardHeader className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={MentalWellness}
                            width="w-24"
                        />
                    </CardHeader>
                    <CardBody className="pb-0 pt-2 space-y-2 flex-col items-start ">
                        <h4 className="font-bold text-2xl text-teal-600 hover:text-white">
                            Mental Wellness Support
                        </h4>
                        <p>
                            Explore mindfulness exercises and stress-relief
                            techniques for a balanced life.
                        </p>
                    </CardBody>
                </Card>
            </section>
        </Container>
    );
}
