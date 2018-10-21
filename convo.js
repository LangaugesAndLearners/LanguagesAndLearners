var data = 
    [{
    promptHeading: "prompt heading",
    promptText: "prompt text",
    youAreHeading: "you are heading",
    youAreImgSrc: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg",
    youAreText: 'you are text',
    vocab: [
      {
        vocabWord: "tweezers",
        vocabText: "tweezers pull things",
        vocabImgSrc: "https://image.shutterstock.com/image-photo/anatomical-tweezers-isolated-on-white-260nw-529351978.jpg",
      },
      {
        vocabWord: "thermometer",
        vocabText: "thermometers measure temperature",
        vocabImgSrc: 'https://media.istockphoto.com/photos/thermometer-set-isolated-on-white-picture-id526560402?k=6&m=526560402&s=612x612&w=0&h=5c5FBoZe4QVA9MlomDbT_2UpTfx3j0NqxjdfIg4Eh6g=',
      },
      {
        vocabWord: "clipboard",
        vocabText: "clipboards hold paper",
        vocabImgSrc: 'https://images-na.ssl-images-amazon.com/images/I/91ZkmwMJbWL._AC_SS350_.jpg',
      },
      {
        vocabWord: "pens",
        vocabText: "pens write",
        vocabImgSrc: 'https://cdn.shopify.com/s/files/1/0535/3509/products/Black_Pen_1024x1024_f2fbd04b-d2a3-4ba2-ba3c-508ef4e65ad2_large.jpg?v=1502887399',
      },
      {
        vocabWord: 'needle',
        vocabText: 'needles pierce skin',
        vocabImgSrc: 'https://cdn.shopify.com/s/files/1/1023/1451/products/EXE26111_large.jpeg?v=1487277214',
      },
    ],
  }]
//TODO DRY add init class and script thru it

//pass in array of indexes
function refresh(index) {
  $.each($("h2, p"), function(index, val) {
    console.log('hey')
    //val.text(data[0][this.id])
    //console.log(this.id)
  })
  //css('color', 'red');
  //$("h2, p").each()
 // $("h2, p").text(data[index].this.id)
  // $("#promptHeading").text(data[index].promptHeading)
  // $("#promptText").text(data[index].promptText)
  // $("#youAreHeading").text(data[index].youAreHeading)
  // $("#youAreImg").attr("src",data[index].youAreImgSrc)
  // $("#youAreText").text(data[index].youAreText)
  // $("#vocabText").text(data[index].vocabText)
  // $("#vocabImg").attr("src",data[index].vocabImgSrc)
//loop over vocab array, inserting vocab text into markup
  // for (var i = 0; i < 4; i++) {
  //   var text = data.vocab[i].vocabWord;
  //   $(".word span:eq(" + i + ")").text(text);
  // };
}
var index = 0
refresh(index)

var vocabIndex = 4;
//when vocab info is clicked, show definition text and image
$("i.fa-info-circle").on("click", function(){
  //get id of clicked word
  var id = $(this).parent().attr("id");
  //get clicked word's explanation text from data's vocab object
  var expText = data.vocab[id].vocabText;
  //display explanation text in explanation section
  $("#vocabText").text(expText);
  //get clicked word's explanation img from data's vocab object
  var expImg = data.vocab[id].vocabImgSrc;
  //display explanation image in explanation section
  $("#vocabImg").attr("src", expImg);
})

//when check is clicked
$("i.fa-check-circle").on("click", function(){
  //strike the item thru
  $(this).parent().css('text-decoration', 'line-through');
  //fade out and remove the item
  $(this).parent().fadeOut(function() {
    //get new vocab word
    var text = data.vocab[vocabIndex].vocabWord;
    //replace deleted text with new vocab word
    $(".word span:eq(" + this.id + ")").text(text);
    $(this).css('text-decoration', 'none');

    $(this).show();
    vocabIndex++;
  });

})
//takes data.vocab index and creates option cards for each

//TODO
// function generate(in){
//   var out = <p>;
//
// }
// for (var i = 0; i < 4; i++) {
//   generate(data.vocab[i])
// }

// <span class = 'word' id='0'>
//   <span></span>
//   <i class="fa fa-info-circle"></i>
//   <i class="fa fa-check-circle"></i>
