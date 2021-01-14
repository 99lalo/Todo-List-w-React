import React, { useState } from "react";

//include images into your bundle

//create your first component
export function List() {
	const [isShown, setIsShown] = useState(false);
	const [task, setTask] = useState([]);

	const handleRemoval = label => {
		const newList = task.filter(item => item.label !== label);
		setTask(newList);
	};
	return (
		<div className="container">
			<div className="d-flex justifyg-content-center">
				<h1>todos</h1>
			</div>
			<ul className="list-group">
				<li className="list-group-item">
					<input
						onKeyDown={e =>
							e.keyCode == 13 &&
							(setTask(task.concat({ label: e.target.value })),
							(e.target.value = ""))
						}
						placeholder="What needs to be done?"
						style={{ border: "none" }}
					/>
				</li>
				{task.length == 0 ? (
					<li className="list-group-item">No tasks, add a task</li>
				) : (
					task.map(t => (
						<li
							className="list-group-item"
							onMouseEnter={() => setIsShown(t.label)}
							onMouseLeave={() => setIsShown(false)}
							key={t.id}>
							{t.label}
							{isShown == t.label && (
								<span
									style={{ float: "right" }}
									onClick={() => handleRemoval(t.label)}>
									X
								</span>
							)}
						</li>
					))
				)}
				<li className="list-group-item">{task.length} items left</li>
			</ul>
		</div>
	);
}
