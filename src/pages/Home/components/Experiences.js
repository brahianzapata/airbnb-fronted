import React, {useEffect, useState} from 'react';
import { Housing } from './Housing'
import {requestHttp} from './../../../config/HttpRequest'

const posts = [
    {
        id:1,
        image: 'https://a0.muscache.com/im/pictures/f3f1ac58-66b0-4d52-b754-a3b112431e52.jpg',
        description: 'Casa de descando',
        place: 'Santa Elena',
        score: 2,
        users: 235
    },
    {
        id:2,
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/08/3a/bd/fe.jpg',
        description: 'Parapente',
        place: 'Chicamocha',
        score: 1,
        users: 25
    },
    {
        id:3,
        image: 'https://i2.wp.com/parquestematicos.com/wp-content/uploads/2020/01/disneylandpark2020.jpeg',
        description: 'Disney Fotos',
        place: 'Cali',
        score: 2,
        users: 235
    },
    {
        id:4,
        image: 'https://miro.medium.com/max/2560/1*_bfBYAoHLR3WsLWhLenw0A.jpeg',
        description: 'Glamping',
        place: 'Retiro',
        score: 5,
        users: 239
    },
    {
        id:5,
        image: 'https://img.freepik.com/foto-gratis/hermosa-playa-tropical-mar-palmera-coco-isla-paradisiaca_74190-2206.jpg',
        description: 'Vacaciones en plata',
        place: 'Capuganá',
        score: 3,
        users: 135
    }
]

export const Experiences = () => {

    const [experiences, setExperiences]= useState([])

    useEffect( ()=>{
        // Http request
        console.log('get', '/Experiences')
        getAllExperiences()
    }, []) // constructor cuando inicie la clase

    const getAllExperiences = async () => {
        try{
            const response = await requestHttp('get', '/experiences')
            console.log(response.experiences)
            setExperiences(response.experiences)
        }catch(error){
            console.error(error)
        }
    }

    return(  
    <section className="Experiences">
        {
            experiences.map( el => <Housing key={el._id} {...el} />)
        }
    </section>  
)}