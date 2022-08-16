import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderSearch = ({setSearchOpen, searchOpen}) => {

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      return (
        <div className="search-wrap" className={searchOpen ? "search-wrap search-opened": "search-wrap"}>
            <div className="search-inner">
                <i className='search-close' id='search-close' onClick={() => setSearchOpen(false)}><FontAwesomeIcon icon={['fas', 'times']} /></i>
                <div className="search-cell">
                    <form method="get">
                        <div className="search-field-holder">
                            <input type="search" className="main-search-input" placeholder="Search Here..."/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HeaderSearch;