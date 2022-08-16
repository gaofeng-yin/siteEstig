import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Experience from './ExperienceSection';
import PortPagination from './PortPagination';
import RecentWork from './RecentWorkSection';


class ProjectDetails extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Project Details" />
				{/* breadcrumb-end */}

                {/* experience-start */}
               <Experience />
				{/* experience-end */}

                {/* testimonial-start */}
                <PortPagination />
				{/* testimonial-end */}

                {/* fact-start */}
				<RecentWork />
				{/* fact-end */}
        	</main>
        );
    }
}

export default ProjectDetails;