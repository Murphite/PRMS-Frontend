import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";

import nextIcon from "../../assets/vectors/nextBlackIcon.svg";
import previousIcon from "../../assets/vectors/previousBlackIcon.svg";
import DashLayout from "../../layouts/DashLayout";
import { useParams } from "react-router-dom";
import { getAppointments } from "../../api/dashboard/appointments";
import { AppContext } from "../../context/AppContext";

export default function CreateAppointment() {
    const { physicianUserId } = useParams();
    const { accessToken } = useContext(AppContext);

    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);

    const [selectDate, setSelectDate] = useState(currentDate);

    useEffect(() => {
        async function fetchData() {
            const res = await getAppointments(
                accessToken,
                physicianUserId,
                selectDate.startOf("day").format("YYYY-MM-DD hh:mm:ss"),
                selectDate.endOf("day").format("YYYY-MM-DD hh:mm:ss"),
            );

            console.log(res);
        }

        // fetchData();
    }, [physicianUserId, selectDate]);

    const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const timeSlot = [
        "09.00 AM",
        "09.30 AM",
        "10.00 AM",
        "10.30 AM",
        "11.00 AM",
        "11.30 AM",
        "12.00 PM",
        "12.30 PM",
        "01.00 PM",
        "01.30 PM",
        "02.00 PM",
        "02.30 PM",
        "03.00 PM",
        "03.30 PM",
        "04.00 PM",
        "04.30 PM",
        "05.00 PM",
        "05.30 PM",
    ];

    return (
        <DashLayout>
            <div className="w-full space-y-6 h-80">
                <h1 className="text-xl font-semibold text-gray-900">
                    Select Date
                </h1>
                <div className="py-5 space-y-5 shadow-xl bg-gray-50 rounded-xl">
                    <div className="grid grid-cols-2 ">
                        <div className=" sm:pl-5 lg:pl-14">
                            <h2 className="font-semibold ">
                                {months[today.month()]} {today.year()}
                            </h2>
                        </div>
                        <div className="flex flex-row justify-self-end lg:pr-14 lg:h-full">
                            <img
                                src={previousIcon}
                                alt=""
                                className="cursor-pointer "
                                onClick={() => {
                                    setToday(today.month(today.month() - 1));
                                }}
                            />
                            <img
                                src={nextIcon}
                                alt=""
                                className="cursor-pointer "
                                onClick={() => {
                                    setToday(today.month(today.month() + 1));
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-7 ">
                        {days.map((day, index) => {
                            return (
                                <h3
                                    key={index}
                                    className="grid font-bold text-gray-500 place-content-center"
                                >
                                    {day}
                                </h3>
                            );
                        })}
                    </div>
                    <div className="grid grid-cols-7 h-60">
                        {generateDate(today.month(), today.year()).map(
                            (
                                { date, currentMonth, today, isWorkingDay },
                                index,
                            ) => {
                                return (
                                    <div
                                        key={index}
                                        className="grid border-t place-content-center"
                                    >
                                        <p
                                            className={cn(
                                                currentMonth && isWorkingDay
                                                    ? "font-bold"
                                                    : "text-gray-400",
                                                today
                                                    ? "bg-teal-600 text-white"
                                                    : "",
                                                "h-9 w-9 grid place-content-center rounded-lg",
                                                currentMonth && isWorkingDay
                                                    ? "hover:bg-teal-400 hover:text-white transition-all cursor-pointer"
                                                    : "",
                                            )}
                                            onClick={() => {
                                                setSelectDate(date);
                                            }}
                                        >
                                            {date.date()}
                                        </p>
                                    </div>
                                );
                            },
                        )}
                    </div>
                </div>

                <div className="pt-4 space-y-5">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            Select Hour
                        </h2>
                    </div>
                    <div className="grid w-full h-56 grid-cols-3 place-content-between ">
                        {timeSlot.map((timeunit, index) => {
                            return (
                                <div
                                    key={index}
                                    className="grid pb-4 place-content-start"
                                >
                                    <h3
                                        className={cn(
                                            timeunit
                                                ? " bg-gray-100 text-gray-800"
                                                : "",
                                            "h-11 w-28 grid place-content-center rounded-lg",
                                            // currentMonth && isWorkingDay
                                            //     ? "hover:bg-teal-400 hover:text-white transition-all cursor-pointer"
                                            //     : "",
                                        )}
                                    >
                                        {timeunit}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </DashLayout>
    );
}

const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

    const arrayOfDate = [];

    // create prefix date
    for (let i = 0; i < firstDateOfMonth.day(); i++) {
        const date = firstDateOfMonth.day(i);

        arrayOfDate.push({
            currentMonth: false,
            date,
        });
    }

    // generate current date
    let remainingDatesInMonth =
        lastDateOfMonth.date() - firstDateOfMonth.date() + 1; // Total dates in the current month

    let currentRow = 0;

    for (let i = firstDateOfMonth.date(); remainingDatesInMonth > 0; i++) {
        const currentDay = firstDateOfMonth.date(i);
        const isWorkingDay = currentDay.day() !== 0 && currentDay.day() !== 6; // Check if weekday (not Saturday or Sunday)

        arrayOfDate.push({
            currentMonth: true,
            date: currentDay,
            today:
                currentDay.toDate().toDateString() ===
                dayjs().toDate().toDateString(),
            isWorkingDay, // Add a new property for working day identification
        });

        // Check if we need to move to the next row after adding this date
        if (arrayOfDate.length % 7 === 0 || i === lastDateOfMonth.date()) {
            remainingDatesInMonth -= Math.min(
                7 - (arrayOfDate.length % 7),
                remainingDatesInMonth,
            ); // Fill the remaining days in the current row if needed
            currentRow++;
        }
    }

    // Add padding dates if needed
    const remainingCells = 35 - arrayOfDate.length; // Total cells needed for 7 x 5 grid
    if (remainingCells > 0) {
        for (let i = 0; i < remainingCells; i++) {
            arrayOfDate.push({
                currentMonth: false,
                date: lastDateOfMonth.add(i + 1, "day"), // Add days to the last date of the month for padding
            });
        }
    }

    return arrayOfDate;
};

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
