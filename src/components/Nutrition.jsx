import React from "react";

const Nutrition = () => (
	<div className="my-4">
		<h3 className="text-lg font-serif font-bold text-brown-800">Nutrition</h3>
		<p className="p-4">
			The table below shows nutritional values per serving without the
			additional fillings.
		</p>

		<table className="w-full text-stone-600 border-collapse">
			<tbody>
				<tr className="border-b border-stone-150">
					<td className="p-4  ">Calories</td>
					<td className="p-2 text-brown-800 font-bold">277kcal</td>
				</tr>
				<tr className="border-b border-stone-150">
					<td className="p-4">Carbs</td>
					<td className="p-2  text-brown-800 font-bold">0g</td>
				</tr>
				<tr className="border-b border-stone-150">
					<td className="p-4 ">Protein</td>
					<td className="p-2 text-brown-800 font-bold">20g</td>
				</tr>
				<tr className=" border-stone-150">
					<td className="p-4 ">Fat</td>
					<td className="p-2 text-brown-800 font-bold">22g</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default Nutrition;
