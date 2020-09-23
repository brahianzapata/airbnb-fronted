import React,{useEffect, useState} from 'react'
import { Button } from '../Detail/components/Button'
import { FramePage } from '../FramePage'
import { useParams}  from 'react-router-dom'
import {requestHttp} from './../../config/HttpRequest'

export const BookingPage = (props) => {

    const {id} = useParams()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [dateIngreso, setDateIngreso] = useState('')
    const [dateSalida, setDateSalida] = useState('')


    const [isValidForm, setIsValidForm] = useState(false)

    const bookinHandler = (e) =>{
        e.preventDefault()
        requestBooking()
    }

    const requestBooking = () =>{
        const body = {
            "idExperience": id,
            "nombre": name, 
            "correo": email, 
            "fechaIngreso": dateIngreso , 
            "fechaSalida": dateSalida, 
            "telefono": phone
        }
        console.log('body', body)
        postBooking(body)
    }

    const postBooking = async (body) => {
        try{
            const response = await requestHttp('post', `/booking/reserva`, body)
            console.log(response)
        }catch(error){
            console.error(error)
        }
    }    

    useEffect( () =>{
        setIsValidForm(name !== '' && phone !== '' && email !== ''  && dateIngreso !== '' & dateSalida !== '')
    }, [name, phone, email, dateIngreso, dateSalida])


    return(
    <FramePage>
        <form onSubmit={bookinHandler} className="booking-form">
            <div>
                <label>Nombre:</label>
                <input value={name} onChange={e => setName(e.target.value)} type="text"/>
            </div>
            <div>
                <label>Telefono:</label>
                <input value={phone} onChange={e => setPhone(e.target.value)} type="phone"/>
            </div>
            <div>
                <label>correo:</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>
            </div>
            <div>
                <label>Fecha Ingreso:</label>
                <input value={dateIngreso} onChange={e => setDateIngreso(e.target.value)} type="date"/>
            </div>
            <div>
                <label>Fecha Salida:</label>
                <input value={dateSalida} onChange={e => setDateSalida(e.target.value)} type="date"/>
            </div>
            <Button disabled={! isValidForm} type="submit" label="Reservar ahora"/>
        </form>
    </FramePage>
)}
