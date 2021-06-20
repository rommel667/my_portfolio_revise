import React from 'react'
import { icons } from '../../icons/icons'
import Icon from './Icon';


const Icons = ({ stacks }) => {


    return (
        <div className="flex flex-wrap items-center justify-center gap-2 w-full">
            {stacks.map(stack => {
                return (
                    <Icon key={stack} stack={stack} icons={icons} />
                )
            })}
        </div>
    )
}

export default Icons


//