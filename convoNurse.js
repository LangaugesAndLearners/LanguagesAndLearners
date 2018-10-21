var data =
{
 promptText: "医者に休暇を頼んでる看護婦 \n (Nurse asking doctor for a leave)",
 youAreImgSrc: "http://getdrawings.com/cliparts/male-nurse-clipart-1.jpg",
 youAreText: "看護婦 (the nurse)",
 vocab: [
   {
     vocabWord: "vacation",
     vocabText: "有休",
     vocabImgSrc: "http://worldartsme.com/images/rest-clipart-1.jpg",
   },
   {
     vocabWord: "stress",
     vocabText: "ストレス",
     vocabImgSrc: 'https://cf.ltkcdn.net/stress/images/std/189518-425x425-Funny-Stressful-Clipart-2.jpg',
   },
   {
     vocabWord: "migraine",
     vocabText: "頭が痛い",
     vocabImgSrc: 'https://cf.ltkcdn.net/stress/images/orig/189518-500x500-Funny-Stressful-Clipart-2.jpg',
   },
   {
     vocabWord: "medicine",
     vocabText: "薬",
     vocabImgSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Medicine_Drugs.svg',
   },
 ],
}
var dataOld =
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

function init() {
  $('#promptText').text(data.promptText)
  $('#youAreImg').attr("src", data.youAreImgSrc)
  $('#youAreText').text(data.youAreText)
}
init()

var vocabIndex = 0;

function update(targetId) {
  var jqTarget = $("#" + targetId)
  var word = data.vocab[vocabIndex]
  //jqTarget.text('updated')
  jqTarget.html(
    '<span class="vocabWord">' +  word.vocabWord +
    ' </span> <i class="fa fa-info-circle"></i>  <i class="fa fa-check-circle"></i>'
  )
  jqTarget.attr('id', vocabIndex)
  //info circle event listener
  $("#" + jqTarget.attr('id') + " i.fa-info-circle").on("click", function(){
    $('.vocab').removeClass('selected')
    var parent = $(this).parent();
    var id = parent.attr('id')
    $('#definition #vocabText').text(data.vocab[id].vocabText)
    $('#definition #vocabImg').attr('src',data.vocab[id].vocabImgSrc)
    parent.addClass('selected')
  })

  $("#" + jqTarget.attr('id') + " i.fa-check-circle").on("click", function(){
    $('#score span').text('500')
    var parent = $(this).parent()
    parent.removeClass('selected')
    var id = parent.attr('id')
    update(id)
  })
  vocabIndex++
}
update("a")
update('b')
update('c')
