import { Injectable } from '@angular/core';
import { Product } from './meta';

@Injectable()
export class DataService {
  products: Product[] = [
    {
      id: 1,
      title: 'EVOD 900mah Ah kit doble',
      description: 'EVOD 900mah Ah kit doble',
      picture: '/assets/p1-1.jpg',
      price: 650,
      sale: 600,
      photos: [
        {
          thumb: '/assets/p1-1.jpg',
          full: '/assets/p1-1.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p1-2.jpg',
          full: '/assets/p1-2.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p1-3.jpg',
          full: '/assets/p1-3.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p1-4.jpg',
          full: '/assets/p1-4.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      id: 2,
      title: 'Kanger Subvod Kit',
      description: 'Kanger Subvod Kit - 1,300 mah @ 3.2 ml',
      picture: '/assets/p2-1.jpg',
      price: 850,
      sale: 800,
      photos: [
        {
          thumb: '/assets/p2-1.jpg',
          full: '/assets/p2-1.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p2-2.jpg',
          full: '/assets/p2-2.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      id: 3,
      title: 'X6 KIT MOD Aluminio VV',
      description: 'X6 KIT - 1300 mah Voltaje Variable',
      picture: '/assets/p3-1.jpg',
      price: 760,
      sale: 700,
      photos: [
        {
          thumb: '/assets/p3-1.jpg',
          full: '/assets/p3-1.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p3-2.jpg',
          full: '/assets/p3-2.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      id: 4,
      title: 'EVOD 650m Ah Kit Sencillo',
      description: 'EVOD 650 mah Kit Sencillo',
      picture: '/assets/p4-1.jpg',
      price: 550,
      sale: 450,
      photos: [
        {
          thumb: '/assets/p4-1.jpg',
          full: '/assets/p4-1.jpg',
          description: 'Base Layer Top',
        },
        {
          thumb: '/assets/p4-2.jpg',
          full: '/assets/p4-2.jpg',
          description: 'Base Layer Top',
        },
      ],
    },
    {
      id: 5,
      title: 'EVOD 650 mah Kit Sencillo',
      description: 'Kanger Kone Kit -Wint',
      picture: '/assets/p5-1.jpg',
      price: 1250,
      sale: 1050,
      photos: [
        {
          thumb: '/assets/p5-1.jpg',
          full: '/assets/p5-1.jpg',
          description: 'Lucy',
        },
        {
          thumb: '/assets/p5-2.jpg',
          full: '/assets/p5-2.jpg',
          description: 'Lucy',
        },
      ],
    },
    {
      id: 6,
      title: 'Kanger Kone Starter Kit - 3,000 mah @3.5ml',
      description: 'Kanger Kone Kit -Wint',
      picture: '/assets/p6-1.jpg',
      price: 1175,
      sale: 1030,
      photos: [
        {
          thumb: '/assets/p6-1.jpg',
          full: '/assets/p6-1.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-2.jpg',
          full: '/assets/p6-3.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-3.jpg',
          full: '/assets/p6-3.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-4.jpg',
          full: '/assets/p6-4.jpg',
          description: 'Vest',
        },
      ],
    },
    {
      id: 7,
      title: 'Joyetech AIO D22 kit - 2ml, 1500 mah',
      description: ' Joyetech AIO- WINT',
      picture: '/assets/p7-1.jpg',
      price: 670,
      sale: 570,
      photos: [
        {
          thumb: '/assets/p7-1.jpg',
          full: '/assets/p7-1.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p7-2.jpg',
          full: '/assets/p7-2.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p7-3.jpg',
          full: '/assets/p7-3.jpg',
          description: 'Vest',
        },
      ],
    },
    {
      id: 8,
      title: 'Kanger TopBox Nano 3.2 ml',
      description: 'Topbox Nano Rosa -EVER',
      picture: '/assets/p8-1.jpg',
      price: 1550,
      sale: 1450,
      photos: [
        {
          thumb: '/assets/p8-1.jpg',
          full: '/assets/p8-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p8-2.jpg',
          full: '/assets/p8-2.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p8-3.jpg',
          full: '/assets/p8-4.jpg',
          description: 'Pants',
        },
      ],
    },
    {
      id: 9,
      title: 'Joyetech egrip OLED 20-30W, WW, 3.6 ml',
      description: 'egrip OLED - LilH',
      picture: '/assets/p9-1.jpg',
      price: 350,
      sale: 339,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
  ];
}
