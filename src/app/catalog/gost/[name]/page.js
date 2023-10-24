import Link from "next/link";
import Image from "next/image";
import styles from "../../../../styles/description.module.css";

export default function Page({ params: { name } }) {
  const info = {
    motornoe_maslo: {
      title: "Моторные масла",
      data: [
        {
            link: "m-10v2",
            text: "М-10В2",
        },
        {
            link: "m-8v",
            text: "М-8В",
        },
        {
          link: "m-8g2k",
          text: "М-8Г2К",
        },
        {
          link: "m-10g2k",
          text: "М-10Г2К",
        },
        {
          link: "m-8dm",
          text: "М-8ДМ",
        },
        {
          link: "m-10dm",
          text: "М-10ДМ",
        }
      ],
    },
    transmissionnoe_maslo: {
      title: "Трансмиссионные масла",
      data: [
        {
            link: 'tad-17i',
            text: 'ТАД-17И',
        },
        {
            link: 'tsp-10',
            text: 'ТСП-10',
        },
        {
            link: 'tsp-15k',
            text: 'ТСП-15К',
        },
        {
            link: 'tap-15v',
            text: 'ТАП-15В',
        }
      ]
    },
    sudovoe_maslo: {
      title: "Судовые масла",
      data: [
        {
            link: 'm-10g2cs',
            text: 'М-10Г2ЦС',
        },
        {
            link: 'm-14g2cs',
            text: 'М-14Г2ЦС',
        },
        {
            link: 'm-16g2cs',
            text: 'М-16Г2ЦС',
        },
        {
            link: 'm-14v2',
            text: 'М-14В2',
        },{
            link: 'm-20e70',
            text: 'М-20Е70'
        },
        {
            link: 'm-16e30',
            text: 'М-16Е30',
        },
        {
            link: 'm-14dcl20',
            text: 'М-14ДЦЛ20'
        },
        {
            link: 'm-14dcl30',
            text: 'М-14ДЦЛ30'
        }
      ]
    },
    gidravlicheskoe_maslo: {
      title: "Гидравлические масла",
      data: [
        {
            link: 'vmgz-45',
            text: 'ВМГЗ (-45°С)',
        },
        {
            link: 'vmgz-60c',
            text: 'ВМГЗ (-60°С)',
        },
        {
            link: 'mge-46v',
            text: 'МГЕ-46В',
        },
        {
            link: 'marka-a',
            text: 'Марка А',
        }
      ]

    },
    industrialnoe_maslo: {
      title: "Индустриальные масла",
      data: [
        {
            link: 'i-20a',
            text: 'И-20А',
        },
        {
            link: 'i-40a',
            text: 'И-40А',
        },
        {
            link: 'igp-30',
            text: 'ИГП-30',
        }
      ]
    },
    kompressornoe_maslo: {
      title: "Компрессорные масла",
      data: [
        {
            link: 'ks-19-p-a',
            text: 'КС-19П А',
        },
        {
            link: 'mgd-14m',
            text: 'МГД-14м',
        }
      ]
    },
    turbinnoe_maslo: {
      title: "Турбинные масла",
      data: [
        {
            link: 'tp-22s',
            text: 'ТП-22С'
        },
        {
            link: 'tp-46',
            text: 'ТП-46',
        }
      ]
    },
  };
  return (
    <section className={styles.descr}>
      <div className="container">
        <div className={styles.ghost_history}>
          <Link href={"/"}>ГЛАВНАЯ</Link>/<Link href={"/catalog"}>КАТАЛОГ</Link>
          /<Link href={"/catalog/gost"}>МАСЛА СЕРИИ ГОСТ</Link>/
          <Link href={`/catalog/gost/${name}`}>{info[name].title.toUpperCase()}</Link>
        </div>

        <div className={styles.grid_product}>
            {info[name].data.map(item => (
                <Link href={`/catalog/gost/${name}/${item.link}`}>
                    <div className={styles.grid_product_item}>
                        <Image src={'/real_product.png'} width={260} height={200}/>
                         <span>{item.text}</span>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
