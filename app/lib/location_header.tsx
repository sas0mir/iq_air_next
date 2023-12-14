"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect} from 'react';
import { AiOutlineUser, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { globalContext } from './g_context';
import Image from 'next/image';

export default function LocationHeader(props: any) {

    const {location, weather, pollution} = props;

    useEffect(() => {
        if(location) {
            console.log('LOCA->', location, weather);
        }
    }, [location])

    const subscribe = () => {
        alert('Subscribed!')
    }

    const share = () => {
        alert('Share')
    }

  return (
    <globalContext.Consumer>
        {(context: any) => {
            return (
                <div className={styles.home_content_column}>
                    <h2 className={styles.home_content_title}>Качество воздуха в {location ? `${location.country} ${location.state} ${location.city}`: 'мире'}</h2>
                    <h3 className={styles.home_content_subtitle}>Индекс качества воздуха (AQI) и загрязнение атмосферы PM2.5 в {location ? `${location.country} ${location.state} ${location.city}`: 'мире'}</h3>
                    {weather ? <div className={styles.home_content_info}>
                            <h4 className={styles.home_content_title_info}><span className={styles.home_content_title_info_bold}>Последнее обновление:</span> {moment(weather.ts).format('HH:mm MM/DD/YYYY')}</h4>
                            <div className={styles.home_content_title_info}>
                                <h4 className={styles.home_content_title_info}>{weather.pr} человек(а) подписаны на эту станцию</h4>
                                {Number(weather.pr) >= 1000 ? [1,2,3].map(n => <Image src={'/ic-person.png'} alt='person_icon' width={25} height={25} key={n} />) :
                                weather.pr >500 && weather.pr < 1000 ? [1,2].map(n => <Image src={'/ic-person.png'} alt='person_icon' width={25} height={25} key={n} />) :
                                <Image src={'/ic-person.png'} alt='person_icon' width={25} height={25} /> }
                                <button className={styles.icon_btn} onClick={subscribe}><AiOutlineHeart/></button>
                                <button className={styles.icon_btn} onClick={share}><AiOutlineShareAlt/></button>
                            </div>
                        </div> : null}
                </div>
            )
        }}
    </globalContext.Consumer>
  )
}