export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance';
export const IS_PROD = process.env.NODE_ENV === 'production';
export const META = {
  common: {
    image: '/images/sergey-image.jpg',
  },
  index: {
    title: 'Sergey Shmyrev | Full-stack UX design specialist.',
    description: 'Software engineer from Clapiers, FRANCE, coding from backend to frontend. Product designer. Front-end developer. Full-stack UX design specialist.'
  },
  profile: {
    title: 'Sergey Shmyrev | Profile',
    description: 'I\'m a firm believer that nothing amazing was ever created from scratch. Innovation is combination is history and creativity.'
  },
  works: {
    title: 'Sergey Shmyrev | Works',
    description: 'A selection of the work carried out over 8+ years of work. Among which: Websites, Web applications, coordinated images and more. I create simple and intuitive websites and applications.'
  }
};
