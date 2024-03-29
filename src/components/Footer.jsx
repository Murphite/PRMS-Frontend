import dayjs from "dayjs";
import twitter from "../assets/vectors/twitter-icon.svg";
import linkedIn from "../assets/vectors/linkedIn-icon.svg";
import facebook from "../assets/vectors/facebook-icon.svg";
import github from "../assets/vectors/github-icon.svg";
import fingers from "../assets/vectors/2fingers-icon.svg";
import dribble from "../assets/vectors/dribble-icon.svg";

export default function Footer() {
    const currentYear = dayjs();
    const year = currentYear.year();

    return (
        <section className="flex justify-center p-6 bg-teal-800 ">
            <div className="flex flex-col space-y-5 lg:flex lg:flex-row lg:items-center lg:justify-center lg:w-4/5 lg:h-20">
                <div className="flex items-center justify-center lg:justify-start lg:basis-1/2">
                    <p className=" text-[#98A2B3] text-center">
                        © {year}. All rights reserved.
                    </p>
                </div>
                <div className="flex flex-row items-center justify-center space-x-4 lg:h-6 lg:space-x-6 lg:basis-1/2 lg:justify-end">
                    <img src={twitter} alt="Twitter Icon" />
                    <img src={linkedIn} alt="LinkedIn Icon" />
                    <img src={facebook} alt="Facebook Icon" />
                    <img src={github} alt="Github Icon" />
                    <img src={fingers} alt="Fingers Icon" />
                    <img src={dribble} alt="Dribble Icon" />
                </div>
            </div>
        </section>
    );
}
