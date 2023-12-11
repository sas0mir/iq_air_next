"use client"
import styles from '../globals.module.css'
import { useState, useEffect } from 'react';
import BreadCrumbs from '../lib/bread_crumbs';
import { useSession } from 'next-auth/react';
import { globalContext } from '../lib/g_context';

function Monitor(props: any) {

  const {data: session, status} = useSession();

  const [location, setLocation] = useState<string>('/media/sas/DRIVE_D');

  useEffect(() => {
    if (!location) getData('root')
  }, [location])

  const getData = async (path: string) => {
    // try {
    //   await fetch(`/api/show${path ? '?folder='+ path : ''}`, {
    //     method: 'GET',
    //   }).then(res => res.json()).then((folder) => {
    //     setLocation(folder?.files)
    //   })
    //   //setFolder(folder)
    // } catch(err) {
    //   console.error(err)
    // }
  }

  return (
    <globalContext.Consumer>
      {(context: any) => {
        return (
          <main className={styles.monitor_container}>
              <header className={styles.monitor_header}>
                <BreadCrumbs path={context.globalState.gLocation} action={() => {}} />
                </header>
              <footer>
              </footer>
          </main>
        )
      }}
    </globalContext.Consumer>
  )
}

export default Monitor