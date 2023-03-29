gsap.registerPlugin(ScrollTrigger);


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3.3
        }
    }
})
$(".bar").click(function(){
    $(".phonediv").fadeToggle();
 })
 $(".closingtag").click(function(){
     $(".phonediv").fadeToggle();
  })

  
  
  gsap.from(".mainbannercontent *",{
    duration:1.5,scale:0.3,y:300, stagger:0.25

  })
  gsap.from(".secondbannercontent *",{
    scrollTrigger:{
      trigger:".secondbanner",
      start:"top center",
      // markers:fasle,

    },
    duration:1.5,scale:0.5, stagger:0.25,y:300

  })
  gsap.from(".secondbannercontent2  > .secondbannercontent21",{
    scrollTrigger:{
      trigger:".secondbanner",
      start:"top center",
      // markers:false,

    },
    duration:2,
    y:300, 
     delay:1, stagger:0.25 ,y:300, opacity:0.3,scale:0.7

  })
  // gsap.from(".secondbannercontent2",{
  //   scrollTrigger:{
  //     trigger:".secondbanner",
  //     start:"top center",
  //     // markers:false,

  //   },
  //   duration:2,scale:0.5,y:300, opacity:0.5, delay:1, stagger:0.25 ,y:300

  // })
  gsap.from(".thirdbannermaincontent1",{
    scrollTrigger:{
      trigger:".thirdbanner",
      start:"top center",
      // markers:false,

    },
    duration:1.5,scale:0.7, delay:1,stagger:0.25, opacity:0
    

  })
  gsap.from(".thirdbannermaincontent2",{
    scrollTrigger:{
      trigger:".thirdbanner",
      start:"top center",
      // markers:false,

    },
    duration:1.5,scale:0.7, delay:1, stagger:0.25,opacity:0
    

  })
  gsap.from(".thirdbannermaincontent3",{
   
    
      scrollTrigger:{
        trigger:".thirdbanner",
        start:"top center",
        // markers:flase,
  
      },
    duration:1.5,scale:0.7, delay:1,  stagger:0.25,opacity:0

  })
  gsap.from(".thirdbannercontent1",{
    
      scrollTrigger:{
        trigger:".thirdbanner",
        start:"top center",
        // markers:flse,
  
      },
    duration:1.5,scale:0.7,y:300, opacity:0, stagger:0.25,

  })
  gsap.from(".fourthbannercontent *",{
    
      scrollTrigger:{
        trigger:".fourthbanner",
        start:"top center",
        // markers:false,
  
      },
    duration:1.5, stagger:0.25, opacity:0,scale:0.7

  })
  gsap.from(".imagegallery > .gallery",{
    scrollTrigger:{
      trigger:".fourthbanner",
      start:"top center",
      // markers:true,

    },
    duration:1,scale:0, stagger:0.25

  })
  gsap.from(".fifthbannercontent *",{
    scrollTrigger:{
      trigger:".fifthbanner",
      start:"top center",
      // markers:false,

    },
    duration:1.5,scale:0.5, y:300, stagger:0.25, opacity:0.7

  })
  gsap.from(".item1 ",{
    scrollTrigger:{
      trigger:".fifthbanner",
      start:"top center",
      // markers:false,

    },
    duration:1.5,scale:0.7,y:300, stagger:0.25, opacity:0.5

  })
  gsap.from(".sixthbannercontent * ",{
    scrollTrigger:{
      trigger:".sixthbanner",
      start:"top center",
      // markers:false,

    },
    duration:1,scale:0.7, stagger:0.20, opacity:0.5

  })
  gsap.from(".sixthbannercontact1",{
    scrollTrigger:{
      trigger:".sixthbanner",
      start:"top center",
      // markers:false

    },
    duration:1.5,scale:0.7, stagger:0.25 ,opacity:0.5

  })
  gsap.from(".sixthbannercontact2",{
    scrollTrigger:{
      trigger:".sixthbanner",
      start:"top center",
      // markers:false,

    },
    duration:1.5,scale:0.7,delay:1, opacity:0.5

  })
  gsap.to(".parachute5",{
    scrollTrigger:{
      trigger:".sixthbanner",
      start:"top center",
      // markers:false,

    },
    duration:2,y:350

  })
  gsap.to(".cat",{
    scrollTrigger:{
      trigger:".thirdbanner",
      start:"top center",
      // markers:false,

    },
    duration:2,x:100

  })
  // gsap.from(".teacher",{
  //   scrollTrigger:{
  //     trigger:".secondbanner",
  //     start:"top center",
  //     // markers:false,

  //   },
  //   duration:2,scale:0.3

  // })
  
  
  // if(window.matchMedia('(max-width:426px)').matches){
    
    gsap.from(".phonediv1 * ",{
        duration:2,opacity:0,stagger:0.25, x:500
    })
    gsap.from(".closingtag",{
        duration:2,opacity:0,scale:0.3,x:500
    })
    gsap.from(".aboutsecondbannercontent *",{
      scrollTrigger:{
        trigger:".aboutsecondbanner",
        start:"top center",
        // markers:false,
  
      },
      duration:1.5,scale:0.7,opacity:0,stagger:0.25
  
    })
    gsap.from(".aboutimagecontainer",{
      scrollTrigger:{
        trigger:".aboutsecondbanner",
        start:"top center",
        // markers:false,
  
      },
      duration:1.5,scale:0.7, opacity:0.5
  
    })
    gsap.to(".parachute",{
      scrollTrigger:{
        trigger:".secondbanner",
        start:"top center",
        // markers:false,
  
      },
      duration:10,x:900
  
    })
    if(window.matchMedia('(max-width:426px)').matches){
      gsap.to(".parachute5",{
        scrollTrigger:{
          trigger:".sixthbanner",
          start:"top center",
          // markers:false,
    
        },
        duration:2,y:700
    
      })


    }
    if(window.matchMedia('(max-width:426px)').matches){
      gsap.from(".secondbannercontent2  > .secondbannercontent21",{
        scrollTrigger:{
          trigger:".secondbanner",
          start:"top center",
          // markers:false,
    
        },
        duration:2,scale:0.5,y:300, opacity:0.5, delay:1, stagger:0.25 ,y:300
    
      })

    }

    
    
    
    
    
// } 




  


