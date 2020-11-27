import React, {useState} from "react";
import "./help.scss"
import {TabOneB} from "./TabOneB";
import {TabOneC} from "./TabOneC";
import {TabOneD} from "./TabOneD";



export const TabOne = () => {
    const tabs = [<TabOneB/>, <TabOneC/>, <TabOneD/>, <TabOneD/>]
    const [tab, setTab] = useState (tabs[0]);

    return (

        <div className="help-tab">

<div className="Help-tab-first">

    <div>
        {tab}
    </div>

    </div>



    <div className="help-box-nr">
        <button className="help-btn-nr" onClick={() => setTab(tabs[0])}> 1</button>
        <button className="help-btn-nr" onClick={() => setTab(tabs[1])}> 2</button>
        <button className="help-btn-nr" onClick={() => setTab(tabs[2])}> 3</button>

    </div>
        </div>

)

        }