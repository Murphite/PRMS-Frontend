import React from "react";
import { Input } from "@nextui-org/react";
import Container from "./Container";

export default function SubscribeForm() {
    return (
        <Container>
            <div className=" flex flex-col h-56 sm:h-64 lg:h-80 bg-teal-600 justify-center align-bottom space-y-9 rounded-3xl px-2 sm:px-10 lg:px-28 sm:mt-8 md:mt-16">
                <div className=" text-white font-semibold text-2xl flex justify-center lg:text-4xl">
                    <h2 className="">Subscribe To Our Newsletter</h2>
                </div>
                <div className="flex w-full flex-wrap justify-center align-middle md:flex-nowrap mb-6 md:mb-unit-0">
                    <Input
                        type="email"
                        radius="full"
                        labelPlacement="outside"
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
                                "h-20",
                                "bg-white",
                                "dark:bg-default/60",
                                "hover:bg-transparent",
                                "dark:hover:bg-default/70",
                                "group-data-[focused=true]:bg-transparent",
                                "dark:group-data-[focused=true]:bg-transparent",
                                "!cursor-text",
                            ],
                        }}
                        endContent={
                            <ArrowIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                    />
                </div>
            </div>
        </Container>
    );
}

const ArrowIcon = () => (
    <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="28" cy="28" r="28" fill="#009688" />
        <path
            d="M34 28L22 28M28.75 33L34 28L28.75 23"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
