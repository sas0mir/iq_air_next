"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect} from 'react';
import { AiOutlineUser, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import Image from 'next/image';

export default function MapBanner(props: any) {

    //const {location, weather, pollution = {}} = props;

    //just test aqi
    // const aqi = pollution ? pollution.aqicn : null;
    // const indexText = aqi >= 150 ? 'Отлично' : aqi >= 100 && aqi < 150 ? 'В Норме' : 'Вредно Для Уязвимых Групп';
    // const faceImage = aqi >= 150 ? 'ic-face-green.svg' : aqi >= 100 && aqi < 150 ? 'ic-face-yellow.svg' : 'ic-face-red.svg';

  return (
    <div className={styles.map_banner_container}>
        <p className={styles.map_banner_text_top}>карта качества воздуха</p>
        <p className={styles.map_banner_text_center}>Карта загрязнения воздуха для UNOCA в реальном времени</p>
        <p className={styles.map_banner_button}>ПОКАЗАТЬ НА КАРТЕ</p>
    </div>
  )
}