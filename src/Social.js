import React from "react";
import './Social.css';

function Social(){
    return(
        <div className="div-social">
            <div id="Facebook" className="social-block">
                <div className="title-social">
                    <img width={32} height={32} src="https://web.archive.org/web/20120705125654im_/http://www.minecraft.net/images/facebook_icon.png"></img>
                    <a className="link-social" href="https://web.archive.org/web/20120705125646/https://facebook.com/minecraft"><h2>Join Us on Facebook</h2></a>
                </div>
                <p className="text-social">Join the Minecraft community on Facebook by liking our page <a href="facebook.com/minecraft">facebook.com/minecraft</a>.</p>
                
            </div>
            <div id="Updates" className="social-block">
                <div className="title-social">
                    <img width={32} height={32} src="https://web.archive.org/web/20120705125654im_/http://www.minecraft.net/images/tumblr_icon.png"></img>
                    <a className="link-social" href="https://web.archive.org/web/20120705125646/http://mcupdate.tumblr.com/"><h2>Minecraft Update News</h2></a>
                </div>
                <p className="text-social">Follow the latest updates and changes to Minecraft.</p>
                <div className="Minecraft-version">
                    <a href="https://web.archive.org/web/20120705125646mp_/http://mcupdate.tumblr.com/post/29554961741/minecraft-1-3-2" className="linkVersion">Minecraft 1.3.2</a>
                    <p className="description-version">less than a minute ago</p>
                </div>
                <div className="Minecraft-version">
                    <a href="https://web.archive.org/web/20120705125646mp_/http://mcupdate.tumblr.com/post/28481708267/minecraft-1-3-1" className="linkVersion">Minecraft 1.3.1</a>
                    <p className="description-version">less than a minute ago</p>
                </div>
                <div className="Minecraft-version">
                    <a href="https://web.archive.org/web/20120705125646mp_/http://mcupdate.tumblr.com/post/20471062706/minecraft-1-2-5" className="linkVersion">Minecraft 1.2.5</a>
                    <p className="description-version">3 months ago</p>
                </div>
                <div className="Minecraft-version">
                    <a href="https://web.archive.org/web/20120705125646mp_/http://mcupdate.tumblr.com/post/19734344120/minecraft-1-2-4" className="linkVersion">Minecraft 1.2.4</a>
                    <p className="description-version">3 months ago</p>
                </div>
                <div className="Minecraft-version">
                    <a href="https://web.archive.org/web/20120705125646mp_/http://mcupdate.tumblr.com/post/18600004768/minecraft-1-2-3" className="linkVersion">Minecraft 1.2.3</a>
                    <p className="description-version">4 months ago</p>
                </div>

            </div>
            <div id="Jeb" className="social-block">
                <div className="title-social">
                    <img width={32} height={32} src="https://web.archive.org/web/20120705125654im_/http://www.minecraft.net/images/twitter_icon.png"></img>
                    <a className="link-social" href="https://web.archive.org/web/20120705125646/https://twitter.com/#!/jeb_"><h2>Twitter / @jeb_</h2></a>
                </div>
                <p className="text-social">Jeb is on the Twitter. You should <a href="https://web.archive.org/web/20120705125646/https://twitter.com/#!/jeb_">follow him</a> for all the fine inside scoops of Minecraft development.</p>
                <div className="description-jeb">
                    <p className="pDescription">RE: <a href="https://web.archive.org/web/20120705125650/https://twitter.com/#!/OneSh0tCha0s">@OneSh0tCha0s</a> I'll add chips when 100% of the community agrees they look like <a href="http://t.co/tLBna0sY">http://t.co/tLBna0sY</a> or like <a href="http://t.co/GRuJERIX">http://t.co/GRuJERIX</a></p>
                    <p className="description-version">less than a minute ago</p>
                </div>
                <div className="description-jeb">
                    <p className="pDescription">Minecraft snapshot 12w34b: <a href="http://t.co/9OTXiJQ4">http://t.co/9OTXiJQ4</a></p>
                    <p className="description-version">less than a minute ago</p>
                </div>
                <div className="description-jeb">
                    <p className="pDescription">RT <a href="https://web.archive.org/web/20120705125650/https://twitter.com/#!/Skulburn">@Skulburn</a>: BOIL 'EM! MASH 'EM! STICK 'EM IN A STEW! #snapshot <a href="https://web.archive.org/web/20120705125650/https://twitter.com/#!/jeb_">@jeb_</a></p>
                    <p className="description-version">less than a minute ago</p>
                </div>
                <div className="description-jeb">
                    <p className="pDescription">Lots of Minecraft info and snapshot update in the Weekly Chunk: <a href="http://t.co/BWzWNAff">http://t.co/BWzWNAff</a></p>
                    <p className="description-version">less than a minute ago</p>
                </div>
            </div>

            
        </div>
    );
}

export default Social;