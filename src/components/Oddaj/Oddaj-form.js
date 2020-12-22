import React from "react";
import {useStep} from "react-hooks-helper";
import {OddajFormOne} from "./Oddaj-form-one";
import {OddajFormTwo} from "./Oddaj-form-two";
import {OddajFormThree} from "./Oddaj-form-three";


const steps = [
    {id: 'oddaj-form-one'},
    {id: 'oddaj-form-two'},
    {id: 'oddaj-form-three'},

]

export const OddajForm = () => {

    const {step, navigation} = useStep({
        steps,
        initialStep: 1,
    });

    const props = {navigation}

    // eslint-disable-next-line default-case
    switch (step.id) {
        case 'oddaj-form-one':
            return <OddajFormOne {...props}/>;
        case 'oddaj-form-two':
            return <OddajFormTwo {...props}/>
        case 'oddaj-form-three':
            return <OddajFormThree {...props}/>

    }


    return (

        <div>
            <h1>WYpełnij formularz</h1>

        </div>

    )


}