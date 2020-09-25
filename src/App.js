import React from 'react';
import './App.scss';
import './components/HeroBlock/HeroBlock';
import HeroBlock from './components/HeroBlock/HeroBlock';
import Facts from './components/Facts/Facts';
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

  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье"
        logos={partners}
        links={navLinks} />
      <Facts title="Основные факты" slides={factSlides} />
    </>
  );
}

export default App;
