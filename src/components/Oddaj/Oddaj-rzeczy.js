import React from "react";
import "./oddaj-rzeczy.scss"



export const OddajRzeczy = ({handleLogout}) => {

    return (
        <div>
<h1>Oddaj</h1>
    <button  onClick={handleLogout}>Log out</button>
    </div>

)
}