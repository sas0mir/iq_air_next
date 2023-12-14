"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect} from 'react';
import { globalContext } from './g_context';
import Image from 'next/image';
import { TestForecasts } from './constants';

//прогноз
export default function AirForecast(props: any) {

    const {location, forecasts = TestForecasts} = props;

    const table_head = [
        'День',
        'Уровень загрязнения',
        'Погода',
        'Температура',
        'Ветер'
    ]

    const forecastLevel = (fcast: any) => {
        const aqi = fcast ? fcast.aqius : null;
        const aqiText = aqi >= 100 ? 'Вредно Для Уязвимых Групп' : aqi >= 50 && aqi < 100 ? 'В Норме' : 'Хорошо';
        const faceImage = aqi >= 100 ? 'ic-face-red.svg' : aqi >= 50 && aqi < 100 ? 'ic-face-yellow.svg' : 'ic-face-green.svg';
        const image_src = ''
        return (
            <div className={styles.fcast_container} style={{backgroundColor: aqi >= 100 ? '#d9574e' : aqi >= 50 && aqi < 100 ? '#d1cb52' : '#5dc962'}}>
                <p className={styles.fcast_left_text}>{aqiText}</p>
                <div className={styles.fcast_right}>
                    <p className={styles.fcast_right_text}>{`${aqi} ИКВ США`}</p>
                    <Image src={`/${faceImage}`} alt={'face_image'} width={30} height={30}/>
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

    const units_example = {
        "p2": "ugm3", //pm2.5
        "p1": "ugm3", //pm10
        "o3": "ppb", //Ozone O3
        "n2": "ppb", //Nitrogen dioxide NO2 
        "s2": "ppb", //Sulfur dioxide SO2 
        "co": "ppm" //Carbon monoxide CO 
    }

  return (
    <globalContext.Consumer>
        {(context: any) => {
            return (
                <div className={styles.forecast_container}>
                    <p className={styles.forecast_title_blue}>ПРОГНОЗ</p>
                    <p className={styles.forecast_title}>Прогноз качества воздуха (AQI) в районе {location.city} {location.state} {location.country}? (данные тестовые, апи без forecasts)</p>
                    <table className={styles.forecast_table}>
                        <tr className={styles.forecast_table_head}>
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
                                <td>
                                    <Image src={`/ic-wind-direction-solid.svg`} style={{transform: `rotate(${fcast.wd}deg)`}} alt={fcast.wd} width={20} height={20}/>
                                    {fcast.ws * 3.6} km/h
                                </td>
                            </tr>
                        }) : null}
                    </table>
                    <p className={styles.forecast_text_bottom}>Хотите получать прогноз каждый час? <a href='/'>Загрузить приложение</a></p>
                </div>
            )
        }}
    </globalContext.Consumer>
  )
}