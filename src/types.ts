export enum Language {
  EST = 'et',
  ENG = 'en',
  RUS = 'ru',
}

export interface Content {
  nav: {
    about: string;
    products: string;
    partners: string;
    contact: string;
    partner: string;
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
    partnerCta: string;
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
    details: string;
    partnerCta: string;
  };
  partner: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    benefitsTitle: string;
    benefits: string[];
    formTitle: string;
    firstNameLabel: string;
    lastNameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    companyLabel: string;
    regCodeLabel: string;
    vatLabel: string;
    websiteLabel: string;
    cityLabel: string;
    interestLabel: string;
    optionLubricants: string;
    optionAdditives: string;
    optionBoth: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    privacyNote: string;
  };
  partners: {
    title: string;
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
    partnerCta: string;
    instagramLabel: string;
  };
  footer: {
    rights: string;
    partner: string;
  };
}
