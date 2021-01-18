
import {useState, useEffect} from "react";
import "./oddaj-rzeczy.scss"



export const OddajFormOne = ({navigation}) => {
    const [radio, setRadio] = useState(null);

    useEffect(()=>{
        const saveRadio = localStorage.getItem("myRadio");
        if (saveRadio) {
            setRadio(JSON.parse(saveRadio))
        }


    },[])

    useEffect(() => {
        localStorage.setItem("myRadio", JSON.stringify(radio));
    }, [radio]);


    return (
        <div className="oddaj-form-one">

            <p>Krok 1/4</p>
            <h1>Zaznacz co chcesz oddać:</h1>


            <div className="oddaj-form-one-checkbox">
                <label className="oddaj-form-one-checkbox-label">

                    <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                           checked={radio === "ubrania-no"}
                           value="ubrania-no"

                           onChange={(e) => {
                               setRadio(e.target.value)
                           }}
                    />
                    <span className="oddaj-form-one-checkbox-input"></span>
                    <p>ubrania, do wyrzucenia</p>
                </label>
                <label className="oddaj-form-one-checkbox-label">
                    <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                           checked={radio === "ubrania-ok"}
                           value="ubrania-ok"

                           onChange={(e) => {
                               setRadio(e.target.value)
                           }}
                    />

                    <span className="oddaj-form-one-checkbox-input"></span>
                    <p>ubrania, które nadają się do ponownego użycia</p>
                </label>

                <label className="oddaj-form-one-checkbox-label">
                    <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                           checked={radio === "zabawki"}
                           value="zabawki"

                           onChange={(e) => {
                               setRadio(e.target.value)
                           }}
                    />

                    <span className="oddaj-form-one-checkbox-input"></span>
                    <p>zabawki</p>
                </label>

                <label className="oddaj-form-one-checkbox-label">
                    <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                           checked={radio === "ksiazki"}
                           value="ksiazki"

                           onChange={(e) => {
                               setRadio(e.target.value)
                           }}
                    />

                    <span className="oddaj-form-one-checkbox-input"></span>
                    <p>ksiązki</p>
                </label>

                <label className="oddaj-form-one-checkbox-label">
                    <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                           checked={radio === "inne"}
                           value="inne"

                           onChange={(e) => {
                               setRadio(e.target.value)
                           }}
                    />

                    <span className="oddaj-form-one-checkbox-input"></span>
                    <p>inne</p>
                </label>


            </div>

            <div className="odaj-nav-next">
                <button className="oddaj-nav-link-next" onClick={() => navigation.next()}>Dalej</button>
            </div>

        </div>
    )
}

