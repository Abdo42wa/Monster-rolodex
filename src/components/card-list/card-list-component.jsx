import React from 'react'
import './card-list.styles.css'

import {Card} from '../card/card.component'


export const CardList = props => (
        // props.childe is any thing thst will be in side the comonent tag 
   
        <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
</div> 
);
