import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const mapStateToProps = state => ({
    poll: state.poll.poll,
    voivodeships: state.voivodeships.voivodeships
});

const AddressForm = ({previousPage, nextPage, dispatch, voivodeships, poll}) => {

    const [voivodeship, setVoivodeship] = useState(poll.address.place.voivodeship);
    const [district, setDistrict] = useState(poll.address.place.district);
    const [community, setCommunity] = useState(poll.address.place.community);
    const [city, setCity] = useState(poll.address.place.city);
    const [street_name, setStreet] = useState(poll.address.street_name);
    const [home_number, setHomeNum] = useState(poll.address.home_number);
    const [apartment_number, setApartment] = useState(poll.address.apartment_number);
    const [postal_code, setPostalCode] = useState(poll.address.postal_code);

    useEffect(() => {
        // console.log(poll);
        voivodeships.map(v => console.log(v.voivodeship));
    }, [poll]);

    const updatePoll = () => {
        const info = {
            address: {
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
        
    }

    const previous = () => {
        updatePoll();
        previousPage();
    }

    const next = () => {
        updatePoll();
        nextPage();
    }

    return(
            <div className={"box m-6 field is-centered"}>
                <fieldset disabled={poll.filled ? "disabled" : ""}>

                    <div className={"column is-centered mx-5 mt-6"}>
                        <p className={"subtitle has-text-danger-dark"}>Informacje o twoim adresie zamieszkania w dzieciństwie:</p>
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakim województwie mieszkałeś/aś?</p>
                        </div>
           
                        <div className="field is-narrow">
                            <div className="select">
                                <select name='voivodeshipHousehold' value={voivodeship} onChange={(ev) => setVoivodeship(ev.target.value)}>
                                    {voivodeships.map(v => v.voivodeship).map(v => (<option value={v}>{v}</option>))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakim powiacie mieszkałeś/aś?</p>
                        </div>

                        {voivodeship === "Dolnośląskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Dolnośląskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Kujawsko-pomorskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Kujawsko-pomorskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Lubelskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Lubelskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Lubuskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Lubuskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Łódzkie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Łódzkie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Małopolskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Małopolskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Mazowieckie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Mazowieckie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Opolskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Mazowieckie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Podkarpackie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Podkarpackie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Podlaskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Podlaskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Pomorskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Pomorskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Śląskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Śląskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Świętokrzyskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Świętokrzyskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Warmińsko-mazurskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Warmińsko-mazurskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Wielkopolskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Wielkopolskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                        {voivodeship === "Zachodniopomorskie"? 
                        (<div className="field is-narrow">
                            <div className="select">
                                <select name='districtHousehold' value={district} onChange={(ev) => setDistrict(ev.target.value)}>
                                    {voivodeships.filter(v => v.voivodeship === "Zachodniopomorskie")[0].districts.map(d => (<option value={d.district}>{d.district}</option>))}
                                </select>
                            </div>
                        </div>):null}
                    
                        
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakiej gminie mieszkałeś/aś?</p>
                        </div>
                        <input className={"input is-info"} type="text" name='communityHousehold' value={community} placeholder={"Gmina"}
                        onChange={(ev) => setCommunity(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakim mieście mieszkałeś/aś?</p>
                        </div>
                        <input className={"input is-info"} type="text" name='cityHousehold' value={city} placeholder={"Miasto"}
                        onChange={(ev) => setCity(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Podaj nazwę ulicy:</p>
                        </div>
                        <input  className={"input is-info"} type="text" name='streetHousehold' value={street_name} placeholder={"Ulica"}
                        onChange={(ev) => setStreet(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Nr domu</p>
                        </div>
                        <input  className={"input is-info"} type="text" name='homeNumberHousehold' value={home_number} placeholder={"Numer domu"}
                        onChange={(ev) => setHomeNum(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Nr lokalu</p>
                        </div>
                        <input className={"input is-info"} type="number" name='apartmentNumberHousehold' min="0" value={apartment_number} placeholder={"Numer lokalu"}
                        onChange={(ev) => setApartment(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Kod pocztowy</p>
                        </div>
                        <input className={"input is-info"} type="text" name="postCodeHousehold" value={postal_code} placeholder={"Kod pocztowy"}
                        onChange={(ev) => setPostalCode(ev.target.value)}
                        />
                    </div>
                </fieldset>

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previous} className={"button is-danger is-medium mr-4"} value="Poprzednia strona"/>
                    <input type="button" onClick={next} className={"button is-success is-medium"} value="Następna strona"/>
                </div>
            </div>
)
    }
export default connect(mapStateToProps)(AddressForm);
