

const EmailVerificationModal = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white    w-[539px] rounded-large">
        <div className=" gap-32 p-10  ">
          <img
            src="../../../Images/Image001.png"
            alt="EmailVerification"
            className=" h-[131px] mx-auto"
          />
          <h2 className="text-2xl font-semibold text-center pt-9 font-roboto">
            Email Verification Sent!
          </h2>
          <p className="text-center pt-5 font-roboto">
            We have sent a verification email to email@email.com. <br /> Please
            check your inbox and follow the instruction to reset your password
          </p>
          <div className="flex justify-center pt-5">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-5 rounded-full focus:outline-none focus:shadow-outline w-full "
              style={{
                padding: "12px 20px",
                borderRadius: "50px",
              }}
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationModal;