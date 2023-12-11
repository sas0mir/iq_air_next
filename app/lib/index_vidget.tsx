"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect} from 'react';
import { globalContext } from './g_context';
import Image from 'next/image';

export default function IndexVidget(props: any) {

    const {location, weather, pollution = {}} = props;

    useEffect(() => {
        if(location) {
            console.log('LOCA->', location, weather, pollution);
        }
    }, [location])

    //just test aqi
    const aqi = pollution ? pollution.aqicn : null;
    const indexText = aqi >= 150 ? 'Отлично' : aqi >= 100 && aqi < 150 ? 'В Норме' : 'Вредно Для Уязвимых Групп';
    const faceImage = aqi >= 150 ? 'ic-face-green.svg' : aqi >= 100 && aqi < 150 ? 'ic-face-yellow.svg' : 'ic-face-red.svg';

  return (
    <globalContext.Consumer>
        {(context: any) => {
            return (
                <div className={aqi >= 150 ? styles.aqi_container_green : aqi >= 100 && aqi < 150 ? styles.aqi_container_yellow : styles.aqi_container_red}>
                    <div className={styles.aqi_content_left}>
                        <div className={aqi >= 150 ? styles.aqi_index_box_green : aqi >= 100 && aqi < 150 ? styles.aqi_index_box_yellow :styles.aqi_index_box_red}>
                            <p className={styles.aqi_index_box_top_text}>AQI {location.country}</p>
                            <p className={styles.aqi_index_box_bottom_text}>{`${aqi}`}</p>
                        </div>
                        <div className={styles.aqi_index_center}>
                            <p className={styles.aqi_index_center_top_text}>ИНДЕКС AQI В РЕАЛЬНОМ ВРЕМЕНИ</p>
                            <p className={styles.aqi_index_center_bottom_text}>{indexText}</p>
                        </div>
                    </div>
                    <div className={styles.aqi_content_right}>
                        <Image src={`/${faceImage}`} alt="face Image" width={100} height={100}/>
                    </div>
                </div>
            )
        }}
    </globalContext.Consumer>
  )
}