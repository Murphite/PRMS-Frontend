import React from "react";
import PlusImg from "../../assets/images/plus.png";
import UserImg from "../../assets/images/user.png";
import CalImg from "../../assets/images/calendar-tick.png";
import Container from "../../components/Container";

let data = [
    {
        id: 1,
        date: "February 5, 2023, 2:30 PM - 3:30 PM",
        image: UserImg,
        name: "John Doe",
        email: "johndoe@email.com",
        hasVisited: true,
        visitNo: 5,
    },
    {
        id: 2,
        date: "February 5, 2023, 2:30 PM - 3:30 PM",
        image: UserImg,
        name: "John Doe",
        email: "johndoe@email.com",
        hasVisited: false,
        visitNo: 0,
    },
    {
        id: 3,
        date: "February 5, 2023, 2:30 PM - 3:30 PM",
        image: UserImg,
        name: "John Doe",
        email: "johndoe@email.com",
        hasVisited: true,
        visitNo: 5,
    },
    {
        id: 4,
        date: "February 5, 2023, 2:30 PM - 3:30 PM",
        image: UserImg,
        name: "John Doe",
        email: "johndoe@email.com",
        hasVisited: true,
        visitNo: 5,
    },
    {
        id: 5,
        date: "February 5, 2023, 2:30 PM - 3:30 PM",
        image: UserImg,
        name: "John Doe",
        email: "johndoe@email.com",
        hasVisited: true,
        visitNo: 5,
    },
    {
        id: 6,
        date: "February 5, 2023, 2:30 PM - 3:30 PM",
        image: UserImg,
        name: "John Doe",
        email: "johndoe@email.com",
        hasVisited: true,
        visitNo: 5,
    },
];

const PatientsList = () => {
    return (
        <Container>
            <div className="px-10 py-6">
                <div className="flex justify-end mt-8">
                    <button className="w-36 bg-[#009688] py-3 px-4 flex justify-between rounded-3xl">
                        <img className="h-5" src={PlusImg} alt="plus" />
                        <p className="text-sm text-white">Add Patient</p>
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-4">
                    {data.map((user) => {
                        const {
                            id,
                            date,
                            image,
                            name,
                            email,
                            hasVisited,
                            visitNo,
                        } = user;
                        return (
                            <div
                                key={id}
                                className="flex flex-col h-48 shadow-md w-60 rounded-2xl"
                            >
                                <div className="flex flex-row px-2 pt-2">
                                    <img src={CalImg} alt="calender" />
                                    <p className="ml-2 text-xs font-light text-gray-400">
                                        {date}
                                    </p>
                                </div>
                                <div className="flex justify-center w-40 mx-auto mt-1">
                                    <img
                                        className="object-cover h-20 w-20 rounded-full border-2 border-[#009688]"
                                        src={image}
                                        alt=""
                                    />
                                </div>
                                <div className="mt-1 text-center">
                                    <h3 className="mb-1 text-sm">{name}</h3>
                                    <p className="text-xs font-light">
                                        {email}
                                    </p>
                                </div>
                                <div
                                    className={`bg-${
                                        hasVisited
                                            ? "[#009688]/[.25]"
                                            : "[#53B1FD]/[.70]"
                                    } h-8 pt-1 mt-2 text-center text-xs rounded-b-2xl`}
                                >
                                    {hasVisited ? (
                                        <p>{`Visit: ${visitNo} Times`}</p>
                                    ) : (
                                        <p>New User</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default PatientsList;
