import loveImg from "../assets/images/Love.png";
import hospitalImg from "../assets/images/hospital.png";
import locationImg from "../assets/images/location.png";
import profileImg from "../assets/images/profile-2user.png";
import medalImg from "../assets/images/medal.png";
import starImg from "../assets/images/Star.png";
import messagesImg from "../assets/images/messages.png";

const PhysicianCard = ({
    name,
    title,
    speciality,
    imageUrl,
    medicalCenterName,
    MedicalCenterAddress,
    patientCount,
    yearsOfExperience,
    averageRating,
    reviewCount,
}) => {
    return (
        <div className="overflow-hidden w-[37.5rem]">
            <div className="bg-white flex flex-row w-[37.5rem] rounded-lg shadow-lg pt-2 pb-2">
                <img
                    className="w-[6.94rem] aspect-square object-cover ml-2"
                    src={imageUrl}
                    alt=""
                />
                <div className="ml-3">
                    <div className="flex flex-row mt-2">
                        <div className="font-semibold flex flex-row">
                            <p>{title}</p>
                            <p>{name}</p>
                        </div>
                        {/* <img className="ml-[20.5rem]" src={loveImg} alt="" /> */}
                    </div>
                    <div></div>
                    <div className="mt-3">
                        <p className="text-gray-600 font-medium">
                            {speciality}
                        </p>
                        <div className="flex flex-row mt-1">
                            <img
                                className="w-[0.88rem] aspect-square"
                                src={hospitalImg}
                                alt=""
                            />
                            <p className="text-xs text-gray-600 ml-1">
                                {medicalCenterName}
                            </p>
                        </div>
                        <div className="flex flex-row mt-1">
                            <img
                                className="w-[0.88rem] aspect-square"
                                src={locationImg}
                                alt=""
                            />
                            <p className="text-xs text-gray-600 ml-1">
                                {MedicalCenterAddress}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 ml-28 flex flex-row justify-between w-[24.375rem]">
                <div className="w-[4rem] mx-auto flex flex-col items-center">
                    <img src={profileImg} alt="" />
                    <p className="font-medium">{patientCount}</p>
                    <p className="text-xs">patients</p>
                </div>
                <div className="w-[4rem] mx-auto flex flex-col items-center">
                    <img src={medalImg} alt="" />
                    <p className="font-medium">{yearsOfExperience}</p>
                    <p className="text-xs">experience</p>
                </div>
                <div className="w-[4rem] mx-auto flex flex-col items-center">
                    <img src={starImg} alt="" />
                    <p className="font-medium">{averageRating}</p>
                    <p className="text-xs">rating</p>
                </div>
                <div className="w-[4rem] mx-auto flex flex-col items-center">
                    <img src={messagesImg} alt="" />
                    <p className="font-medium">{reviewCount}</p>
                    <p className="text-xs">reviews</p>
                </div>
            </div>
        </div>
    );
};

export default PhysicianCard;
