import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadeaux',
  templateUrl: './cadeaux.component.html',
  styleUrls: ['./cadeaux.component.css'],
})
export class CadeauxComponent implements OnInit {
  cadeauList = [
    {
      nom: 'Peluche caline',
      description:
        'Une peluche à la fois douce et effrayante, elle marche, parle et fonctionne sans pile',
      prix: 25,
      image:
        'https://i.etsystatic.com/iap/49e108/2440001545/iap_300x300.2440001545_ptv5ahvz.jpg?version=0',
    },
    // {
    //   nom: 'Barbie bal de promo',
    //   description: 'Une barbie un peu délurée et très démoniaque, parfaite pour les enfants récalcitrants',
    //   prix: 30,
    //   image: 'https://www.maxpixel.net/static/photo/1x/Evil-Toy-Doll-Horror-Zombie-Halloween-Dead-Scary-2554683.jpg',
    // },
    // {
    //   nom: 'La marionette parfaite',
    //   description: 'vos enfants touchent à tout ? Cette marionette est faite pour eux, attention aux dents !',
    //   prix: 30,
    //   image: 'https://thingspositive.com/wp-content/uploads/2014/10/Creepy-Toy-04.jpg',
    // },
    // {
    //   nom: 'Lily sans soucis',
    //   description: 'Lily est toujours joyeuse, sauf si tu la contredis',
    //   prix: 82,
    //   image: 'https://i.pinimg.com/564x/b9/5b/0a/b95b0a041a4a4ab2c2a7508535af27a7.jpg',
    // },
    // {
    //   nom: 'Masque trop choupi',
    //   description: 'le nouveau super héros de votre enfant !',
    //   prix: 50,
    //   image: 'https://lh3.googleusercontent.com/proxy/EMed8GDoLo-fzpB_UWukDUgimw8Q9IDVWhjp9JjpaSIqmLpeupDyftbaIE5U6pC8S86HrPewIvL3YYejHEfeoQHhnAiXGaqnpuZyTQ',
    // }
  ];
  constructor() {}
  onClick() {
    this.cadeauList.push({
      nom: 'Masque trop choupi',
      description: 'le nouveau super héros de votre enfant !',
      prix: 50,
      image:
        'https://lh3.googleusercontent.com/proxy/EMed8GDoLo-fzpB_UWukDUgimw8Q9IDVWhjp9JjpaSIqmLpeupDyftbaIE5U6pC8S86HrPewIvL3YYejHEfeoQHhnAiXGaqnpuZyTQ',
    });
  }

  ngOnInit(): void {}
}
