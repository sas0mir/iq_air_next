"use client"

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import styles from "./globals.module.css";
import { useSession } from "next-auth/react";
import BreadCrumbs from "./lib/bread_crumbs";
import { useEffect, useState } from "react";
import Select from "./lib/select";
import get from "lodash";
import { ILocation } from "./lib/constants";

export default function Page({Component, pageProps}:AppProps) {

    const {data: session, status} = useSession();
    const [location, setLocation] = useState<ILocation>({country: 'Russia'});
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (!countries.length) getData('countries');
    }, [])

    useEffect(() => {
      if (location.country && !states) getData('states');
  }, [location.country])
  
    const getData = async (api_name: string, params?: any) => {
      try {
        await fetch(`/api/${api_name}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({country: location.country})
        }).then(res => res.json()).then((data) => {
          console.log('DATA->', data);
          if (data.status === 'success') setCountries(data.data)
        })
      } catch(err) {
        console.error('GET-DATA-ERROR->', err)
      }
    }

    const findMe = () => {
      setLocation({country: 'Russia'})
    }

    const handleSelectCountry = (value: any) => {
      console.log('SELECT-HANDLE->', value);
      setLocation({country: value.country});
      setStates([]);
      setCities([])
    }
    const handleSelectState = (value: any) => {
      console.log('SELECT-HANDLE->', value);
      setLocation({country: location.country, state: value.state})
      setCities([])
    }
    const handleSelectCity = (value: any) => {
      console.log('SELECT-HANDLE->', value);
      setLocation({country: location.country, state: location.state, city: value.city})
    }

    return (
        <main className={styles.main}>
          <header className={styles.header_container}>
            <BreadCrumbs path={`${location.country}/${location.state}/${location.city}`}/>
            <input type="button" value="Найти меня" onClick={findMe} className={styles.header_btn} />
          </header>
          <div>
            <Select options={countries} placeHolder={location.country} onChange={handleSelectCountry} optionName="country"/>
            <Select options={states} placeHolder={location.state} onChange={handleSelectState} optionName="state"/>
            <Select options={cities} placeHolder={location.city} onChange={handleSelectCity} optionName="city"/>
          </div>
            {/* {session?.user ? 
            <Link href="/monitor">Back to weather monitor {session?.user.name}</Link> : 
            <div>
                <Link href="/register">Register</Link>
                <Link href="/login">Login</Link>
            </div>
            } */}
        </main>
    )
}