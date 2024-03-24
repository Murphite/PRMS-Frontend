const ShowErrorList = ({ errors }) => {
    return (
        <div className="bg-red-100 p-2 rounded-lg text-xs italic space-y-1 text-red-500">
            {Object.keys(errors).map((errorKey, i) => (
                <div key={i}>
                    {errors[errorKey].map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ShowErrorList;
