import React from "react";
import {useForm, useStep} from "react-hooks-helper";
import {OddajFormOne} from "./Oddaj-form-one";
import {OddajFormTwo} from "./Oddaj-form-two";


// const defaultData = {
//     firstName: "",
//     lastName: "",
//     nickName: "",
// }

const steps = [
    {id: 'oddaj-form-one'},
    {id: 'oddaj-form-two'},
]

export const OddajForm = () => {

    // const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep: 0,
    });

    const props = {navigation}

    switch (step.id) {
        case 'oddaj-form-one':
            return <OddajFormOne {...props}/>;
        case 'oddaj-form-two':
            return <OddajFormTwo/>
    }


    return (

        <div>
            <h1>Text</h1>

        </div>

    )


}