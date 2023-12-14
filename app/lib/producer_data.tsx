"use client"
import moment from 'moment';
import styles from '../globals.module.css'
import React, {useEffect} from 'react';
import { globalContext } from './g_context';
import Image from 'next/image';
import { AiOutlineUser } from 'react-icons/ai';

export default function ProducerData(props: any) {

    const { location } = props;

    const testProducerData = {
        role: 'участник',
        name: 'anonimous'
    }

  return (
    <globalContext.Consumer>
        {(context: any) => {
            return (
                <div className={styles.producer_container}>
                    <p className={styles.producer_title_blue}>ПОСТАВЩИКИ ДАННЫХ О КАЧЕСТВЕ ВОЗДУХА</p>
                    <p className={styles.producer_title}>Управление станцией осуществляет</p>
                    <div className={styles.producer_person}>
                        <Image src={'/ic-person.png'} alt='person_icon' width={25} height={25}/>
                        <div className={styles.producer_person_info}>
                            <p className={styles.producer_person_info_top}>{testProducerData.role}</p>
                            <p className={styles.producer_person_info_bottom}>{testProducerData.name}</p>
                        </div>
                    </div>
                    <div className={styles.producer_banner}>
                        <h3 className={styles.producer_banner_title}>Присоединяйтесь к движению!</h3>
                        <p className={styles.producer_banner_text}>Установите монитор и делитесь данными о качестве воздуха в вашем городе.</p>
                        <input type="button" value="СТАТЬ УЧАСТНИКОМ" onClick={() => alert('СТАТЬ УЧАСТНИКОМ')} className={styles.header_btn} />
                    </div>
                    <a href="/monitor" className={styles.producer_link}>Узнайте больше об участниках движения и источниках данных</a>
                </div>
            )
        }}
    </globalContext.Consumer>
  )
}