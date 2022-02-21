import React from 'react'
import "./Header.css";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutLineIcon from "@material-ui/icons/PersonOutline";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function Header() {
    return (
        //BEM naming class
        <div className="header">
            <div className="header_icons">
                {/**All icons here.. */}
                <div className="header_icon  header_icon--active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header_icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header_icon">
                    <LiveTvIcon />
                    <p>Live</p>
                </div>
                <div className="header_icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="header_icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header_icon">
                    <PersonOutLineIcon />
                    <p>Account</p>
                </div>

            </div>
<h1>hulu</h1>
        </div>
    )
}

export default Header
