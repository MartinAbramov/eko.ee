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
      partner: 'Hakka partneriks',
      callAction: 'Helista',
    },
    meta: {
      title: 'EKOIMPEX - Määrdeainete ja tööstuskemikaalide tarnija',
      description:
        'EKOIMPEX on määrdeainete ja tööstuskemikaalide tarnija Eestis. Ametlik Goodyeari partner.',
    },
    hero: {
      title: 'Esmaklassilised määrdeained ja tööstuskemikaalid',
      subtitle: '',
      cta: 'Vaata tooteid',
      partnerCta: 'Hakka partneriks',
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
        description: 'Lisandid diisel- ja bensiinikütusele.',
        items: ['Diislilisandid', 'Bensiinilisandid'],
        cta: 'Küsi pakkumist',
      },
    },
    about: {
      title: 'Määrdeainete ja tööstuskemikaalide tarnija',
      description:
        'EKOIMPEX on Eesti ettevõte, mis tarnib esmaklassilisi määrdeaineid ja tööstuskemikaale.',
      details:
        'Varustame ettevõtteid mootorõlide, määrde, transmissiooni- ja hüdraulikaõlide ning kütuselisanditega. Oleme Goodyeari ametlik partner Eestis.',
      partnerCta: 'Hakka partneriks',
    },
    partner: {
      metaTitle: 'Hakka EKOIMPEXi partneriks',
      metaDescription:
        'Hulgihinnad ja eritingimused edasimüüjatele. Hakka EKOIMPEXi partneriks ja too oma klientideni määrdeained ning kütuselisandid.',
      title: 'Hakka meie partneriks',
      benefitsTitle: 'Mida partnerlus annab',
      benefits: [
        'Hulgihinnad ja eritingimused partneritele',
        'Otsetarne mootori- ja hüdraulikaõlidele sõiduautodele, raskele ja tööstustehnikale ning kütuselisanditele',
        'Goodyeari valik töökodadele, kauplustele ja ettevõtetele',
        'Isiklik kontakt ja paindlik tarne Eestis',
      ],
      formTitle: 'Partnerluse avaldus',
      firstNameLabel: 'Eesnimi',
      lastNameLabel: 'Perekonnanimi',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefon',
      companyLabel: 'Ettevõtte nimi',
      regCodeLabel: 'Registrikood',
      vatLabel: 'KMKR number (valikuline)',
      websiteLabel: 'Veebileht (valikuline)',
      cityLabel: 'Linn (valikuline)',
      interestLabel: 'Millest olete huvitatud?',
      optionLubricants: 'Määrdeained ja õlid',
      optionAdditives: 'Kütuselisandid',
      optionBoth: 'Mõlemad',
      messageLabel: 'Sõnum',
      messagePlaceholder:
        'Kirjeldage lühidalt oma ettevõtet ja soovi: kauplus, töökoda, hulgimüük või muu.',
      sendButton: 'Saada avaldus',
      privacyNote:
        'Kasutame teie andmeid ainult selleks, et partnerlusest rääkida.',
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
      partnerCta: 'Hakka partneriks',
      instagramLabel: 'Instagram',
    },
    footer: {
      rights: 'Kõik õigused kaitstud.',
      partner: 'Hakka partneriks',
    },
  },
  en: {
    nav: {
      about: 'About Us',
      products: 'Products',
      contact: 'Contact',
      partner: 'Become a partner',
      callAction: 'Call Now',
    },
    meta: {
      title: 'EKOIMPEX - Supplier of Lubricants and Industrial Chemicals',
      description:
        'EKOIMPEX is a supplier of lubricants and industrial chemicals in Estonia. Official Goodyear partner.',
    },
    hero: {
      title: 'Premium Lubricants & Industrial Chemicals',
      subtitle: '',
      cta: 'View Products',
      partnerCta: 'Become a partner',
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
        description: 'Additives for diesel and petrol.',
        items: ['Diesel additives', 'Petrol additives'],
        cta: 'Request quote',
      },
    },
    about: {
      title: 'Supplier of lubricants and industrial chemicals',
      description:
        'EKOIMPEX is an Estonian company that supplies premium lubricants and industrial chemicals.',
      details:
        'We supply businesses with motor oils, greases, transmission and hydraulic fluids, and fuel additives. We are an official Goodyear partner in Estonia.',
      partnerCta: 'Become a partner',
    },
    partner: {
      metaTitle: 'Become an EKOIMPEX partner',
      metaDescription:
        'Wholesale pricing and special terms for resellers. Become an EKOIMPEX partner and supply lubricants and fuel additives to your customers.',
      title: 'Become our partner',
      benefitsTitle: 'What partnership includes',
      benefits: [
        'Wholesale pricing and special partner terms',
        'Direct supply of motor and hydraulic oils for passenger cars, heavy and industrial machinery, plus fuel additives',
        'Goodyear range for workshops, shops, and companies',
        'A dedicated contact and flexible delivery in Estonia',
      ],
      formTitle: 'Partnership application',
      firstNameLabel: 'First name',
      lastNameLabel: 'Last name',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      companyLabel: 'Company name',
      regCodeLabel: 'Registration code',
      vatLabel: 'VAT number (optional)',
      websiteLabel: 'Website (optional)',
      cityLabel: 'City (optional)',
      interestLabel: 'What are you interested in?',
      optionLubricants: 'Lubricants and oils',
      optionAdditives: 'Fuel additives',
      optionBoth: 'Both',
      messageLabel: 'Message',
      messagePlaceholder:
        'Briefly describe your business and what you need: shop, workshop, wholesale, or other.',
      sendButton: 'Send application',
      privacyNote: 'We will use your details only to discuss a partnership.',
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
      partnerCta: 'Become a partner',
      instagramLabel: 'Instagram',
    },
    footer: {
      rights: 'All rights reserved.',
      partner: 'Become a partner',
    },
  },
  ru: {
    nav: {
      about: 'О компании',
      products: 'Продукты',
      contact: 'Контакты',
      partner: 'Стать партнёром',
      callAction: 'Позвонить',
    },
    meta: {
      title:
        'EKOIMPEX - Поставщик смазочных материалов и промышленных химикатов',
      description:
        'EKOIMPEX — поставщик смазочных материалов и промышленных химикатов в Эстонии. Официальный партнёр Goodyear.',
    },
    hero: {
      title: 'Премиальные смазочные материалы и промышленные химикаты',
      subtitle: '',
      cta: 'Смотреть продукты',
      partnerCta: 'Стать партнёром',
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
        description: 'Присадки для дизеля и бензина.',
        items: ['Дизельные присадки', 'Бензиновые присадки'],
        cta: 'Спросить предложение',
      },
    },
    about: {
      title: 'Поставщик смазочных материалов и промышленных химикатов',
      description:
        'EKOIMPEX — эстонская компания, которая поставляет премиальные смазочные материалы и промышленные химикаты.',
      details:
        'Мы снабжаем предприятия моторными маслами, смазками, трансмиссионными и гидравлическими жидкостями, а также присадками к топливу. Официальный партнёр Goodyear Lubricants в Эстонии.',
      partnerCta: 'Стать партнёром',
    },
    partner: {
      metaTitle: 'Стать партнёром EKOIMPEX',
      metaDescription:
        'Оптовые цены и особые условия для дилеров. Станьте партнёром EKOIMPEX и поставляйте смазочные материалы и присадки своим клиентам.',
      title: 'Станьте нашим партнёром',
      benefitsTitle: 'Что даёт партнёрство',
      benefits: [
        'Оптовые цены и особые условия для партнёров',
        'Прямые поставки моторных и гидравлических масел для легковых автомобилей, тяжёлой и промышленной техники, а также присадок к топливу',
        'Ассортимент Goodyear для сервисов, магазинов и компаний',
        'Личный контакт и гибкая доставка по Эстонии',
      ],
      formTitle: 'Заявка на партнёрство',
      firstNameLabel: 'Имя',
      lastNameLabel: 'Фамилия',
      emailLabel: 'Эл. почта',
      phoneLabel: 'Телефон',
      companyLabel: 'Название фирмы',
      regCodeLabel: 'Регистрационный код',
      vatLabel: 'VAT / KMKR (необязательно)',
      websiteLabel: 'Сайт (необязательно)',
      cityLabel: 'Город (необязательно)',
      interestLabel: 'Что вас интересует?',
      optionLubricants: 'Смазочные материалы и масла',
      optionAdditives: 'Присадки к топливу',
      optionBoth: 'Оба направления',
      messageLabel: 'Сообщение',
      messagePlaceholder:
        'Кратко опишите вашу компанию и запрос: магазин, сервис, опт или другое.',
      sendButton: 'Отправить заявку',
      privacyNote:
        'Мы используем ваши данные только для обсуждения партнёрства.',
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
      partnerCta: 'Стать партнёром',
      instagramLabel: 'Instagram',
    },
    footer: {
      rights: 'Все права защищены.',
      partner: 'Стать партнёром',
    },
  },
};
