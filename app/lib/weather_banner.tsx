"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect, useState} from 'react';
import { globalContext } from './g_context';
import Image from 'next/image';
import { getWeatherDescription } from './constants';

export default function WeatherBanner(props: any) {

    const {location, weather = {}} = props;
    const [wTable, setWTable] = useState<any[]>([]);

    useEffect(() => {
        if(weather && weather.ic) {
            setWTable([
                {name: 'Погода', value: getWeatherDescription(weather.ic)},
                {name: 'Температура', value: `${weather.tp}°C`},
                {name: 'Влажность', value: `${weather.hu}%`},
                {name: 'Ветер', value: `${weather.ws * 3.6} km/h`},
                {name: 'Давление', value: `${weather.pr} mbar`}
            ])
        }
    }, [weather])

  return (
    <globalContext.Consumer>
        {(context: any) => {
            const gState = context.globalState;
            console.log('WEATHER-BANNER->', weather);
            return (
                <div className={styles.bweather_container}>
                    <div className={styles.bweather_header}>
                        <div className={styles.bweather_header_left}>
                            <p className={styles.bweather_header_title_blue}>ПОГОДА</p>
                            <p className={styles.bweather_header_title}>Какая сейчас погода в районе {location.city}?</p>
                        </div>
                        {weather && <Image src={`/${weather.ic}.png`} alt={weather.ic} width={50} height={50}/>}
                    </div>
                    {wTable.map((wRow, idx) => {
                        return <div className={styles.bweather_row} key={idx}>
                            <span className={styles.bweather_row_left}>{wRow.name}</span>
                            <span className={styles.bweather_row_right}>{wRow.value}</span>
                        </div>
                    })}
                </div>
            )
        }}
    </globalContext.Consumer>
  )
}