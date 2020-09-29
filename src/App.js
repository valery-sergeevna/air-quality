import React from 'react';
import './App.scss';
import './components/HeroBlock/HeroBlock';
import HeroBlock from './components/HeroBlock/HeroBlock';
import Facts from './components/Facts/Facts';
import SectorList from './components/SectorList/SectorList';
import Footer from './components/Footer/Footer';
import Navbar from './components/Nav/Navbar';
import AirQuality from './components/AirQuality/AirQuality';
import shidLogo from './assets/shid_emozhl_logo.png';
import ITNLogo from './assets/ITN_logo.svg';
import globalLogo from './assets/global__logo.svg';

function App() {

  const partners = [
    shidLogo,
    ITNLogo,
    globalLogo
  ];

  const navLinks = [
    {
      title: "Основные факты",
      href: "#facts"
    },
    {
      title: "Индекс качества воздуха",
      href: "#airQuality"
    },
    {
      title: "Политика по уменьшению загрязнений",
      href: "#policy"
    }
  ];

  const factSlides = [
    {
      id: 1331,
      imgUrl: require('./assets/first_fact.jpg'),
      desc: "Женщины и дети – главные жертвы загрязнения воздуха"
    },
    {
      id: 1332,
      imgUrl: require('./assets/second_fact.jpg'),
      desc: "Защитники окружающей среды подвергаются преследованиям"
    },
    {
      id: 1333,
      imgUrl: require('./assets/third_fact.jpg'),
      desc: "Загрязнение воздуха – нарушение прав человека"
    },
    {
      id: 1335,
      imgUrl: require('./assets/fourth_fact.jpg'),
      desc: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха"
    },
    {
      id: 1335,
      imgUrl: require('./assets/fifth_fact.jpg'),
      desc: "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
    }
  ];

  const sectors = [
    {
      name: "Промышленность",
      decs: "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)",
      imgUrl: require('./assets/sectors/industry.jpg')
    },
    {
      name: "Транспорт",
      decs: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы",
      imgUrl: require('./assets/sectors/auto.jpg')
    },
    {
      name: "Городское планирование",
      decs: "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов",
      imgUrl: require('./assets/sectors/plan.jpg')
    },
    {
      name: "Энергия",
      decs: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения",
      imgUrl: require('./assets/sectors/energy.jpg')
    },
    {
      name: "Энергетика",
      decs: " Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)",
      imgUrl: require('./assets/sectors/energetics.jpg')
    },
    {
      name: "Утилизация отходов",
      decs: "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов",
      imgUrl: require('./assets/sectors/utiliz.jpg')
    }
  ];

  const author = "Валерией Гнидиной";
  const designer = "Валерией Бубырь";

  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье" logos={partners}
        links={navLinks}>
      </HeroBlock>
      <Facts title="Основные факты" slides={factSlides} />
      <AirQuality />
      <SectorList title="Политика по уменьшению загрязнений"
        subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
        items={sectors}></SectorList>
      <Footer links={navLinks} partners={partners} author={author} designer={designer}></Footer>
    </>
  );
}

export default App;
