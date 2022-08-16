import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import ProjectTabTwo from '../Elements/Tab/ProjectTabTwo';


class ProjectMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Projects" />
				{/* breadcrumb-end */}

                {/* service-start */}
                <ProjectTabTwo />
				{/* service-end */}

        	</main>
        );
    }
}

export default ProjectMain;