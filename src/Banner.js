import React from 'react'
import Typical from "react-typical"

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h3>Welcome to Vidly</h3>
                <Typical
                    steps={['Your favourite movie app in arusha', 1000, 'Summer sales are live now', 500, 'Get your movie today!!', 500]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
        </div>
    )
}

export default Banner
