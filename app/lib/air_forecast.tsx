"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect} from 'react';
import { globalContext } from './g_context';
import Image from 'next/image';

//прогноз
export default function AirForecast(props: any) {

    const {location, forecasts} = props;

    const table_head = [
        'День',
        'Уровень загрязнения',
        'Погода',
        'Температура',
        'Ветер'
    ]

    const forecastLevel = (fcast: any) => {
        const image_src = ''
        return (
            <div className={styles.fcast_container}>
                <p className={styles.fcast_left_text}></p>
                <div className={styles.fcast_right}>
                    <p className={styles.fcast_right_text}></p>
                    <Image src={image_src} alt={fcast.aqius} width={50} height={50}/>
                </div>
            </div>
        )
    }

    const forecast_example = {
        "ts": "2017-02-01T03:00:00.000Z",  //timestamp
        "aqius": 21, //AQI value based on US EPA standard
        "aqicn": 7, //AQI value based on China MEP standard
        "tp": 8, //temperature in Celsius
        "tp_min": 6, //minimum temperature in Celsius
        "pr": 976,  //atmospheric pressure in hPa
        "hu": 100, //humidity %
        "ws": 3, //wind speed (m/s)
        "wd": 313, //wind direction, as an angle of 360° (N=0, E=90, S=180, W=270)
        "ic": "10n" //weather icon code, see below for icon index
      }

  return (
    <globalContext.Consumer>
        {(context: any) => {
            return (
                <div className={styles.forecast_container}>
                    <p className={styles.forecast_title_blue}>ПРОГНОЗ</p>
                    <p className={styles.forecast_title}>Прогноз качества воздуха (AQI) в районе {location.city}{location.state}{location.country}?</p>
                    <table className={styles.forecast_table}>
                        <tr>
                            {table_head.map((el, idx) => {
                                return <th key={idx}>{el}</th>
                            })}
                        </tr>
                        {forecasts && forecasts.length ? forecasts.map((fcast: any, idx: number) => {
                            return <tr key={idx}>
                                <td>{moment(forecasts.ts).format('dddd DD:MM')}</td>
                                <td>{forecastLevel(fcast)}</td>
                                <td><Image src={`/${fcast.ic}.png`} alt={fcast.ic} width={50} height={50}/></td>
                                <td>{`${fcast.tp}° ${fcast.tp_min}°`}</td>
                            </tr>
                        }) : null}
                    </table>
                </div>
            )
        }}
    </globalContext.Consumer>
  )
}