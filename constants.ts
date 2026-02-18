import { Language, Content } from './types';

export const PHONE_PRIMARY = '+372 5069 149';
export const PHONE_SECONDARY = '+372 5240 342';
export const EMAIL_CONTACT = 'ekoimpex.info@gmail.com'; // In production: info@eko.ee
export const ADDRESS_MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2023.637213451234!2d25.0000!3d59.4600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692eb5600000001%3A0x0!2sFosforiidi+4%2C+Maardu!5e0!3m2!1sen!2see!4v1600000000000';
export const WAZE_LINK = 'https://waze.com/ul?q=Fosforiidi+tn+4+Maardu';

export const translations: Record<Language, Content> = {
  [Language.EST]: {
    nav: {
      about: 'Ettevõttest',
      products: 'Tooted',
      contact: 'Kontakt',
      callAction: 'Helista',
    },
    hero: {
      title: 'Esmaklassilised määrdeained ja tööstuskemikaalid',
      subtitle:
        'Ametlik Goodyeari partner Eestis. Logistiline täpsus Maardu südamest.',
      cta: 'Vaata tooteid',
    },
    products: {
      title: 'Meie Tegevusvaldkonnad',
      lubricants: {
        title: 'Määrdeained & Õlid',
        description:
          'Goodyear Oil Baltics ametlik edasimüüja. Tipptasemel määrdeained rasketehnikale ja tööstusele.',
        items: [
          'Mootoriõlid',
          'Määrded',
          'Transmissiooniõlid',
          'Hüdraulikaõlid',
        ],
        cta: 'Küsi pakkumist',
      },
      chemicals: {
        title: 'Tööstuskemikaalid',
        description:
          'Lai valik kemikaale ja kütuselisandeid tööstuslikuks tarbimiseks.',
        items: [
          'Kütuselisandid',
          'Lahustid',
          'AdBlue komponendid',
          'Puhastuskemikaalid',
        ],
        cta: 'Vaata spetsifikatsiooni',
      },
    },
    about: {
      title: 'Logistiline Täpsus',
      description:
        'Asume Maardu strateegilises tööstuspargis. EKOIMPEX pakub kiiret hulgikaupade ja pakendatud määrdeainete jaotust üle Harjumaa ja kogu Eesti.',
      stat1: 'Kontrollitud Tarnija',
      stat2: 'Reg. kood 17227481',
      stat3: 'Asutatud 2024',
    },
    contact: {
      title: 'Kontakt',
      addressLabel: 'Aadress',
      address: 'Fosforiidi tn. 4, Maardu linn, Harjumaa 74114',
      phoneLabel: 'Telefon',
      emailLabel: 'E-mail',
      directions: 'Juhised',
      call: 'Helista',
    },
    footer: {
      rights: 'Kõik õigused kaitstud.',
    },
  },
  [Language.ENG]: {
    nav: {
      about: 'About Us',
      products: 'Products',
      contact: 'Contact',
      callAction: 'Call Now',
    },
    hero: {
      title: 'Premium Lubricants & Industrial Chemicals',
      subtitle:
        'Official Goodyear Partner in Estonia. Logistics precision from the Maardu hub.',
      cta: 'View Products',
    },
    products: {
      title: 'Business Lines',
      lubricants: {
        title: 'Lubricants & Oils',
        description:
          'Official distributor for Goodyear Oil Baltics. Top-tier lubricants for heavy machinery and industry.',
        items: [
          'Motor Oils',
          'Greases',
          'Transmission Fluids',
          'Hydraulic Fluids',
        ],
        cta: 'Request Quote',
      },
      chemicals: {
        title: 'Industrial Chemicals',
        description:
          'Wide range of chemicals and fuel additives for industrial consumption.',
        items: [
          'Fuel Additives',
          'Solvents',
          'AdBlue Components',
          'Cleaning Chemicals',
        ],
        cta: 'View Specs',
      },
    },
    about: {
      title: 'Logistics Precision',
      description:
        'Situated in the strategic logistics hub of Maardu, EKOIMPEX provides rapid distribution of bulk chemicals and packaged lubricants across Harju County and Estonia.',
      stat1: 'Verified Supplier',
      stat2: 'Reg. Code 17227481',
      stat3: 'Est. 2024',
    },
    contact: {
      title: 'Contact Us',
      addressLabel: 'Address',
      address: 'Fosforiidi tn. 4, Maardu, Harju County 74114',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      directions: 'Get Directions',
      call: 'Call',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  [Language.RUS]: {
    nav: {
      about: 'О компании',
      products: 'Продукты',
      contact: 'Контакты',
      callAction: 'Позвонить',
    },
    hero: {
      title: 'Премиальные смазочные материалы и промышленные химикаты',
      subtitle:
        'Официальный партнер Goodyear в Эстонии. Логистическая точность из центра Маарду.',
      cta: 'Смотреть продукты',
    },
    products: {
      title: 'Направления Деятельности',
      lubricants: {
        title: 'Смазочные Материалы',
        description:
          'Официальный дистрибьютор Goodyear Oil Baltics. Смазочные материалы высшего класса для тяжелой техники.',
        items: [
          'Моторные масла',
          'Смазки',
          'Трансмиссионные жидкости',
          'Гидравлические масла',
        ],
        cta: 'Запросить цену',
      },
      chemicals: {
        title: 'Промышленная Химия',
        description:
          'Широкий спектр химикатов и присадок к топливу для промышленного использования.',
        items: [
          'Присадки к топливу',
          'Растворители',
          'Компоненты AdBlue',
          'Чистящие средства',
        ],
        cta: 'Спецификация',
      },
    },
    about: {
      title: 'Логистическая Точность',
      description:
        'Находясь в стратегическом логистическом хабе Маарду, EKOIMPEX обеспечивает быстрое распределение наливных химикатов и упакованных смазочных материалов.',
      stat1: 'Проверенный поставщик',
      stat2: 'Рег. код 17227481',
      stat3: 'Осн. 2024',
    },
    contact: {
      title: 'Контакты',
      addressLabel: 'Адрес',
      address: 'Fosforiidi tn. 4, Maardu, Harjumaa 74114',
      phoneLabel: 'Телефон',
      emailLabel: 'Эл. почта',
      directions: 'Маршрут',
      call: 'Позвонить',
    },
    footer: {
      rights: 'Все права защищены.',
    },
  },
};
