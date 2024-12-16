// src/data/menu.ts
export interface MenuItem {
    id: string;
    name: {
      en: string;
      es: string;
      ca: string;
    };
    description: {
      en: string;
      es: string;
      ca: string;
    };
    price: number;
    image: string;
  }
  
  export const tapas: MenuItem[] = [
    {
      id: 'patatas-bravas',
      name: {
        en: 'Bravas Potatoes',
        es: 'Patatas Bravas',
        ca: 'Patates Braves'
      },
      description: {
        en: 'Classic spicy potato cubes with spicy tomato sauce',
        es: 'Cubos de patata picantes con salsa de tomate',
        ca: 'Cubs de patata picants amb salsa de tomàquet'
      },
      price: 6.50,
      image: '/images/patatas-bravas.jpg'
    },
    {
      id: 'jamon-iberico',
      name: {
        en: 'Iberian Ham',
        es: 'Jamón Ibérico',
        ca: 'Pernil Ibèric'
      },
      description: {
        en: 'Premium hand-sliced Iberian ham',
        es: 'Jamón ibérico de primera, cortado a mano',
        ca: 'Pernil ibèric de primera qualitat, tallat a mà'
      },
      price: 12.00,
      image: '/images/jamon-iberico.jpg'
    }
  ];
  
  export const mainCourses: MenuItem[] = [
    {
      id: 'paella-valenciana',
      name: {
        en: 'Valencian Paella',
        es: 'Paella Valenciana',
        ca: 'Paella Valenciana'
      },
      description: {
        en: 'Traditional seafood paella with chicken and saffron',
        es: 'Paella tradicional de marisco con pollo y azafrán',
        ca: 'Paella tradicional de marisc amb pollastre i safrà'
      },
      price: 18.50,
      image: '/images/paella.jpg'
    }
  ];
  
  export const drinks: MenuItem[] = [
    {
      id: 'sangria',
      name: {
        en: 'Sangria',
        es: 'Sangría',
        ca: 'Sangria'
      },
      description: {
        en: 'Classic fruit wine cocktail',
        es: 'Cóctel clásico de vino de frutas',
        ca: 'Còctel clàssic de vi de fruites'
      },
      price: 5.50,
      image: '/images/sangria.jpg'
    }
  ];
  
  // Language names and site translations
  export const translations = {
    header: {
      en: 'Rosada Bar',
      es: 'La Rosada Bar',
      ca: 'La Rosada Bar'
    },
    sections: {
      tapas: {
        en: 'Tapas',
        es: 'Tapas',
        ca: 'Tapes'
      },
      mainCourses: {
        en: 'Main Courses',
        es: 'Platos Principales',
        ca: 'Plats Principals'
      },
      drinks: {
        en: 'Drinks',
        es: 'Bebidas',
        ca: 'Begudes'
      }
    }
  };