"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect} from 'react';
import { globalContext } from './g_context';
import Image from 'next/image';

export default function LocationReview(props: any) {

    const {location, weather, pollution = {}} = props;

    //just test aqi
    const aqi = pollution ? pollution.aqicn : null;
    const aqiText = aqi >= 150 ? 'Отлично' : aqi >= 100 && aqi < 150 ? 'В Норме' : 'Вредно Для Уязвимых Групп';
    // const faceImage = aqi >= 150 ? 'ic-face-green.svg' : aqi >= 100 && aqi < 150 ? 'ic-face-yellow.svg' : 'ic-face-red.svg';
    const testRecomendations = [
        {image: '', text: 'Избегайте нагрузок на улице'},
        {image: '', text: 'Закройте окна, чтобы избежать загрязнения наружным воздухом'},
        {image: '', text: 'Носите маску на улице'},
        {image: '', text: 'Включите очиститель воздуха'}
    ]

  return (
    <globalContext.Consumer>
        {(context: any) => {
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
                                <p className={styles.review_concentration_text_bottom}>PM2.5</p>
                            </div>
                            <div className={styles.review_concentration_line}>
                                <div className={styles.review_concentration_line_percent}></div>
                            </div>
                            <div className={styles.review_concentration_column}>
                                <p className={styles.review_concentration_text_top}>Концентрация</p>
                                <p className={styles.review_concentration_text_bottom}>91.6µg/m³</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.review_recomendations}>
                        <p className={styles.review_title_blue}>РЕКОМЕНДАЦИИ ПО ОХРАНЕ ЗДОРОВЬЯ</p>
                        <p className={styles.review_title}>Какое сейчас качество воздуха в районе{location.city}{location.state}{location.country}?</p>
                        <div className={styles.review_recomendations_table}>
                            {testRecomendations.map((rec, idx) => {
                                return <div key={rec.text} className={styles.review_recomendations_item}>
                                    <Image src={`/${rec.image}`} alt={rec.image} className={styles.review_recomendations_item_image} width={70} height={70}/>
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