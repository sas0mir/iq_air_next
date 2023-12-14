"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect} from 'react';
import { globalContext } from './g_context';
import Image from 'next/image';
import { recomendations } from './constants';

export default function LocationReview(props: any) {

    const {location, weather, pollution = {}} = props;

    //just test aqi
    const aqi = pollution ? pollution.aqius : null;
    const aqiText = aqi >= 100 ? 'Вредно Для Уязвимых Групп' : aqi >= 50 && aqi < 100 ? 'В Норме' : 'Отлично';
    const review_recomendations = aqi >= 100 ? recomendations.bad : aqi >= 50 && aqi < 100 ? recomendations.normal : recomendations.good;
    const dirtMaterial = pollution ? pollution.mainus : null;

    const units_example = {
        "p2": "ugm3", //pm2.5
        "p1": "ugm3", //pm10
        "o3": "ppb", //Ozone O3
        "n2": "ppb", //Nitrogen dioxide NO2 
        "s2": "ppb", //Sulfur dioxide SO2 
        "co": "ppm" //Carbon monoxide CO 
    }

    const concentrationLineStyle = aqi >= 100 ? styles.review_concentration_line_red : aqi >= 50 && aqi < 100 ? styles.review_concentration_line_yellow : styles.review_concentration_line_green;
    const concentrationLinePercentStyle = aqi >= 100 ? styles.review_concentration_line_percent_red : aqi >= 50 && aqi < 100 ? styles.review_concentration_line_percent_yellow : styles.review_concentration_line_percent_green;

    //todo line percent width
    const percentConcentration = aqi < 100 ? aqi : aqi / 3;

  return (
    <globalContext.Consumer>
        {(context: any) => {
            const gState = context.globalState;
            console.log('LOCATION-REVIEW-POLLUTION->', pollution, 'LOCATION-REVIEW-CONTEXT->', gState);
            return (
                <div className={styles.review_container}>
                    <div className={styles.review_review}>
                        <p className={styles.review_title_blue}>ОБЗОР</p>
                        <p className={styles.review_title}>Какое сейчас качество воздуха в районе {location.city} {location.state} {location.country}?</p>
                        <table className={styles.review_table}>
                            <tr>
                                <th>Уровень загрязнения атмосферы</th>
                                <th>Индекс качества воздуха</th>
                                <th>Главный загрязнитель</th>
                            </tr>
                            <tr>
                                <td>{aqiText}</td>
                                <td>{aqi}</td>
                                <td>PM2.5</td>
                            </tr>
                        </table>
                        <div className={styles.review_concentration}>
                            <div className={styles.review_concentration_column}>
                                <p className={styles.review_concentration_text_top}>Загрязнители</p>
                                <p className={styles.review_concentration_text_bottom}>{dirtMaterial === 'p2' ? 'PM2.5' : 'pm10'}</p>
                            </div>
                            <div className={concentrationLineStyle}>
                                <div className={concentrationLinePercentStyle} style={{width: `${percentConcentration}%`}}></div>
                            </div>
                            <div className={styles.review_concentration_column}>
                                <p className={styles.review_concentration_text_top}>Концентрация</p>
                                <p className={styles.review_concentration_text_bottom}><span className={styles.text_regular}>{aqi}</span> µg/m³</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.review_recomendations}>
                        <p className={styles.review_title_blue}>РЕКОМЕНДАЦИИ ПО ОХРАНЕ ЗДОРОВЬЯ</p>
                        <p className={styles.review_title}>Какое сейчас качество воздуха в районе{location.city}{location.state}{location.country}?</p>
                        <div className={styles.review_recomendations_table}>
                            {review_recomendations.map((rec, idx) => {
                                return <div key={rec.text} className={styles.review_recomendations_item}>
                                    <Image src={`/recomendations/${rec.image}`} alt={rec.image} className={styles.review_recomendations_item_image} width={70} height={70}/>
                                    <p className={styles.review_recomendations_item_text}>{rec.text}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            )
        }}
    </globalContext.Consumer>
  )
}