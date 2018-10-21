var data =
[{
  promptText: "You're feeling sick, so you head to the doctor's office",
  youAreImgSrc: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg",
  youAreText: 'Things go from bad to worse: you turn into a zombie...',
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
    {
      vocabWord: 'boo',
      vocabText: 'bear',
      vocabImgSrc: 'https://cdn.shopify.com/s/files/1/1023/1451/products/EXE26111_large.jpeg?v=1487277214',
    },
  ],
}]

function init() {
  $('#promptText').text(data[0].promptText)
  $('#youAreImg').attr("src", data[0].youAreImgSrc)
  $('#youAreText').text(data[0].youAreText)
}
// $("#vocabText").text(data[index].vocabText)
// $("#vocabImg").attr("src",data[index].vocabImgSrc)
//loop over vocab array, inserting vocab text into markup
// for (var i = 0; i < 4; i++) {
//   var text = data.vocab[i].vocabWord;
//   $(".word span:eq(" + i + ")").text(text);
// };

//var index = 0
init()
var vocabIndex = 0;
function update(targetId) {
  var jqTarget = $("#" + targetId)
  var word = data[0].vocab[vocabIndex]
  //jqTarget.text('updated')
  jqTarget.html(
    '<span class="vocabWord">' +  word.vocabWord +
    ' </span> <i class="fa fa-info-circle"></i>  <i class="fa fa-check-circle"></i>'
  )
  jqTarget.attr('id', vocabIndex)
  vocabIndex++
}
update("a")
update('b')
update('c')
update('d')

//console.log(vocabIndex)
//when vocab info is clicked, show definition text and image
$("i.fa-info-circle").on("click", function(){
  var id = $(this).parent().attr('id')
  //console.log($(this).parent().attr('id'))
  //$('#definition #vocabText').text($(this).parent().attr('id'))
  $('#definition #vocabText').text(data[0].vocab[id].vocabText)
  $('#definition #vocabImg').attr('src',data[0].vocab[id].vocabImgSrc)


  //var def = $(this).parent().next('.definition')
  //  def.toggleClass('hide')
  //def.slideToggle();

  //$(this).next('.definition').toggleClass('hide');
  // //get id of clicked word
  // var id = $(this).parent().attr("id");
  // //get clicked word's explanation text from data's vocab object
  // var expText = data[0].vocab[id].vocabText;
  // console.log(expText);
  // //display explanation text in explanation section
  // $("#vocabImg").next().text(expText);
  // //get clicked word's explanation img from data's vocab object
  // var expImg = data[0].vocab[0].vocabImgSrc;
  // //display explanation image in explanation section
  // $("#vocabImg").attr("src", expImg);
})

//when check is clicked
$("i.fa-check-circle").on("click", function(){
  console.log($(this).parent().attr('id'))
  var next =$(this).parent().attr('id')
  update(next)

  // //strike the item thru
  // $(this).parent().css('text-decoration', 'line-through');
  // //fade out and remove the item
  // $(this).parent().fadeOut(function() {
  //   console.log(this.parent().attr('id'))
  //   refresh($(this).parent().attr('id'))
  // //get new vocab word
  // var text = data.vocab[vocabIndex].vocabWord;
  // //replace deleted text with new vocab word
  // $(".word span:eq(" + this.id + ")").text(text);
  // $(this).css('text-decoration', 'none');
  // $(this).show();
})
//takes data.vocab index and creates option cards for each


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
