import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePhysicianDetails } from "../../api/physician";
import { AppContext } from "../../context/AppContext";
import Container from "../../components/Container";
import DashLayout from "../../layouts/DashLayout";
import PhysicianCard from "../../components/PhysicianCard";
import ReviewerPhoto from "../../assets/images/Reviewer1.png";
import Rating from "../../assets/vectors/rating.svg";

const PhysicianDetails = () => {
    const { id } = useParams();
    const { accessToken } = useContext(AppContext);
    const [physician, setPhysician] = useState([]);
    // const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchPhysician() {
            const res = await getSinglePhysicianDetails(accessToken, id);
            setPhysician(res.data);
            console.log(res.data);
        }
        fetchPhysician();
    }, []);

    return (
        <DashLayout>
            {physician !== null ? (
                <div>
                    <div className="flex justify-center mt-12">
                        <PhysicianCard
                            title={physician.title}
                            name={physician.name}
                            imageUrl={physician.imageUrl}
                            speciality={physician.speciality}
                            medicalCenterName={physician.medicalCenterName}
                            medicalCenterAddress={
                                physician.medicalCenterAddress
                            }
                            patientCount={physician.patientCount}
                            yearsOfExperience={physician.yearsOfExperience}
                            averageRating={physician.averageRating}
                            reviewCount={physician.reviewCount}
                            physicianUserId={physician.physicianUserId}
                            physicianId={physician.physicianId}
                        />
                    </div>
                    <div className="flex flex-col justify-center mt-4 ml-14 w-full">
                        <p className="font-semibold w-[5.44rem] overflow-hidden">
                            About me
                        </p>
                        <p className="w-[59.5rem] text-sm pt-2">
                            {physician.about}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center mt-4 ml-14 w-full">
                        <p className="font-semibold w-[7.82rem] overflow-hidden">
                            Working Time
                        </p>
                        <p className="w-[21.4rem] text-sm pt-2">
                            {physician.workingTime}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center mt-4 ml-14 w-full">
                        <div className="overflow-hidden flex flex-row">
                            <p className="font-semibold">Reviews</p>
                            <p className="ml-[51.5rem] overflow-hidden">
                                See All
                            </p>
                        </div>
                        <div className="overflow-hidden flex flex-row mt-2">
                            <div>
                                <img src={ReviewerPhoto} alt="" />
                            </div>
                            <div className="pl-4">
                                <p className="mt-1 font-medium">
                                    Emily Anderson
                                </p>
                                <div className="pt-2 flex flex-row">
                                    <p className="text-xs">
                                        {physician.Rating}
                                    </p>
                                    <span className="flex flex-row">
                                        <img
                                            className="ml-1"
                                            src={Rating}
                                            alt=""
                                        />
                                        <img
                                            className="ml-1"
                                            src={Rating}
                                            alt=""
                                        />
                                        <img
                                            className="ml-1"
                                            src={Rating}
                                            alt=""
                                        />
                                        <img
                                            className="ml-1"
                                            src={Rating}
                                            alt=""
                                        />
                                        <img
                                            className="ml-1"
                                            src={Rating}
                                            alt=""
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="w-[59.5rem] text-sm pt-2">
                            {physician.content}
                        </p>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </DashLayout>
    );
};

export default PhysicianDetails;
