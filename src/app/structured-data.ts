export const LocalBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://easygpu.fr',
  name: 'Easy-gpu',
  description: 'Expert en dépannage et maintenance informatique à Derval. Service rapide et professionnel.',
  url: 'https://easygpu.fr',
  telephone: '07 86 10 94 59',
  email: 'contact@easygpu.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Le Domaine 44590 derval',
    addressLocality: 'Derval',
    postalCode: '44590',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '47.7190',
    longitude: '-1.6699'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '17:00'
    }
  ],
  sameAs: [
    'https://www.facebook.com/EasyGPU/',
    'https://www.instagram.com/easygpu.fr/',
    'https://www.tiktok.com/@easygpu.fr'
  ],
  priceRange: '$$',
  image: 'https://easygpu.fr/og-image.png',
  keywords: 'dépannage informatique, maintenance informatique, Derval, PC Gamer, réparation ordinateur'
};

export const ServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dépannage informatique à domicile',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Easy-gpu'
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '47.7190',
      longitude: '-1.6699'
    },
    geoRadius: '30000'
  },
  description: 'Dépannage et maintenance informatique à domicile. Optimisation, réparation et mise à jour de votre matériel.',
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '50',
      priceCurrency: 'EUR',
      unitText: 'heure'
    }
  }
};

export const FAQJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels sont vos délais d\'intervention ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous intervenons généralement sous 24 à 48 heures pour les dépannages urgents, et sur rendez-vous pour les opérations de maintenance.'
      }
    },
    {
      '@type': 'Question',
      name: 'Intervenez-vous à distance ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous proposons un service de dépannage à distance pour les problèmes ne nécessitant pas une intervention physique.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quels types d\'ordinateurs réparez-vous ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous intervenons sur tous types d\'ordinateurs : PC de bureau, portables, PC gamer, Mac, etc.'
      }
    }
  ]
};

export const BreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Accueil',
      'item': 'https://easygpu.fr'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Nos Services',
      'item': 'https://easygpu.fr/#services'
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'Création de Sites Internet',
      'item': 'https://easygpu.fr/#websites'
    },
    {
      '@type': 'ListItem',
      'position': 4,
      'name': 'À Propos',
      'item': 'https://easygpu.fr/#about'
    },
    {
      '@type': 'ListItem',
      'position': 5,
      'name': 'Témoignages',
      'item': 'https://easygpu.fr/#testimonials'
    },
    {
      '@type': 'ListItem',
      'position': 6,
      'name': 'Contact',
      'item': 'https://easygpu.fr/#contact'
    }
  ]
};

export const WebsiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'url': 'https://easygpu.fr',
  'name': 'Easy-gpu | Expert en dépannage informatique à Derval',
  'description': 'Solutions rapides et professionnelles pour tous vos problèmes informatiques. Intervention à domicile à Derval et ses alentours ou à distance.',
  'potentialAction': {
    '@type': 'SearchAction',
    'target': 'https://easygpu.fr/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}; 