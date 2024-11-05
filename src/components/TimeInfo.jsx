import React from "react";

const TimeInfo = () => (
	<div className="bg-rose-50 p-4 rounded-lg my-4 text-stone-900">
		<h3 className="text-lg font-sans font-bold text-rose-800">
			Preparation time
		</h3>

		<ul className="text-stone-600 list-disc list-inside">
			<li>
				<strong>Total:</strong> 10 minutes{" "}
			</li>
			<li>
				<strong>Preparation:</strong> 5 minutes
			</li>
			<li>
				<strong>Cooking:</strong> 5 minutes{" "}
			</li>
		</ul>
	</div>
);

export default TimeInfo;
