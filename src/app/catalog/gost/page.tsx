import React from 'react';
import styles from '../../../styles/catalog.module.css';
import Link from 'next/link';

export default function Gost() {
    const data = [
        {
            title: 'Моторные масла',
            link: '/motornoe_maslo',
            bg: '/ghost_1.jpeg'
        },
        {
            title: 'Трансмиссионные масла',
            link: 'transmissionnoe_maslo',
            bg: '/ghost_2.jpg'
        },
        {
            title: 'Судовые масла',
            link: 'sudovoe_maslo',
            bg: '/ghost_3.jpg'
        },
        {
            title: 'Гидравлические масла',
            link: 'gidravlicheskoe_maslo',
            bg: '/ghost_4.jpg'
        },
        {
            title: 'Индустриальные масла',
            link: 'industrialnoe_maslo',
            bg: '/ghost_5.jpg'
        },
        {
            title: 'Компрессорные масла',
            link: 'kompressornoe_maslo',
            bg: '/ghost_6.jpg'
        },
        {
            title: 'Турбинные масла',
            link: 'turbinnoe_maslo',
            bg: '/ghost_7.jpg'
        }
    ]
    return (
        <section className={styles.ghost}>
            <div className={styles.container}>
                <div className={styles.ghost_history}>
                    <Link href={'/'}>ГЛАВНАЯ</Link>
                    /
                    <Link href={'/catalog'}>КАТАЛОГ</Link>
                    /
                    <Link href={'/catalog/gost'}>МАСЛА СЕРИИ ГОСТ</Link>
                </div>
                <div className={styles.title}>Какие масла вас интересуют?</div>
                <div className={styles.ghost_grid}>
                    {data.map(item => (
                        <Link href={`/catalog/gost/${item.link}`} className={styles.ghost_content} key={item.bg}>
                            <div className={styles.ghost_bg} style={{ backgroundImage: `url(${item.bg})` }}></div>
                            <span className={styles.ghost_content_title}>{item.title} <svg role="presentation" className="t959__card-arrow " width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.994385L12 11.9944L1 22.9944" stroke="white" strokeWidth="2"></path></svg></span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
};
