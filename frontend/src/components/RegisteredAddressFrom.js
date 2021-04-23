import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";
import axios from "axios";

const mapStateToProps = state => ({
    poll: state.poll.poll,
    voivodeships: state.voivodeships.voivodeships
});

const RegistrationAddressForm = ({previousPage, poll, dispatch, voivodeships, nextPage}) => {

    const [voivodeship, setVoivodeship] = useState(poll.registered_address.place.voivodeship);
    const [district, setDistrict] = useState(poll.registered_address.place.district);
    const [community, setCommunity] = useState(poll.registered_address.place.community);
    const [city, setCity] = useState(poll.registered_address.place.city);
    const [street_name, setStreet] = useState(poll.registered_address.street_name);
    const [home_number, setHomeNum] = useState(poll.registered_address.home_number);
    const [apartment_number, setApartment] = useState(poll.registered_address.apartment_number);
    const [postal_code, setPostalCode] = useState(poll.registered_address.postal_code);

    const [same, setSame] = useState(poll.registered_address.same);
    const [saved, setSaved] = useState(poll.registered_address.saved);

    const [communes, setCommunes] = useState([])

    const [buttonClicked, setButtonClicked] = useState(false);

    const [errors, setErrors] = useState({
        cityError: "",
        street_nameError: "",
        home_numberError: "",
        apartment_numberError: "",
        postal_codeError: "",
    });

    useEffect(() => {
        console.log(poll);
    }, [poll]);

    useEffect(() => {
        if (same) {
            setVoivodeship(poll.address.place.voivodeship);
            setDistrict(poll.address.place.district);
            setCommunity(poll.address.place.community);
            setCity(poll.address.place.city);
            setStreet(poll.address.street_name);
            setHomeNum(poll.address.home_number);
            setApartment(poll.address.apartment_number);
            setPostalCode(poll.address.postal_code);
        }
        else {
            setVoivodeship(poll.registered_address.place.voivodeship);
            setDistrict(poll.registered_address.place.district);
            setCommunity(poll.registered_address.place.community);
            setCity(poll.registered_address.place.city);
            setStreet(poll.registered_address.street_name);
            setHomeNum(poll.registered_address.home_number);
            setApartment(poll.registered_address.apartment_number);
            setPostalCode(poll.registered_address.postal_code);
        }
    }, [same]);

    useEffect(() => {
        if (same === false && saved === false) {
        if (voivodeship === "Dolnośląskie") {
            setDistrict("bolesławiecki")
        }
        if (voivodeship === "Kujawsko-pomorskie") {
            setDistrict("aleksandrowski")
        }
        if (voivodeship === "Lubelskie") {
            setDistrict("bialski")
        }
        if (voivodeship === "Lubuskie") {
            setDistrict("gorzowski")
        }
        if (voivodeship === "Łódzkie") {
            setDistrict("bełchatowski")
        }
        if (voivodeship === "Małopolskie") {
            setDistrict("bocheński")
        }
        if (voivodeship === "Mazowieckie") {
            setDistrict("białobrzeski")
        }
        if (voivodeship === "Opolskie") {
            setDistrict("brzeski")
        }
        if (voivodeship === "Podkarpackie") {
            setDistrict("bieszczadzki")
        }
        if (voivodeship === "Podlaskie") {
            setDistrict("augustowski")
        }
        if (voivodeship === "Pomorskie") {
            setDistrict("bytowski")
        }
        if (voivodeship === "Śląskie") {
            setDistrict("będziński")
        }
        if (voivodeship === "Świętokrzyskie") {
            setDistrict("buski")
        }
        if (voivodeship === "Warmińsko-mazurskie") {
            setDistrict("bartoszycki")
        }
        if (voivodeship === "Wielkopolskie") {
            setDistrict("chodzieski")
        }
        if (voivodeship === "Zachodniopomorskie") {
            setDistrict("białogardzki")
        }
    }
    }, [voivodeship]);


    const updatePoll = () => {
        const patternPostalCode = /^[0-9]{2}-[0-9]{3}$/

        setSaved(true)
        const info = {
            registered_address: {
                same: same,
                place: {
                    voivodeship: voivodeship,
                    district: district,
                    community: community,
                    city: city
                },
                street_name: street_name,
                home_number: home_number,
                apartment_number: apartment_number,
                postal_code: postal_code
            }
        }
        dispatch(actions.setInfo(info));

        const errorCheck = {
            cityError: "",
            street_nameError: "",
            home_numberError: "",
            apartment_numberError: "",
            postal_codeError: "",
        }

        if (city) {
            errorCheck.cityError = ""
        } else {
            console.log("Chujowe city")
            errorCheck.cityError = "Podanie miasta jest obowiązkowe!"
        }

        if (street_name) {
            errorCheck.street_nameError = ""
        } else {
            console.log("Chujowa ulica")
            errorCheck.street_nameError = "Podanie ulicy jest obowiązkowe!"
        }

        if (home_number) {
            errorCheck.home_numberError = ""
        } else {
            errorCheck.home_numberError = "Podanie numeru domu jest obowiązkowe!"
        }

        if (parseInt(apartment_number) > 0) {
            errorCheck.apartment_numberError = ""
        } else {
            errorCheck.apartment_numberError = "Podanie numeru lokalu jest obowiązkowe!"
        }

        if (patternPostalCode.test(postal_code)) {
            errorCheck.postal_codeError = ""
        } else {
            errorCheck.postal_codeError = "Nieprawidłowy kod pocztowy!"
        }

        setErrors(errorCheck);
        setButtonClicked(true);
    }

    const previous = () => {
        updatePoll();
        previousPage();
    }

    const next = () => {
        updatePoll();
    }

    const createDistrictOptions = (voivodeship) => {
        return (<div className="field is-narrow">
        <div className="select">
            {same? 
            (<select disabled name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                {voivodeships.filter(v => v.voivodeship === voivodeship)[0].districts.map((d, i) => (<option key={i} value={d.district}>{d.district}</option>))}
            </select>):
             (<select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
             {voivodeships.filter(v => v.voivodeship === voivodeship)[0].districts.map((d, i) => (<option key={i} value={d.district}>{d.district}</option>))}
         </select>)}
        </div>
    </div>)
    }

    useEffect(() => {
        if (district) {
            axios.get(`http://localhost:3000/data/communes/${district}`)
                .then(res => {
                    res.data.communes.sort()
                    setCommunes(res.data.communes);
                })
                .catch(err => console.log(err))
        }
    })

    useEffect(() => {
        if (buttonClicked) {
            if (Object.values(errors).every(x => x === '')) {
                nextPage()
            } else {
                setButtonClicked(false);
                alert("Nie wszystkie pola zostały wypełnione!")
            }
        }
    }, [buttonClicked])

    return (
            <div className={"box m-6 field is-centered"}>
                <fieldset disabled={poll.filled ? "disabled" : ""}>

                    <div className={"column is-centered mx-5 mt-6"}>
                        <p className={"subtitle has-text-danger-dark"}>Informacje o twoim obecnym adresie zamieszkania:</p>
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Taki sam jak adres z dzieciństwa</p>
                        </div>
                        <div className={"checkbox"}>
                            <input className={"checkbox is-primary"} type="checkbox" name='same' checked={same} onChange={() => setSame(!same)}/>
                        </div>
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakim województwie mieszkasz?</p>
                        </div>
                        {same? (
                           <div className="field is-narrow">
                           <div className="select">
                               <select disabled name='voivodeshipHousehold' value={voivodeship} onChange={(ev) => setVoivodeship(ev.target.value)}>
                               {voivodeships.map(v => v.voivodeship).map((v, i) => (<option key={i} value={v}>{v}</option>))}
                               </select>
                           </div>
                            </div>
                        ):
                        (<div className="field is-narrow">
                        <div className="select">
                            <select name='voivodeshipHousehold' value={voivodeship} onChange={(ev) => setVoivodeship(ev.target.value)}>
                            {voivodeships.map(v => v.voivodeship).map((v, i) => (<option key={i} value={v}>{v}</option>))}
                            </select>
                        </div>
                         </div>)}
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakim powiacie mieszkasz?</p>
                        </div>

                        {voivodeship === "Dolnośląskie"? 
                        (createDistrictOptions("Dolnośląskie")):null}
                        {voivodeship === "Kujawsko-pomorskie"? 
                        (createDistrictOptions("Kujawsko-pomorskie")):null}
                        {voivodeship === "Lubelskie"? 
                        (createDistrictOptions("Lubelskie")):null}
                        {voivodeship === "Lubuskie"? 
                        (createDistrictOptions("Lubuskie")):null}
                        {voivodeship === "Łódzkie"? 
                        (createDistrictOptions("Łódzkie")):null}
                         {voivodeship === "Małopolskie"? 
                        (createDistrictOptions("Małopolskie")):null}
                         {voivodeship === "Mazowieckie"? 
                        (createDistrictOptions("Mazowieckie")):null}
                         {voivodeship === "Opolskie"? 
                        (createDistrictOptions("Opolskie")):null}
                         {voivodeship === "Podkarpackie"? 
                        (createDistrictOptions("Podkarpackie")):null}
                        {voivodeship === "Podlaskie"? 
                        (createDistrictOptions("Podlaskie")):null}
                        {voivodeship === "Pomorskie"? 
                        (createDistrictOptions("Pomorskie")):null}
                        {voivodeship === "Śląskie"? 
                        (createDistrictOptions("Śląskie")):null}
                        {voivodeship === "Świętokrzyskie"? 
                        (createDistrictOptions("Świętokrzyskie")):null}
                        {voivodeship === "Warmińsko-mazurskie"? 
                        (createDistrictOptions("Warmińsko-mazurskie")):null}
                        {voivodeship === "Wielkopolskie"? 
                        (createDistrictOptions("Wielkopolskie")):null}
                        {voivodeship === "Zachodniopomorskie"? 
                        (createDistrictOptions("Zachodniopomorskie")):null}
                      
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakiej gminie mieszkasz?</p>
                        </div>
                        {same? (
                        <input disabled className={"input is-info"} type="text" name='communityHousehold' value={community} placeholder={"Gmina"}
                        onChange={(ev) => setCommunity(ev.target.value)}
                        />):
                            (
                                // <input className={"input is-info"} type="text" name='communityHousehold' value={community} placeholder={"Gmina"}
                                // onChange={(ev) => setCommunity(ev.target.value)}
                                // />
                                <div className={"control is-5"}>
                                    <div className="field-body">
                                        <div className="field is-narrow">
                                            <div className="select">
                                                <select name='communityHousehold' value={community} onChange={(ev) => setCommunity(ev.target.value)}>
                                                    {communes.map((commune, index) => {
                                                        return <option key={index} value={commune}>{commune}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakim mieście mieszkasz?</p>
                        </div>
                        {same?(<input disabled className={"input is-info"} type="text" name='cityHousehold' value={city} placeholder={"Miasto"}
                        onChange={(ev) => setCity(ev.target.value)}
                        />)
                        :
                            (
                                <div>
                                    <input className={"input is-info"} type="text" name='cityHousehold' value={city} placeholder={"Miasto"} onChange={(ev) => setCity(ev.target.value)}/>
                                    <li>
                                        <p style={{minHeight: ".5rem", color: "red"}}>{errors.cityError ? errors.cityError : ""}</p>
                                    </li>
                                </div>
                            )
                        }
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Podaj nazwę ulicy</p>
                        </div>
                        {same?
                        (<input disabled className={"input is-info"} type="text" name='streetHousehold' value={street_name} placeholder={"Ulica"}
                        onChange={(ev) => setStreet(ev.target.value)}
                        />)
                        :
                            (
                                <div>
                                    <input  className={"input is-info"} type="text" name='streetHousehold' value={street_name} placeholder={"Ulica"} onChange={(ev) => setStreet(ev.target.value)}/>
                                    <li>
                                        <p style={{minHeight: ".5rem", color: "red"}}>{errors.street_nameError ? errors.street_nameError : ""}</p>
                                    </li>
                                </div>
                            )
                        }
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Nr domu</p>
                        </div>
                        {same? (
                        <input disabled className={"input is-info"} type="text" name='homeNumberHousehold' value={home_number} placeholder={"Numer domu"}
                        onChange={(ev) => setHomeNum(ev.target.value)}
                        />)
                        :
                            (
                                <div>
                                    <input  className={"input is-info"} type="text" name='homeNumberHousehold' value={home_number} placeholder={"Numer domu"} onChange={(ev) => setHomeNum(ev.target.value)}/>
                                    <li>
                                        <p style={{minHeight: ".5rem", color: "red"}}>{errors.home_numberError ? errors.home_numberError : ""}</p>
                                    </li>
                                </div>
                            )
                        }
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Nr lokalu</p>
                        </div>
                        {same? (
                        <input disabled className={"input is-info"} type="number" name='apartmentNumberHousehold' min="0" value={apartment_number} placeholder={"Numer lokalu"}
                        onChange={(ev) => setApartment(ev.target.value)}
                        />)
                        :
                            (
                                <div>
                                    <input className={"input is-info"} type="number" name='apartmentNumberHousehold' min="0" value={apartment_number} placeholder={"Numer lokalu"} onChange={(ev) => setApartment(ev.target.value)}/>
                                    <li>
                                        <p style={{minHeight: ".5rem", color: "red"}}>{errors.apartment_numberError ? errors.apartment_numberError : ""}</p>
                                    </li>
                                </div>
                            )
                        }

                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Kod pocztowy</p>
                        </div>
                        {same?
                        (<input disabled className={"input is-info"} type="text" name="postCodeHousehold" value={postal_code} placeholder={"Kod pocztowy"}
                        onChange={(ev) => setPostalCode(ev.target.value)}
                        />)
                        :
                            (
                                <div>
                                    <input className={"input is-info"} type="text" name="postCodeHousehold" value={postal_code} placeholder={"Kod pocztowy"} onChange={(ev) => setPostalCode(ev.target.value)}/>
                                    <li>
                                        <p style={{minHeight: ".5rem", color: "red"}}>{errors.postal_codeError ? errors.postal_codeError : ""}</p>
                                    </li>
                                </div>
                            )
                        }
                    </div>
                </fieldset>

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previous} className={"button is-danger is-medium mr-4"} value="Poprzednia strona"/>
                    <input type="button" onClick={next} className={"button is-success is-medium"} value="Następna strona"/>
                </div>
            </div>
)
    }
export default connect(mapStateToProps)(RegistrationAddressForm);
