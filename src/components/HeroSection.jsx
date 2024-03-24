import { Input, Button } from "@nextui-org/react";

import heroimage from "../assets/images/heroimage.png";
import Container from "./Container";

export default function HeroSection() {
    return (
        <Container>
            <section className="space-y-5 flex flex-col py-10 lg:flex lg:flex-row justify-evenly lg:mb-10 lg:px-10">
                <div className=" space-y-3 lg:flex flex-col items-start justify-center basis-1/2 md:max-w-xl lg:space-y-8">
                    <h1 className=" text-3xl font-bold lg:text-6xl">
                        Find & Search Your{" "}
                        <span className=" text-teal-600 underline underline-offset-auto">
                            Favourite{" "}
                        </span>{" "}
                        Doctor
                    </h1>
                    <p>
                        Your Personal Wellness Companion for a Healthier
                        Tomorrow
                    </p>
                    <div>
                        <SearchInput />
                    </div>
                </div>
                <div className="">
                    <img src={heroimage} alt="Hero Image" />
                </div>
            </section>
        </Container>
    );
}

function SearchInput() {
    return (
        <div className=" w-full h-10 rounded-lg flex justify-center px-1 items-center bg-gray-100 text-white shadow-lg lg:w-[403px]">
            <Input
                isClearable
                size="small"
                radius="sm"
                classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                        "shadow-xl",
                        "bg-transparent",
                        "dark:bg-default/60",
                        "hover:bg-transparent",
                        "dark:hover:bg-default/70",
                        "group-data-[focused=true]:bg-transparent",
                        "dark:group-data-[focused=true]:bg-transparent",
                        "!cursor-text",
                    ],
                }}
                placeholder="Search doctor, hospitals, clinics..."
                startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
            />
            <Button radius="full" className=" bg-teal-600 text-white shadow-lg">
                Search
            </Button>
        </div>
    );
}

const SearchIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);
