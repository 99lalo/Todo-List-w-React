import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { array } from "prop-types";

//create your first component
export function List() {
	const [isShown, setIsShown] = useState(false);
	const [task, setTask] = useState([]);

	return (
		<div className="container">
			<ul className="list-group">
				<li className="list-group-item">
					<input
						onKeyDown={e =>
							e.keyCode == 13 &&
							(setTask(task.concat({ label: e.target.value })),
							(e.target.value = ""))
						}
					/>
				</li>
				{task === null ? (
					<li className="list-group-item">No tasks, add a task</li>
				) : (
					task.map(t => (
						<li
							className="list-group-item"
							onMouseEnter={() => setIsShown(true)}
							onMouseLeave={() => setIsShown(false)}
							key={t.id}>
							{t.label}
							{isShown && (
								<span style={{ color: "red", float: "right" }}>
									X
								</span>
							)}
						</li>
					))
				)}
			</ul>
		</div>
	);
}
