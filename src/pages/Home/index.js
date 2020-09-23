import React, { Fragment } from 'react'
import { Title } from '../../components/Title'
import { Ranking } from './components/Ranking'
import { FramePage } from '../FramePage'
import { Experiences } from './components/Experiences'

export const HomePage = () => (
    <FramePage className="page">
        <Title label="Top 5" />
        <Ranking/>
        <Title label="Global Housing"/>
        <Experiences/>
    </FramePage>
)
