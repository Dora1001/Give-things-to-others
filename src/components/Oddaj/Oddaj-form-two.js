import "./oddaj-rzeczy.scss"
import React from "react";
import {useState, useEffect} from "react";


export const OddajFormTwo = ({navigation}) => {

    const [value, setValue] = useState(null);

    useEffect(()=>{
        const saveValue = localStorage.getItem("myNumber");
        if (saveValue) {
            setValue(JSON.parse(saveValue))
        }


    },[])

    useEffect(() => {
        localStorage.setItem("myNumber", JSON.stringify(value));
    }, [value]);

    const numbers = [
        {
            label: "1",
            value: "1"
        },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
    ]

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
                <button className="oddaj-nav-link-next" onClick={() => navigation.previous()}>Wróć</button>
                <button className="oddaj-nav-link-next" onClick={() => navigation.next()}>Dalej</button>

            </div>
        </div>
    )
}

