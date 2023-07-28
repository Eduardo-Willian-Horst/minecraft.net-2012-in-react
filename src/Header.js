import React from "react";
import Links from "./Links";
import UserBox from "./UserBox";
import './Header.css';


function Header(){
    return(
        <div className="Header">
            <div className="DivContainer">
                <img src="https://web.archive.org/web/20120705125654im_/http://www.minecraft.net/images/logo.png"></img>
                <div className="Links">
                    <Links/>
                </div>
                <UserBox/>
            </div>

        
        
        </div>
    );
}

export default Header;