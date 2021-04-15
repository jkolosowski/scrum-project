import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const mapStateToProps = state => ({
    profile: state.profile.profile,
    poll: state.poll.poll
});


const WorkplaceForm = ({user, previousPage, profile, poll, dispatch, deleteUser}) => {

    const [type, setType] = useState(poll.workplace.type);
    const [name, setName] = useState(poll.workplace.name);
    const [jobTitle, setJobTitle] = useState(poll.workplace.job_title);
    const [contract, setContract] = useState(poll.workplace.contract);
    const [brutto, setBrutto] = useState(poll.workplace.brutto);
    const [netto, setNetto] = useState(poll.workplace.netto);
    

    const [voivodeship, setVoivodeship] = useState(poll.workplace.address.place.voivodeship);
    const [district, setDistrict] = useState(poll.workplace.address.place.district);
    const [community, setCommunity] = useState(poll.workplace.address.place.community);
    const [city, setCity] = useState(poll.workplace.address.place.city);

    const [street_name, setStreet] = useState(poll.workplace.address.street_name);
    const [home_number, setHomeNum] = useState(poll.workplace.address.home_number);
    const [apartment_number, setApartment] = useState(poll.workplace.address.apartment_number);
    const [postal_code, setPostalCode] = useState(poll.workplace.address.postal_code);


    useEffect(() => {
        console.log(poll);
    }, [poll]);

    const updatePoll = () => {
        const info = {
            workplace: {
                type: type,
                name: name,
                contract: contract,
                job_title: jobTitle,
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
                },
                monthly_earnings: {
                    brutto: brutto,
                    netto: netto
                }
            }
        }
        dispatch(actions.setInfo(info));
    }


    return (

            <div className={"field is-centered"}>

                <div className={"column is-centered mx-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twojej pracy:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakiej branży pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='type'  value={type} placeholder={"Branża"}
                    onChange={(ev) => setType(ev.target.value)}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Na jakim stanowisku pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='job_title' value={jobTitle} placeholder={"Stanowisko"}
                    onChange={(ev) => setJobTitle(ev.target.value)}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę firmy w której pracujesz</p>
                    </div>
                    <input className={"input is-info"} type="text" name='nameWorkplace' value={name} placeholder={"Nazwa firmy"}
                    onChange={(ev) => setName(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Dane firmy:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim województwie pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='voivodeshipWorkplace' value={voivodeship} placeholder={"Województwo"}
                    onChange={(ev) => setVoivodeship(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim powiacie pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='districtWorkplace' value={district} placeholder={"Powiat"}
                    onChange={(ev) => setDistrict(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakiej gminie pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='communityWorkplace' value={community} placeholder={"Gmina"}
                    onChange={(ev) => setCommunity(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim mieście pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='cityWorkplace' value={city} placeholder={"Miasto"}
                    onChange={(ev) => setCity(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę ulicy</p>
                    </div>
                    <input className={"input is-info"} type="text" name='streetWorkplace' value={street_name} placeholder={"Ulica"}
                    onChange={(ev) => setStreet(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr budynku</p>
                    </div>
                    <input className={"input is-info"} type="number" name='homeNumberWorkplace' min="0" value={home_number} placeholder={"Numer budynku"}
                    onChange={(ev) => setHomeNum(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr lokalu</p>
                    </div>
                    <input className={"input is-info"} type="number" name='apartmentNumberWorkplace' min="0" value={apartment_number} placeholder={"Numer lokalu"}
                    onChange={(ev) => setApartment(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy</p>
                    </div>
                    <input className={"input is-info"} type="text" name="postCodeWorkplace" value={postal_code} placeholder={"Kod pocztowy"}
                    onChange={(ev) => setPostalCode(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Jaki jest twój rodzaj umowy?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='contract' value={user.workplace.contract} onChange={(ev) => setContract(ev.target.value)}>
                                        <option value='B2B'>B2B</option>
                                        <option value='employment_contract'>Umowa o pracę</option>
                                        <option value='contract_of_mandate'>Umowa zlecenie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Jakie jest twoje wynagrodzenie?</p>
                    </div>
                    <input className={"input is-info"} type="text" name="brutto" value={user.workplace.monthly_earnings.brutto} placeholder={"Brutto"} onChange={(ev) => setBrutto(ev.target.value)}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <input className={"input is-info"} type="text" name="netto" value={user.workplace.monthly_earnings.netto} placeholder={"Netto"} onChange={(ev) => setNetto(ev.target.value)}/>
                </div>

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previousPage} className={"button is-success is-medium"} value="Poprzednia strona"/>
                </div>

                {/* <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <button className={"button is-success is-medium"} type='submit'>Wyślij ankietę</button>
                </div> */}

                {profile.admin_id ? <div className={"column is-centered mx-5 is-5 mb-6"}>
                    <input className={"button is-danger is-medium"} type="button" value="Usuń ankietę" onClick={deleteUser} />
                </div> : null }

            </div>)
}

export default connect(mapStateToProps)(WorkplaceForm);
