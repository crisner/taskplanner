import React from "react";

function ProjectDetails(props) {
	const id = props.match.params.id;
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project title - {id}</span>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nam
						voluptatum possimus quaerat id quas ipsa culpa repellat animi
						tenetur? Mollitia voluptas rem voluptatem repellat impedit corporis
						dicta necessitatibus quis?
					</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by Crisner</div>
					<div>2nd September, 2am</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;
