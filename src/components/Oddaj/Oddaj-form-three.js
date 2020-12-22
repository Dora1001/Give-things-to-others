import "./oddaj-rzeczy.scss"
import React from "react";
import {useState} from "react";


export const OddajFormThree = ({navigation}) => {

    const [radio, setRadio] = useState(false);

    const [cities] = useState([
        {
            label: "Katowice",
            value: "Katowice"
        },
        {label: "Wrocław", value: "Wrocław"},
        {label: "Warszawa", value: "Warszawa"},
        {label: "Kraków", value: "Kraków"},
    ]);

    return (
        <div className="oddaj-form-one">

            <p>Krok 3/4</p>
            <h1>Lokalizacja:</h1>

            <select className="oddaj-form-three-select">
                {cities.map(item => (
                    <option
                        key={item.value}
                        value={item.value}>

                        {item.label}
                    </option>

                ))}
            </select>

            <h2>Komu chcesz pomóc:</h2>
            <label className="oddaj-form-one-checkbox-label">
                <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                       checked={radio === "dzieciom"}
                       value="dzieciom"
                       onChange={(e) => {
                           setRadio(e.target.value)
                       }}
                />
                <span className="oddaj-form-one-checkbox-input"></span>
                <p>dzieciom</p>
            </label>

            <label className="oddaj-form-one-checkbox-label">
                <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                       checked={radio === "matkom"}
                       value="matkom"
                       onChange={(e) => {
                           setRadio(e.target.value)
                       }}
                />
                <span className="oddaj-form-one-checkbox-input"></span>
                <p>samotnym matkom</p>
            </label>

            <label className="oddaj-form-one-checkbox-label">
                <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                       checked={radio === "bezdomnym"}
                       value="bezdomnym"
                       onChange={(e) => {
                           setRadio(e.target.value)
                       }}
                />
                <span className="oddaj-form-one-checkbox-input"></span>
                <p>bezdomnym</p>
            </label>

            <label className="oddaj-form-one-checkbox-label">
                <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                       checked={radio === "niepelnosprawnym"}
                       value="niepelnosprawnym"
                       onChange={(e) => {
                           setRadio(e.target.value)
                       }}
                />
                <span className="oddaj-form-one-checkbox-input"></span>
                <p>niepełnosprawnym</p>
            </label>

            <label className="oddaj-form-one-checkbox-label">
                <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                       checked={radio === "starszym"}
                       value="starszym"
                       onChange={(e) => {
                           setRadio(e.target.value)
                       }}
                />
                <span className="oddaj-form-one-checkbox-input"></span>
                <p>osobom starszym</p>
            </label>

            <h2>Wpisz nazwę konkretnej organizajci:</h2>
            <input className="oddaj-form-three-input" type="text"
                  />


            <div className="odaj-nav-next">
                <button className="oddaj-nav-link-next" onClick={() => navigation.next()}>Dalej</button>
            </div>
        </div>
    )
}

