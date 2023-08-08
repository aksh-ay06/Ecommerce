import React from "react";
import './Homepage.styles.scss';

function HomePage() {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">Buy Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span className="subtitle">Buy Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SNEAKRS</h1>
                        <span className="subtitle">Buy Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMENS</h1>
                        <span className="subtitle">Buy Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MAN'S</h1>
                        <span className="subtitle">Buy Now</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;