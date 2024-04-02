const ShowErrorList = ({ errors = [] }) => {
    return (
        <div className="p-2 space-y-1 text-xs italic text-red-500 bg-red-100 rounded-lg">
            {/* {Object.keys(errors).map((errorKey, i) => (
                <div key={i}>
                    {errors[errorKey].map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
            ))} */}
            {errors.map(({ message, code }) => (
                <p key={code}>{message}</p>
            ))}
        </div>
    );
};

export default ShowErrorList;
