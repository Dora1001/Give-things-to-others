import React from "react";
import "./oddaj-rzeczy.scss"



export const OddajFormOne = () => {
    const [checked, setChecked] = React.useState(false);

    return (

        <div className="oddaj-form-one">
            <p>Krok 1/4</p>
            <h1>Zaznacz co chcesz oddać:</h1>


            <div className="oddaj-form-one-checkbox">
                <label className="oddaj-form-one-checkbox-label">
                    <input type="checkbox"
                           checked={checked}
                           onChange={() => setChecked(!checked)}
                    />
                   ubrania, które nadają się do ponownego użycia
                </label>
                <label className="oddaj-form-one-checkbox-label">
                    <input  type="checkbox"
                           checked={checked}
                           onChange={() => setChecked(!checked)}
                    />
                    <span className="oddaj-form-one-checkbox-input"></span>
                    <p>ubrania, które nadają się do ponownego użycia</p>
                </label>
            </div>

        </div>
        )
    }
