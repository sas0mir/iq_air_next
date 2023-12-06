"use client"
import styles from '../globals.module.css'
import { useState, useEffect } from 'react';
import BreadCrumbs from '../lib/bread_crumbs';
import { useSession } from 'next-auth/react';

function Monitor(props: any) {

  const {data: session, status} = useSession();

  const [location, setLocation] = useState<string>('/media/sas/DRIVE_D');

  useEffect(() => {
    if (!location) getData('root')
  }, [location])

  const getData = async (path: string) => {
    try {
      await fetch(`/api/show${path ? '?folder='+ path : ''}`, {
        method: 'GET',
      }).then(res => res.json()).then((folder) => {
        setLocation(folder?.files)
      })
      //setFolder(folder)
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <main className={styles.monitor_container}>
        <header className={styles.monitor_header}>
          <BreadCrumbs path={location} action={(folder: string) => {
            getData(`/${folder}`);
            setLocation(`/${folder}`);
            }} />
          </header>
        <footer>
        </footer>
    </main>
  )
}

export default Monitor