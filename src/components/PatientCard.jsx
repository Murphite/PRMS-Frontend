import calendar from "../assets/vectors/calendar.svg";

const PatientCard = ({
    date,
    startTime,
    endTime,
    userImg,
    fullName,
    email,
    noOfVisits,
}) => {
    return (
        <div className="bg-white w-96 rounded-lg overflow-hidden shadow-lg">
            <div className="flex justify-center items-center pb-1 pt-2">
                <img className="w-5 mr-1" src={calendar} alt="" />
                <p className="text-xs text-gray-400">
                    {date}, {startTime} - {endTime}
                </p>
            </div>
            <div className="py-4 flex justify-center items-center flex-col">
                <img
                    className="w-[6.25rem] rounded-full border-3 border-teal-500 aspect-square object-center object-cover"
                    src={userImg}
                    alt=""
                />
                <p className="text-center text-sm mt-3 font-semibold">
                    {fullName}
                </p>
                <p className="text-xs mt-1 text-gray-600">{email}</p>
            </div>
            <div className="py-1 text-center bg-teal-200">
                <p className="text-[0.625rem] text-gray-500">
                    Visit: {noOfVisits} times
                </p>
            </div>
        </div>
    );
};

export default PatientCard;
