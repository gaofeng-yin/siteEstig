import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogSidebarSearch extends Component {

    render() {

        return (
            <div className="sidebar-search-from mb-30">
                <form action="#">
                    <input type="text" placeholder="Search here"/>
                    <button type="submit"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></button>
                </form>
            </div>
        );
    }
}

export default BlogSidebarSearch;