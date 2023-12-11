"use client"

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import styles from "./globals.module.css";
import { useSession } from "next-auth/react";
import BreadCrumbs from "./lib/bread_crumbs";
import { useEffect, useState } from "react";
import Select from "./lib/select";
import { get, isEqual } from "lodash";
import { ILocation } from "./lib/constants";
import LocationHeader from "./lib/location_header";
import IndexVidget from "./lib/index_vidget";
import MapBanner from "./lib/map_banner";
import LocationReview from "./lib/location_review";
import { globalContext } from "./lib/g_context";

export default function Page({Component, pageProps}:AppProps) {

    const {data: session, status} = useSession();
    const [location, setLocation] = useState<ILocation>({country: 'Russia'});
    const [forecasts, setForecasts] = useState([]);
    const [history, setHistory] = useState(null);
    const [weather, setWeather] = useState(null);
    const [pollution, setPollution] = useState(null);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [stations, setStations] = useState([]);

    useEffect(() => {
        if (!countries.length) getData('countries');
        if (!location.city) findMe()
    }, [])

    useEffect(() => {
      if (location.country && !states.length) getData('states');
    }, [location.country])

    useEffect(() => {
      if (location.state && !cities.length) getData('cities');
    }, [location.state])

    useEffect(() => {
      if (location.city && !stations.length) getData('stations');
    }, [location.city])
  
    const getData = async (api_name: string, params?: any) => {

      let fetchBody = api_name === 'states' ? {country: location.country} :
        api_name === 'cities' ? {country: location.country, state: location.state} :
        api_name === 'stations' ? {country: location.country, state: location.state, city: location.city} : null;
      
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
              case 'stations':
                setStations(data.data);
                break;
            }
          }
        })
      } catch(err) {
        console.error('GET-DATA-ERROR->', err)
      }
    }

    const findMe = async () => {
      try {
        await fetch(`/api/nearest_city`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({coordinates: location.coordinates})
        }).then((res) => {
          return res.json()
        }).then((data) => {
          if(data.status === 'success') {
            const new_location = {
              country: data.data.country,
              state: data.data.state,
              city: data.data.city,
              station: data.data.name,
              coordinates: data.data.location.coordinates
            };
            setLocation(new_location);
            setForecasts(data.data.forecasts);
            setHistory(data.data.history);
            setWeather(get(data.data, ['current', 'weather'])),
            setPollution(get(data.data, ['current', 'pollution']));
          }
        })
      } catch(err) {
        alert(`NEAREST-STATION-API-ERROR->${err}`)
      }
    }

    const handleSelectCountry = (value: any) => {
      setLocation({country: value.country});
      setStates([]);
      setCities([])
    }
    const handleSelectState = (value: any) => {
      setLocation({country: location.country, state: value.state})
      setCities([])
    }
    const handleSelectCity = (value: any) => {
      setLocation({country: location.country, state: location.state, city: value.city})
    }
    const handleBreadRoute = (newLocation: string[]) => {
      alert(`ROUTE-> ${newLocation}`)
    }

    return (
      <globalContext.Consumer>
        {(context: any) => {

          console.log('CONTEXT->', context);
          const gState = context.globalState;
          const gLocation = gState.gLocation;
          
          if (location.city && gLocation.city !== location.city) {
            context.setLocation(location);
          }

          return <main className={styles.main}>
          <header className={styles.header_container}>
            <BreadCrumbs path={`${location.country}/${location.state || 'Не выбран штат'}/${location.city || 'Не выбран город'}`} action={handleBreadRoute}/>
            <input type="button" value="Найти меня" onClick={findMe} className={styles.header_btn} />
          </header>
          <div className={styles.home_content_row}>
            <Select options={countries} placeHolder={location.country || 'Выбор страны'} onChange={handleSelectCountry} optionName="country"/>
            <Select options={states} placeHolder={location.state || 'Выбор штата'} onChange={handleSelectState} optionName="state"/>
            <Select options={cities} placeHolder={location.city || 'Выбор города'} onChange={handleSelectCity} optionName="city"/>
            <Select options={cities} placeHolder={location.station || 'Выбор станции'} onChange={handleSelectCity} optionName="station"/>
          </div>
          <div className={styles.home_content_head}>
            <LocationHeader location={location} weather={weather} pollution={pollution} />
          </div>
          <div className={styles.home_content}>
            <div className={styles.home_content_column_left}>
              <MapBanner />
            </div>
            <div className={styles.home_content_column_right}>
              <IndexVidget location={location} weather={weather} pollution={pollution} />
              <LocationReview location={location} weather={weather} pollution={pollution} />
            </div>
          </div>
        </main>
        }}
      </globalContext.Consumer>
    )
}