import React from "react";

import {OddajAlert} from "./Oddaj-alert";
import {OddajHeader} from "./Oddaj-header";
import {OddajForm} from "./Oddaj-form";

export const Oddaj = () => {
    return (
        <div>
            <OddajHeader/>
            <OddajAlert/>
            <OddajForm/>
        </div>
    );

}


