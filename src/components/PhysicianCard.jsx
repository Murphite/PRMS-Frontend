import physicianImg from "../assets/images/Doctor.png";
import loveImg from "../assets/images/Love.png";
import hospitalImg from "../assets/images/hospital.png";
import locationImg from "../assets/images/location.png";
import profileImg from "../assets/images/profile-2user.png";
import medalImg from "../assets/images/medal.png";
import starImg from "../assets/images/Star.png";
import messagesImg from "../assets/images/messages.png";

const PhysicianCard = () => {
    return (
        <div className="overflow-hidden w-[37.5rem] h-[19.94rem]">
            <div className="bg-white flex flex-row w-[37.5rem] rounded-lg shadow-lg pt-2 pb-2">
                <img
                    className="w-[6.94rem] aspect-square object-cover ml-2"
                    src={physicianImg}
                    alt=""
                />
                <div className="ml-3">
                    <div className="flex flex-row mt-2">
                        <p className="font-semibold">Dr. David Patel</p>
                        <img className="ml-[20.5rem]" src={loveImg} alt="" />
                    </div>
                    <div></div>
                    <div className="mt-3">
                        <p className="text-gray-600 font-medium">
                            Cardiologist
                        </p>
                        <div className="flex flex-row mt-1">
                            <img
                                className="w-[0.88rem] aspect-square"
                                src={hospitalImg}
                                alt=""
                            />
                            <p className="text-xs text-gray-600 ml-1">
                                Vanguard Clinic and Maternity Home
                            </p>
                        </div>
                        <div className="flex flex-row mt-1">
                            <img
                                className="w-[0.88rem] aspect-square"
                                src={locationImg}
                                alt=""
                            />
                            <p className="text-xs text-gray-600 ml-1">
                                4, Benson Adedipe Street, Off Agric Road,
                                Ikorodu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 ml-28 flex flex-row justify-between w-[24.375rem]">
                <div className="w-[4rem] ml-0.5">
                    <img src={profileImg} alt="" />
                    <p className="font-medium">2,000+</p>
                    <p className="text-xs">patients</p>
                </div>
                <div className="w-[4rem] ml-0.5">
                    <img src={medalImg} alt="" />
                    <p className="font-medium">10+</p>
                    <p className="text-xs">experience</p>
                </div>
                <div className="w-[4rem] ml-0.5">
                    <img src={starImg} alt="" />
                    <p className="font-medium">5</p>
                    <p className="text-xs">rating</p>
                </div>
                <div className="w-[4rem] ml-0.5">
                    <img src={messagesImg} alt="" />
                    <p className="font-medium">1,872</p>
                    <p className="text-xs">reviews</p>
                </div>
            </div>
            <button className="w-[21.4rem] h-[3rem] mt-4 ml-32 text-center bg-[#009688] text-white rounded-3xl">
                Book Appointment
            </button>
        </div>
    );
};

export default PhysicianCard;
