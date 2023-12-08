"use client"
import styles from '../globals.module.css'

export default function BreadCrumbs(props: any) {

    const {path = '', action} = props;
    const pathElements = path ? path.split('/') : [];

    const handleClick = (index: number) => {
        const location = pathElements.slice(1, index + 1).join('/');
        console.log('КРОШКИ ЛОКАЦИЯ->', location);
        action(location)
    }

  return (
    <div className={styles.breads_container}>
        {pathElements.length && pathElements.map((el: string, idx: number) => {
            if (el) return <h4 key={idx} className={styles.breads_element} onClick={(e) => handleClick(idx)}>{`/${el}`}</h4>
        })}
    </div>
  )
}