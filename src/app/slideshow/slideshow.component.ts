import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {img: "../assets/images/slideshow1.jpg"},
    {img: "../assets/images/slideshow2.jpg"},
    {img: "../assets/images/slideshow3.jpg"},
    {img: "../assets/images/slideshow4.jpg"}
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 5000
};

}
