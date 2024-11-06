import React from "react";

const TimeInfo = () => (
	<div className="bg-rose-50 p-6 rounded-lg my-4 text-stone-900">
		<h2 className="text-2xl  font-sans font-bold text-rose-800">
			Preparation time
		</h2>

		<ul className="text-stone-600 list-disc list-inside -mb-4">
			<li className="m-4">
				<strong>Total:</strong> 10 minutes{" "}
			</li>
			<li className="m-4">
				<strong>Preparation:</strong> 5 minutes
			</li>
			<li className="m-4">
				<strong>Cooking:</strong> 5 minutes{" "}
			</li>
		</ul>
	</div>
);

export default TimeInfo;
