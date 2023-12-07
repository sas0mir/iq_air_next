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
      if (location.country && !states.length) getData('states');
    }, [location.country])

    useEffect(() => {
      if (location.state && !cities.length) getData('cities');
    }, [location.state])
  
    const getData = async (api_name: string, params?: any) => {

      let fetchBody = api_name === 'states' ? {country: location.country} :
        api_name === 'cities' ? {country: location.country, state: location.state} : null;
      
      try {
        const fetchOptions = fetchBody ? {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fetchBody)
        } : {
          method: 'GET'
        }

        await fetch(`/api/${api_name}`, fetchOptions).then(res => res.json()).then((data) => {
          console.log('FETCH-DATA->', api_name, data.data);
          if (data.status === 'success') {
            switch (api_name) {
              case 'countries':
                setCountries(data.data);
                break;
              case 'states':
                setStates(data.data);
                break;
              case 'cities':
                setCities(data.data);
                break;
            }
          }
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
            <BreadCrumbs path={`${location.country}/${location.state || 'Не выбран штат'}/${location.city || 'Не выбран город'}`}/>
            <input type="button" value="Найти меня" onClick={findMe} className={styles.header_btn} />
          </header>
          <div className={styles.home_content_row}>
            <Select options={countries} placeHolder={location.country || 'Выбор страны'} onChange={handleSelectCountry} optionName="country"/>
            <Select options={states} placeHolder={location.state || 'Выбор штата'} onChange={handleSelectState} optionName="state"/>
            <Select options={cities} placeHolder={location.city || 'Выбор города'} onChange={handleSelectCity} optionName="city"/>
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