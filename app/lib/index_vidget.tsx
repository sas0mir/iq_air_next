"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect} from 'react';
import { AiOutlineUser, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

export default function IndexVidget(props: any) {

    const {location, weather, pollution} = props;

    useEffect(() => {
        if(location) {
            console.log('LOCA->', location, weather, pollution);
        }
    }, [location])

    const indexText = pollution.aqicn > 150 || pollution.aqius > 150 ? 'Отлично' :  'Вредно Для Уязвимых Групп';
    const 

  return (
    <div className={styles.aqi_container}>
        <div className={styles.aqi_content_left}>
            <div className={styles.aqi_index_box}>
                <p className={styles.aqi_index_box_top_text}>AQI {location.country}</p>
                <p className={styles.aqi_index_box_bottom_text}>{`${pollution.aqicn} ${pollution.aqius}`}</p>
            </div>
            <div className={styles.aqi_index_center}>
                <p className={styles.aqi_index_center_top_text}>ИНДЕКС AQI В РЕАЛЬНОМ ВРЕМЕНИ</p>
                <p className={styles.aqi_index_center_bottom_text}>{indexText}</p>
            </div>
        </div>
        <div className={styles.aqi_content_right}></div>
    </div>
  )
}