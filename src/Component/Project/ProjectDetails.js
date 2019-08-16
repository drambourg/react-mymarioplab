import React from 'react';

const ProjectDetails = (props) => {
        const id = props.match.params.id
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - {id} </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi, eum ex fugit
                            in iure maxime molestiae nobis nulla odit, quia quisquam tempore vel vitae voluptatum? Est
                            et qui repellat?
                        </p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted bu xNousex</div>
                        <div>3rd May, 3am</div>
                    </div>
                </div>
            </div>
        );
}

export default ProjectDetails;