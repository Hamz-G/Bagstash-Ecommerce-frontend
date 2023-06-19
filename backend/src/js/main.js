var WebFont = require("webfontloader");
import Swiper, { Navigation, Pagination, Autoplay, EffectFade   } from 'swiper'; 

Swiper.use([Navigation, Pagination, Autoplay, EffectFade ]);
WebFont.load({
  google: {
    families: ["Poppins:200,300,400,500,600,700,800,900:latin,latin-ext,greek"],
  },
});



const announcements = [ 
    {
        id: 0,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        image: "images/black_250x250.gif"
    },
    { 
      id: 1,
        title: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature",  
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        image: "images/grey_250x250.gif"
    },
    { 
      id: 2,
        title: "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        image: "images/white_250x250.gif"
    },
    { 
      id: 3,
        title: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",   
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        image: "images/black_250x250.gif"
    },
    { 
      id: 4,
        title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        image: "images/white_250x250.gif"
    } 
  ];
 
  function announcementsToHtml(announcements) { 
    var output = "";
    var i=0;
    Array.prototype.forEach.call(announcements, function(e) {
      output += '<div class="swiper-slide" data-id="'+i+'"><a href="javascript:void(0)">'+e.title+'</a></div>'
      i++;
    }) 
    const swiper = new Swiper('.announcementSlider', { 
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
      autoplay: {
        delay: 3000,
    },
    })
    return output;
  }
 if(document.getElementById('announcements')){
    var announcementsUL =  document.getElementById('announcements').querySelector('.announcements_list > .swiper > .swiper-wrapper');
    if(announcementsUL) {
      announcementsUL.innerHTML= announcementsToHtml(announcements);
      Array.prototype.forEach.call(announcementsUL.querySelectorAll('.swiper-slide'), function(li) {
      li.querySelector('a').addEventListener('click', function(a) {
        var thisLi = a.target.parentElement.getAttribute('data-id');
        var thisHTML = '<div class="title"><h3>'+announcements[thisLi].title+'</h3></div> <div class="content"><img src="'+announcements[thisLi].image+'" alt="" /><p>'+announcements[thisLi].content+'</p></div>'
        var container = document.getElementById('announcementContent');
        container.innerHTML = thisHTML
        document.getElementById('announcementPopup').classList.add('active')
      })
      })
    }
 }
 
 /**
  * Close Announcement Popup
  */
const closePopupButton = document.getElementById('closePopup');
if(closePopupButton) {
  closePopupButton.addEventListener('click', function() {
    document.getElementById('announcementPopup').classList.remove('active')
  })
}

/**
   * Close Popup when Click outside
  */
 document.addEventListener('click', function (e) {
  if (document.getElementById('announcementPopup').classList.contains('active')) { 
      if (!document.getElementById('announcementPopup').querySelector('.inner').contains(e.target) && e.target == document.getElementById('announcementPopup')) {
        document.getElementById('announcementPopup').classList.remove('active')
      }
  }
})

var announcementPage = document.getElementById('announcements2');
 if(announcementPage) {
  Array.prototype.forEach.call(announcementPage.querySelectorAll('.announcement'), function(item) {
      item.addEventListener('click', function(x) {
        var thisLi = x.target.getAttribute('data-id');
        var thisHTML = '<div class="title"><h3>'+announcements[thisLi].title+'</h3></div> <div class="content"><img src="'+announcements[thisLi].image+'" alt="" /><p>'+announcements[thisLi].content+'</p></div>'
        var container = document.getElementById('announcementContent');
        container.innerHTML = thisHTML
        document.getElementById('announcementPopup').classList.add('active')
      })
  });
 }