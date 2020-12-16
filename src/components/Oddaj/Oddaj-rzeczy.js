import React from "react";

import {OddajAlert} from "./Oddaj-alert";
import {OddajHeader} from "./Oddaj-header";
import {OddajFormOne} from "./Oddaj-form-one";

export const Oddaj = () => {
    return (
        <div>
            <OddajHeader/>
            <OddajAlert/>
            <OddajFormOne/>
        </div>
    );

}


