"use client"
import styles from '../globals.module.css'
import { useState } from 'react';

export default function Select(options: any) {

    const {name, value} = options;
    const [selected, setSelected] = useState([]);

    const handleClick = (selected: any) => {
        
    }

  return (
    <select value={selected} multiple>
        {options.map((option: any, index: number) => {
            const name = option.name || option.country;
            return <option key={option.name} value={option.value}>{name}</option>
        })}
    </select>
  )
}