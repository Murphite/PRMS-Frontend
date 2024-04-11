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
        <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-center pt-2 pb-1">
                <img className="w-5 mr-1" src={calendar} alt="" />
                <p className="text-sm text-gray-400">
                    {date}, {startTime} - {endTime}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center py-4">
                <img
                    className="w-[6.25rem] rounded-full border-3 border-teal-500 aspect-square object-center object-cover"
                    src={userImg}
                    alt=""
                />
                <p className="mt-3 text-base font-semibold text-center">
                    {fullName}
                </p>
                <p className="mt-1 text-sm text-gray-600">{email}</p>
            </div>
            <div className="py-1 text-center bg-teal-200">
                <p className="text-xs text-gray-500">
                    Visit: {noOfVisits} times
                </p>
            </div>
        </div>
    );
};

export default PatientCard;
