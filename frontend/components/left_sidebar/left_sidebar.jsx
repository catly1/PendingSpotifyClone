import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { MdHome, MdSearch } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { GiBookshelf } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FiArrowDownCircle } from "react-icons/fi";


class LeftSidebar extends Component {

    render() {
        return (
            <section className="left-nav-bar"> 
        <div className="left-nav-wrapper">
            <div className="left-nav-logo"> 
                <Link to='/player/browse' >
                    <img src="./assets/logo.png" alt="Moefy" />
                </Link>
            </div>

            <nav className="sidebar-main-nav">
                <Link className="left-nav-bar-items" to='/player/browse' >
                    <MdHome/><div>Home</div>
                </Link>
                <Link className="left-nav-bar-items" to='/player/browse' >
                    <MdSearch/><div>Search</div>
                </Link>
                <Link className="left-nav-bar-items" to='/player/browse' >
                    <GiBookshelf/><div>Library</div>
                </Link>
            </nav>
            <h2 className="sidebar-playlist-header">Playlists</h2>
            <button className="create-playlist-button">
                <FaPlus/>
                <span>Create Playlist</span>
            </button>
            <div className="sidebar-bottom">
                <Link className="left-nav-bar-items sidebar-bottom-download" to='/player/browse' >
                    <FiArrowDownCircle/><div>Install App</div>
                </Link>
                <div className="user-profile">
                    <Link className="left-nav-bar-items sidebar-bottom-download" to='/player/settings/account'>
                        <GoPerson/><div>{this.props.currentUser.username}</div>
                    </Link>
                </div>
            </div>
        </div>
            </section>
        )
    }
}

export default LeftSidebar