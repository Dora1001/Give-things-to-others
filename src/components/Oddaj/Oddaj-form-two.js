import "./oddaj-rzeczy.scss"
import React from "react";
import {useState} from "react";


export const OddajFormTwo = ({navigation}) => {
    const [numbers] = useState([
        {
            label: "1",
            value: "1"
        },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
    ]);

    return (
        <div className="oddaj-form-one">

            <p>Krok 2/4</p>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>

            <select className="oddaj-form-three-select">
                {numbers.map(item => (
                    <option
                    key={item.value}
                    value={item.value} >

                {item.label}
                    </option>

                ))}
            </select>

            <div className="odaj-nav-next">
                <button className="oddaj-nav-link-next" onClick={() => navigation.next()}>Dalej</button>
            </div>
        </div>
    )
}

