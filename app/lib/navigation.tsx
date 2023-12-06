"use client"
import React from "react";
import Link from "next/link";
import styles from "../globals.module.css";

export default function Navigation() {
    return (
        <div className={styles.navigation_container}>
            <ul className={styles.navigation_list}>
              <li className={styles.navigation_item}>
                <Link className={styles.navigation_text} href="/">
                  <p className={styles.navigation_text}>Качество воздуха</p>
                </Link>
              </li>
              <li className={styles.navigation_item}>
                <Link className={styles.navigation_text} href="/monitor">
                  <p className={styles.navigation_text}>Мониторы воздуха</p>
                </Link>
              </li>
              <li className={styles.navigation_item}>
                <Link className={styles.navigation_text} href="/cleaners">
                  <p className={styles.navigation_text}>Очистители воздуха</p>
                </Link>
              </li>
              <li className={styles.navigation_item}>
                <Link className={styles.navigation_text} href="/masks">
                  <p className={styles.navigation_text}>Лицевые маски</p>
                </Link>
              </li>
              <li className={styles.navigation_item}>
                <Link className={styles.navigation_text} href="/forbusiness">
                  <p className={styles.navigation_text}>Для бизнеса</p>
                </Link>
              </li>
              <li className={styles.navigation_item}>
                <Link className={styles.navigation_text} href="/news">
                  <p className={styles.navigation_text}>Новости</p>
                </Link>
              </li>
            </ul>
        </div>
    )

}