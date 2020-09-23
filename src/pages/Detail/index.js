import React, {useEffect, useState} from 'react'
import {Title}  from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from './components/Button'
import { FramePage } from '../FramePage'
import { useParams} from 'react-router-dom'
import {requestHttp} from './../../config/HttpRequest'

const  buttonStyle = {
    backgroundColor: '#FC642D',
    borderColor: '#fe530c'
}

export const DetailPage = () => {

    const { id } = useParams()
    const [experiences, setExperiences]= useState([])

    useEffect( ()=>{
        // Http request
        console.log('get', '/Experiences/:id')
        getExperience()
    }, []) // constructor cuando inicie la clase

    const getExperience = async () => {
        try{
            const response = await requestHttp('get', `/experiences/detail/${id}`)
            console.log(response.experience)
            setExperiences(response.experience)
        }catch(error){
            console.error(error)
        }
    }

    return (
    <FramePage className="page">
        <Title label={experiences.title}/>
        <CardDetail key={experiences.id} {...experiences} />
        <Button isLink={true} linkTo={`/booking/${id}`} style={ buttonStyle } label="¡Reserva Ahora!"/>
    </FramePage>  ) 
}

// <CardDetail key={experiences.id} id={experiences.id} image={experiences.image} description={experiences.description} place={experiences.place} />
        