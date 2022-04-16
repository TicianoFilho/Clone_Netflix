
//Código do JQuery Owl Carousel link: https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:8
        }
    }
})