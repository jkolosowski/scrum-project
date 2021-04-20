import {React, useState, useEffect, Children} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const mapStateToProps = state => ({
    profile: state.profile.profile,
    user: state.user.user
});

const ChildFormAdmin = ({profile, user, passChild, index}) => {


    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [pesel, setPesel] = useState("");


    const [children, setChildren] = useState(user.household.children.children);  // set children when next page 

    const [saved, setSaved] = useState(user.household.saved);

    useEffect (() => {
        if(saved) {
            const found = children.filter((child, i) => i === index)[0];
            setName(found.name);
            setSurname(found.surname);
            setPesel(found.pesel)
        }
    }, [saved])


    const child = {
        index: index,
        name: name,
        surname: surname,
        pesel: pesel,
    }

    // if anything has changed

    useEffect (() => { 
        passChild(child);
    }, [name, surname, pesel ])


    useEffect (() => { 
    }, [user])

    return( <div className={"box m-6 field is-centered"}>
        <div>
            <p className="label">Dziecko {index+1}</p>
        </div>

    <div className={"column is-centered mx-5 is-5"}>
        <div>
            <p className="label">Imię: </p>
        </div>
        <input className={"input is-info"} type="text" name="name" value={name} onChange={(ev) => setName(ev.target.value)} placeholder={"Imie"} />
    </div>

    <div className={"column is-centered mx-5 is-5"}>
        <div>
            <p className="label">Nazwisko:</p>
        </div>
        <input className={"input is-info"} type="text" name="surname" value={surname} onChange={(ev) => setSurname(ev.target.value)} placeholder={"Nazwisko"} />
    </div>

    <div className={"column is-centered mx-5 is-5"}>
        <div>
            <p className={"label"}>PESEL:</p>
        </div>
        <input className={"input is-info"} type="text" name="pesel" value={pesel} onChange={(ev) => setPesel(ev.target.value)} placeholder={"PESEL"}/>
    </div>
    </div>

    )

}

export default connect(mapStateToProps)(ChildFormAdmin);