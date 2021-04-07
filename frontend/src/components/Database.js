import {React, useState} from 'react';
import CreateInput from './CreateInput'
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";
import PollInputs from './PollInputs';


const mapStateToProps = state => ({
    user: state.user.user
})

const data = [
    ['pesel', 'Pesel'], 
    ['imie', 'Imię'],
    ['nazwisko', 'Nazwisko']
]

const Database = ({user, dispatch}) => {
    const [find, setFind] = useState(false)

    const sendFind = (event) => {
        const userTmp = {
            name: event.target.imie.value,
            surname: event.target.nazwisko.value,
            pesel: event.target.pesel.value
        }
        dispatch(actions.findUser(userTmp))
        setFind(true)
        event.preventDefault()
    }

    const sendUpdate = (event) => {
        const {
            name,
            nationality,
            disability,
            date,
            sex,
            confession,
            surname,
            marital,
            education,
            children,
            livingWithParents,
            partner,
            cityHousehold,
            streetHousehold,
            homeNumberHousehold,
            apartmentNumberHousehold,
            postCodeHousehold,
            city,
            street,
            homeNumber,
            apartmentNumber,
            postCode,
            type,
            nameWorkplace,
            cityWorkplace,
            streetWorkplace,
            homeNumberWorkplace,
            apartmentNumberWorkplace,
            postCodeWorkplace,
        } = event.target
    
        const readyInfo = {
            type: "",
            name: name.value,
            nationality: nationality.value,
            disability: disability.checked,
            date_of_birth: date.value,
            sex: sex.value,
            confession: confession.value,
            surname: surname.value,
            marital_status: marital.value,
            education: education.value,
            household: {
                children: children.value === "Tak" ? true : false,
                living_with_parents: livingWithParents.value === "Tak" ? true : false,
                partner: partner.value === "Tak" ? true : false
            },
            address: {
                city: cityHousehold.value,
                street_name: streetHousehold.value,
                home_number: homeNumberHousehold.value,
                apartment_number: apartmentNumberHousehold.value,
                postal_code: postCodeHousehold.value
            },
            registered_address: {
                city: city.value,
                street_name: street.value,
                home_number: homeNumber.value,
                apartment_number: apartmentNumber.value,
                postal_code: postCode.value
            },
            workplace: {
                type: type.value,
                name: nameWorkplace.value,
                address: {
                    city: cityWorkplace.value,
                    street_name: streetWorkplace.value,
                    home_number: homeNumberWorkplace.value,
                    apartment_number: apartmentNumberWorkplace.value,
                    postal_code: postCodeWorkplace.value
                }
            },
            complition_date: user.complition_date,
            last_modified_date: new Date(),
        }
        dispatch(actions.updateUser(readyInfo))
        setFind(false)
    }
    
    return (
        <div>
            {!find ? (
                <form onSubmit={sendFind}>
                    <h1>Wprowadż dane szukanego użytkownika:</h1>
                    {data.map(item => (
                        <CreateInput key={item[0]} info = {item} />
                    ))}
                    <button type="submit">Zatwierdź</button>
                </form>
            )
            :
            (
                <div>
                    <PollInputs user={user} sendInfo={sendUpdate} />
                </div>
            )}
        </div>
    )
}

export default connect(mapStateToProps)(Database);
