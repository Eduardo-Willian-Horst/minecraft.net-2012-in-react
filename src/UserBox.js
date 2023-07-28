import React from "react";
import './UserBox.css';

function UserBox(){
    return(
        <div className="container-userbox">
            <a href="https://web.archive.org/web/20120705125646/http://www.minecraft.net/login" className="LoginA">Log in</a>
            <p>|</p>
            <a href="https://web.archive.org/web/20120705125646/http://www.minecraft.net/register" className="LoginA">Register</a>
        </div>
    );
}

export default UserBox;