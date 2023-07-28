import React from "react";
import './BodyTop.css';

function BodyTop(){
    return(
        <div className="bodyTop">  
            <div>
                <iframe width="630" height="355" src="https://www.youtube.com/embed/MmB9b5njVbA" title="Official Minecraft Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className="description-video">Minecraft is a game about placing blocks to build anything you can imagine. At night monsters come out, make sure to build a shelter before that happens. It also has music by <a href="https://c418.org/">C418</a>! So far 33,694,844 people have registered and 6,500,638 people bought the game. <a href="http://www.minecraft.net/stats">More stats here</a>.</p>
            </div>
            <div className="div-animal">
                <img src="https://web.archive.org/web/20120705125654im_/http://www.minecraft.net/images/animals.png"></img>            
                <a href="https://web.archive.org/web/20120705125646/http://www.minecraft.net/store"><img className="btnBuy" src="https://web.archive.org/web/20120705125653im_/http://www.minecraft.net/images/buy_now.png"></img></a>
                <div className="container-userbox-playminecraft">
                    <p className="text-center">Play Minecraft</p>
                    <div className="container-userbox-corpo">
                        <a href="https://web.archive.org/web/20120705125646/http://www.minecraft.net/play">In browser</a>
                        <p className="separador">|</p>
                        <a href="https://web.archive.org/web/20120705125646/http://www.minecraft.net/download">Download</a>
                    </div>
                </div>
                <div className="container-userbox-playminecraft">
                    <p className="text-center">Play Minecraft Classic (Outdated, but free)</p>
                    <div className="container-userbox-corpo">
                        <a href="https://web.archive.org/web/20120705125646/http://www.minecraft.net/classic/play">Single player</a>
                        <p className="separador">|</p>
                        <a href="https://web.archive.org/web/20120705125646/http://www.minecraft.net/classic/list">Multi player</a>
                    </div>
                </div>

            <div>
    
                </div>
            
            
            </div>
        </div>
    );
}

export default BodyTop;