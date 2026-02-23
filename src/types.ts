export enum Language {
  EST = 'et',
  ENG = 'en',
  RUS = 'ru',
}

export interface Content {
  nav: {
    about: string;
    products: string;
    contact: string;
    callAction: string;
  };
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  products: {
    title: string;
    lubricants: {
      title: string;
      description: string;
      items: string[];
      cta: string;
    };
    chemicals: {
      title: string;
      description: string;
      items: string[];
      cta: string;
    };
  };
  about: {
    title: string;
    description: string;
    stat1: string;
    stat2: string;
    stat3: string;
  };
  contact: {
    title: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    emailLabel: string;
    directions: string;
    call: string;
    nameLabel: string;
    messageLabel: string;
    interestLabel: string;
    optionLubricants: string;
    optionAdditives: string;
    optionOther: string;
    sendButton: string;
  };
  footer: {
    rights: string;
  };
}
