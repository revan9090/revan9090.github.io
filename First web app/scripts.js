let photo = "photo"
let title = "photo-title"
let description = "photo-description"

// $('#photo').text(data.title)

let imagesData = ['Pictures/photo0.jpg','Pictures/photo1.jpg','Pictures/photo2.jpg',
    'Pictures/photo3.jpg','Pictures/photo4.png','Pictures/photo5.jpg',
    'Pictures/photo6.jpg','Pictures/photo7.png','Pictures/photo8.jpg',
    'Pictures/photo9.jpg',]

let Photo = 0;

// $('#photo').attr('src',imagesData[Photo]);


let loadPhoto = (photoNumber) => {
    $('#photo').attr('src',imagesData[photoNumber]);
    $('#photo-title').text(imagesData[photoNumber].Title);
    $('#photo-description').text(imagesData[photoNumber].Description);
    
  
}

loadPhoto(Photo);

$('#right').click(() => {
    if(Photo < 9) {
  Photo++;
    }
  loadPhoto(Photo);
})

$('#left').click(() => {
    if(Photo > 0){
    Photo--;
}
    loadPhoto(Photo);
  })



  // data.forEach((item, index) => {
  //   $('#container').append(`<div class="box" images="${index}">${item} (data-index="${index}")</div>`);
  //   $('.box').click((event) => {
  //     let indexClicked = $(event.target).attr('data-index');
  //     let numberIndex = parseInt(indexClicked);
  //     $('#clicked').text(data[indexClicked]);
  //   });
  // });


  var lastImg = 1; //Set initial thumbnail and preview
  document.getElementById(photo).src = document.getElementById(lastImg).src;
  document.getElementById(lastImg).className = "thumb selected";

  function preview(img) {
      document.getElementById(lastImg).className = "thumb normal";
      img.className = "thumb selected";
      document.getElementById(photo).src = img.src;
      lastImg = img.id
  }

 

let Photo0 = {
Photo: 'Pictures/photo0.jpg',
Title: 'Quark',
Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tortor ipsum.'
};

let Photo1 = {
Photo: 'Pictures/photo1.jpg',
Title: 'Nice lake',
Description: 'Vivamus tempus risus tellus, id convallis ex faucibus quis. Mauris in blandit risus, ac volutpat ligula. Praesent eget sodales ipsum, vitae semper quam.'
};

let Photo2 = {
Photo: 'Pictures/photo2.jpg',
Title: 'Colorful storm',
Description: 'Mauris id pharetra neque. Aenean at nisl eu turpis volutpat pharetra at et mi. Curabitur ultrices ultrices ex vitae vehicula.'
};

let Photo3 = {
Photo: 'Pictures/photo3.jpg',
Title: 'Serene waterfall',
Description: 'Duis sit amet ante in urna tincidunt ultrices. Quisque ac porttitor lorem, a pharetra nisi.'
};

let Photo4 = {
Photo: 'Pictures/photo4.png',
Title: 'Greeny Jungle',
Description: 'Aenean tempus tempus risus, et placerat nisi egestas sed.'
};

let Photo5 = {
Photo: 'Pictures/photo5.jpg',
Title: 'The Final Frontier',
Description: 'Ut vel sollicitudin velit. Ut viverra eros ipsum, non sagittis elit finibus et. Duis vulputate scelerisque mollis. Nullam purus ligula, tincidunt nec finibus vel, consequat ac justo.'
};

let Photo6 = {
Photo: 'Pictures/photo6.jpg',
Title: 'To boldly go...',
Description: 'Proin luctus arcu velit, eget suscipit quam fermentum quis. Cras a mattis lectus, eu sollicitudin libero.'
};

let Photo7 = {
Photo: 'Pictures/photo7.png',
Title: 'Reapers...everywhere...',
Description: 'Sed eleifend turpis in velit elementum rhoncus. Sed faucibus pulvinar turpis, ut efficitur nulla viverra nec. Sed a tincidunt est, ac auctor arcu.'
};

let Photo8 = {
Photo: 'Pictures/photo8.jpg',
Title: 'A long time ago in a galaxy far far away...',
Description: 'Nunc eu tristique arcu, eget rhoncus est. Mauris sed nisi mollis, auctor justo et, vestibulum nisl. Maecenas ac risus ut lacus ultricies aliquet. Integer eleifend sapien nec nisl tempus laoreet. Sed eget viverra arcu.'
};

let Photo9 = {
Photo: 'Pictures/photo9.jpg',
Title: "It's just another universe" ,
Description: 'Praesent eros quam, egestas vel elit eget, dapibus dapibus purus. Nulla efficitur arcu id vestibulum vestibulum. Suspendisse risus magna, bibendum eget tortor at, viverra ultrices metus.'
};

let imagesData1 = [Photo0,Photo1,Photo2,Photo3,Photo4,Photo5,Photo6,Photo7,Photo8,Photo9]


if ($('#photo') === 'Pictures/photo0.jpg') {
  $('#photo-title').text(Photo0.Title)
  $('#photo-description').text(Photo0.Description)

  
}
