"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect} from 'react';
import { AiOutlineUser, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import Image from 'next/image';

export default function LocationReview(props: any) {

    const {location, weather, pollution = {}} = props;

    //just test aqi
    const aqi = pollution ? pollution.aqicn : null;
    const aqiText = aqi >= 150 ? 'Отлично' : aqi >= 100 && aqi < 150 ? 'В Норме' : 'Вредно Для Уязвимых Групп';
    // const faceImage = aqi >= 150 ? 'ic-face-green.svg' : aqi >= 100 && aqi < 150 ? 'ic-face-yellow.svg' : 'ic-face-red.svg';

  return (
    <div className={styles.review_container}>
        <div className={styles.review_review}>
            <p className={styles.review_title_blue}>ОБЗОР</p>
            <p className={styles.review_title}>Какое сейчас качество воздуха в районе {location.city}{location.state}{location.country}?</p>
            <table>
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
        </div>
        <div className={styles.review_recomendations}>
            <p className={styles.review_title_blue}>РЕКОМЕНДАЦИИ ПО ОХРАНЕ ЗДОРОВЬЯ</p>
            <p className={styles.review_title}>Какое сейчас качество воздуха в районе{location.city}{location.state}{location.country}?</p>
        </div>
    </div>
  )
}