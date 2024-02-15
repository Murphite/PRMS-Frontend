import React from "react";

const Container = ({ children, container = true }) => {
	const containerClass = container ? "max-w-[1280px] mx-auto px-6" : "";
	return <div className={containerClass}>{children}</div>;
};

export default Container;
