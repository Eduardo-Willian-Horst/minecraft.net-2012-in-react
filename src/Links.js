import React from "react";
import'./Links.css';

function Links(){
    return(
        <div>
            <a href="https://web.archive.org/web/20120705125646/http://www.minecraft.net/" className="linkHeader">Home</a>
            <a href="" className="linkHeader">Game</a>
            <a href="https://web.archive.org/web/20120705125646/http://www.minecraft.net/community" className="linkHeader">Community</a>
            <a href="https://web.archive.org/web/20120705125646/http://www.minecraft.net/store" className="linkHeader">Store</a>
            <a href="https://web.archive.org/web/20120705125646/http://www.minecraft.net/profile" className="linkHeader">Profile</a>
            <a href="https://web.archive.org/web/20120705125646/http://help.mojang.com/" className="linkHeader">Help</a>
        </div>
    );
}

export default Links;