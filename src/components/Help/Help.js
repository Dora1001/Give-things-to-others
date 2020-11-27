
import "./help.scss"
import {TabOne} from "./TabOne";
import {TabTwo} from "./TabTwo";
import {TabThree} from "./TabThree";

import React, { useState } from "react";



export const Help = () => {
    const tabs = [<TabOne/>, <TabTwo/>, <TabThree/>, <TabThree/>]
const [tab, setTab] = useState (tabs[0]);


    return (
        <div className="help-cointainer" id="help">
            <h1>Komu pomagamy</h1>
            <img className="help-img-two" src={"../../images/Decoration.svg"} alt="oddam w dobre rece"/>

            <div className="help-btns">

                <button className="help-btn-tab" onClick={() => setTab(tabs[0])}>  Fundacjom</button>
                <button className="help-btn-tab" onClick={() => setTab(tabs[1])}> Organizacjom <br/> pozarządowym</button>
                <button className="help-btn-tab" onClick={() => setTab(tabs[2])}> Lokalnym <br/> zbiórkom</button>

            </div>
<div>
    {tab}
</div>

        </div>
    )

}