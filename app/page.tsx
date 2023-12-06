"use client"

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import styles from "./globals.module.css";
import { useSession } from "next-auth/react";
import BreadCrumbs from "./lib/bread_crumbs";
import { useEffect, useState } from "react";
import Select from "./lib/select";
import get from "lodash";

export default function Page({Component, pageProps}:AppProps) {

    const {data: session, status} = useSession();
    const [countries, setCountries] = useState([]);
    //console.log('APP-PAGE->', pageProps, 'SESSION>', session);

    useEffect(() => {
        console.log('EFFECT->', countries);
        if (!countries.length) getData('countries');
      }, [countries])
    
      const getData = async (api_name: string) => {
        try {
          await fetch(`/api/${api_name}`, {
            method: 'GET',
          }).then(res => res.json()).then((data) => {
            console.log('DATA->', data);
            if (data.success) setCountries(data.data)
          })
        } catch(err) {
          console.error('GET-DATA-ERROR->', err)
        }
      }
    
    return (
        <main className={styles.main}>
            <BreadCrumbs path={'countries/test'}/>
            {countries.length && <Select options={countries} />}
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