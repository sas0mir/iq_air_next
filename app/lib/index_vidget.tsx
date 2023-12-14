"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect} from 'react';
import { globalContext } from './g_context';
import Image from 'next/image';

export default function IndexVidget(props: any) {

    const {location, weather, pollution = {}} = props;

    const pollutionExample = {
        "ts": "2017-02-01T01:15:00.000Z",
        "aqius": 18,
        "mainus": "p1", //main pollutant for US AQI
        "aqicn": 20,
        "maincn": "p1",  //main pollutant for Chinese AQI
        "p1": {   //pollutant details, concentration and appropriate AQIs
          "conc": 20,
          "aqius": 18,
          "aqicn": 20
        }
    }

    //just test aqi
    const aqi = pollution ? pollution.aqius : null;
    const indexText = aqi >= 100 ? 'Вредно Для Уязвимых Групп' : aqi >= 50 && aqi < 100 ? 'В Норме' : 'Хорошо';
    const faceImage = aqi >= 100 ? 'ic-face-red.svg' : aqi >= 50 && aqi < 100 ? 'ic-face-yellow.svg' : 'ic-face-green.svg';

  return (
    <globalContext.Consumer>
        {(context: any) => {
            return (
                <div className={aqi >= 100 ? styles.aqi_container_red : aqi >= 50 && aqi < 100 ? styles.aqi_container_yellow : styles.aqi_container_green}>
                    <div className={styles.aqi_content_left}>
                        <div className={aqi >= 100 ? styles.aqi_index_box_red : aqi >= 50 && aqi < 100 ? styles.aqi_index_box_yellow :styles.aqi_index_box_green}>
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