var data =
[{
 promptText: "Nurse asking doctor for a leave",
 youAreImgSrc: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg",
 youAreText: "the nurse",
 vocab: [
   {
     vocabWord: "vacation",
     vocabText: "有休",
     vocabImgSrc: "https://image.shutterstock.com/image-photo/anatomical-tweezers-isolated-on-white-260nw-529351978.jpg",
   },
   {
     vocabWord: "stress",
     vocabText: "ストレス",
     vocabImgSrc: 'https://media.istockphoto.com/photos/thermometer-set-isolated-on-white-picture-id526560402?k=6&m=526560402&s=612x612&w=0&h=5c5FBoZe4QVA9MlomDbT_2UpTfx3j0NqxjdfIg4Eh6g=',
   },
   {
     vocabWord: "migraine",
     vocabText: "頭が痛い",
     vocabImgSrc: 'https://images-na.ssl-images-amazon.com/images/I/91ZkmwMJbWL._AC_SS350_.jpg',
   },
   {
     vocabWord: "medicine",
     vocabText: "薬",
     vocabImgSrc: 'https://cdn.shopify.com/s/files/1/0535/3509/products/Black_Pen_1024x1024_f2fbd04b-d2a3-4ba2-ba3c-508ef4e65ad2_large.jpg?v=1502887399',
   },
 ],
}]
var dataDummy =
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
  //info circle event listener
  $("#" + jqTarget.attr('id') + " i.fa-info-circle").on("click", function(){
    var id = $(this).parent().attr('id')
    $('#definition #vocabText').text(data[0].vocab[id].vocabText)
    $('#definition #vocabImg').attr('src',data[0].vocab[id].vocabImgSrc)
  })

  $("#" + jqTarget.attr('id') + " i.fa-check-circle").on("click", function(){
    //console.log($(this).parent().attr('id'))
    var next =$(this).parent().attr('id')
    update(next)
  })
  vocabIndex++
}
update("a")
update('b')
update('c')
