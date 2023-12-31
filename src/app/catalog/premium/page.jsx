import styles from '../../../styles/catalog.module.css';
import Link from 'next/link';

export default function Page() {
    const data = [
        {
            title: 'Моторные масла',
            link: '',
            bg: '/ghost_1.jpeg'
        },
        {
            title: 'Трансмиссионные масла',
            link: '',
            bg: '/ghost_2.jpg'
        },
        {
            title: 'Судовые масла',
            link: '',
            bg: '/ghost_3.jpg'
        },
        {
            title: 'Гидравлические масла',
            link: '',
            bg: '/ghost_4.jpg'
        },
        {
            title: 'Индустриальные масла',
            link: '',
            bg: '/premium_5.jpg'
        },
        {
            title: 'Компрессорные масла',
            link: '',
            bg: '/premium_6.jpg'
        },
    ]
    return(
        <section className={styles.ghost}>
        <div className='container'>
            <div className={styles.ghost_history}>
                <Link href={'/'}>ГЛАВНАЯ</Link>
                /
                <Link href={'/catalog'}>КАТАЛОГ</Link>
                /
                <Link href={'/catalog/premium'}>МАСЛА СЕРИИ ПРЕМИУМ</Link>
            </div>
            <div className={styles.title}>Какие масла вас интересуют?</div>
            <div className={styles.ghost_grid}>
                {data.map(item => (
                    <Link href={item.link} className={styles.ghost_content} key={item.bg}>
                        <div className={styles.ghost_bg} style={{ backgroundImage: `url(${item.bg})` }}></div>
                        <span className={styles.ghost_content_title}>{item.title} <svg role="presentation" className="t959__card-arrow " width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.994385L12 11.9944L1 22.9944" stroke="white" strokeWidth="2"></path></svg></span>
                    </Link>
                ))}
            </div>
        </div>
    </section>
    )
};
