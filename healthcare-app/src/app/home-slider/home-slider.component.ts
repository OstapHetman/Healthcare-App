import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    // $('.carousel').carousel();
    // setInterval(function() {
    //   $('.carousel').carousel('next');
    // }, 10000); // every 2 seconds
  }

}
