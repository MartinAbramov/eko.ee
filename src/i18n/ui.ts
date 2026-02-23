import { Content } from '../types';

export const languages = {
  et: 'Eesti',
  en: 'English',
  ru: 'Русский',
};

export const defaultLang = 'et';

export const ui: Record<string, Content> = {
  et: {
    nav: {
      about: 'Ettevõttest',
      products: 'Tooted',
      contact: 'Kontakt',
      callAction: 'Helista',
    },
    meta: {
      title: 'EKOIMPEX - Tööstuslik Jõud. Logistiline Täpsus.',
      description:
        'EKOIMPEX - Premium määrdeained ja tööstuskemikaalid. Ametlik Goodyeari partner Eestis.',
    },
    hero: {
      title: 'Esmaklassilised määrdeained ja tööstuskemikaalid',
      subtitle: '',
      cta: 'Vaata tooteid',
    },
    products: {
      title: 'Meie Tegevusvaldkonnad',
      lubricants: {
        title: 'Määrdeained & Õlid',
        description: 'Tipptasemel määrdeained.',
        items: [
          'Mootoriõlid',
          'Määrded',
          'Transmissiooniõlid',
          'Hüdraulikaõlid',
        ],
        cta: 'Vaata spetsifikatsiooni',
      },
      chemicals: {
        title: 'Kütuselisandid',
        description: '',
        items: [],
        cta: 'Küsi pakkumist',
      },
    },
    about: {
      title: 'Logistiline Täpsus',
      description:
        'EKOIMPEX tagab kvaliteetsete määrdeainete kiire ja tõhusa tarnimise kogu Eestis.',
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
      nameLabel: 'Nimi',
      messageLabel: 'Sõnum',
      interestLabel: 'Mille vastu huvi tunnete?',
      optionLubricants: 'Määrdeained & Õlid',
      optionAdditives: 'Kütuselisandid',
      optionOther: 'Muu',
      sendButton: 'Saada sõnum',
    },
    footer: {
      rights: 'Kõik õigused kaitstud.',
    },
  },
  en: {
    nav: {
      about: 'About Us',
      products: 'Products',
      contact: 'Contact',
      callAction: 'Call Now',
    },
    meta: {
      title: 'EKOIMPEX - Industrial Strength. Logistics Precision.',
      description:
        'EKOIMPEX - Premium lubricants and industrial chemicals. Official Goodyear partner in Estonia.',
    },
    hero: {
      title: 'Premium Lubricants & Industrial Chemicals',
      subtitle: '',
      cta: 'View Products',
    },
    products: {
      title: 'Business Lines',
      lubricants: {
        title: 'Lubricants & Oils',
        description: 'Top-tier lubricants.',
        items: [
          'Motor Oils',
          'Greases',
          'Transmission Fluids',
          'Hydraulic Fluids',
        ],
        cta: 'View Specs',
      },
      chemicals: {
        title: 'Fuel additives',
        description: '',
        items: [],
        cta: 'Request quote',
      },
    },
    about: {
      title: 'Logistics precision',
      description:
        'EKOIMPEX ensures fast and efficient delivery of premium quality lubricants across Estonia.',
      stat1: 'Verified supplier',
      stat2: 'Reg. code 17227481',
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
      nameLabel: 'Name',
      messageLabel: 'Message',
      interestLabel: 'What are you interested in?',
      optionLubricants: 'Lubricants & Oils',
      optionAdditives: 'Fuel Additives',
      optionOther: 'Other',
      sendButton: 'Send Message',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  ru: {
    nav: {
      about: 'О компании',
      products: 'Продукты',
      contact: 'Контакты',
      callAction: 'Позвонить',
    },
    meta: {
      title: 'EKOIMPEX - Промышленная Мощь. Логистическая Точность.',
      description:
        'EKOIMPEX - Премиальные смазочные материалы и промышленные химикаты. Официальный партнер Goodyear в Эстонии.',
    },
    hero: {
      title: 'Премиальные смазочные материалы и промышленные химикаты',
      subtitle: '',
      cta: 'Смотреть продукты',
    },
    products: {
      title: 'Направления деятельности',
      lubricants: {
        title: 'Смазочные материалы',
        description: 'Смазочные материалы высшего класса.',
        items: [
          'Моторные масла',
          'Смазки',
          'Трансмиссионные жидкости',
          'Гидравлические масла',
        ],
        cta: 'Спецификация',
      },
      chemicals: {
        title: 'Присадки к топливу',
        description: '',
        items: [],
        cta: 'Спросить предложение',
      },
    },
    about: {
      title: 'Логистическая точность',
      description:
        'EKOIMPEX обеспечивает быструю и эффективную доставку смазочных материалов высшего качества по всей Эстонии.',
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
      nameLabel: 'Имя',
      messageLabel: 'Сообщение',
      interestLabel: 'Что вас интересует?',
      optionLubricants: 'Смазочные материалы и масла',
      optionAdditives: 'Присадки к топливу',
      optionOther: 'Другое',
      sendButton: 'Отправить сообщение',
    },
    footer: {
      rights: 'Все права защищены.',
    },
  },
};
