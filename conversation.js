var data = {
  promptHeading: "prompt heading",
  promptText: "prompt text........",
  youAreHeading: "you are heading",
  youAreImgSrc: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg",
  youAreText: 'you are text........',
  //wordExplanationText: 'word explanation text.......',
  //wordExplanationImgSrc: "https://image.shutterstock.com/image-photo/anatomical-tweezers-isolated-on-white-260nw-529351978.jpg",
  words: {
    word1: {
      text: "tweezers",
      wordExplanationText: "tweezers pull things",
      wordExplanationImgSrc: "https://image.shutterstock.com/image-photo/anatomical-tweezers-isolated-on-white-260nw-529351978.jpg",
    },
    word2: {
      text: "thermometer",
      wordExplanationText: "thermometers measure temperature",
      wordExplanationImgSrc: 'https://media.istockphoto.com/photos/thermometer-set-isolated-on-white-picture-id526560402?k=6&m=526560402&s=612x612&w=0&h=5c5FBoZe4QVA9MlomDbT_2UpTfx3j0NqxjdfIg4Eh6g=',
    },
    word3: {
      text: "clipboard",
      wordExplanationText: "clipboards hold paper",
      wordExplanationImgSrc: 'https://images-na.ssl-images-amazon.com/images/I/91ZkmwMJbWL._AC_SS350_.jpg',
    },
    word4: {
      text: "pens",
      wordExplanationText: "pens write",
      wordExplanationImgSrc: 'https://cdn.shopify.com/s/files/1/0535/3509/products/Black_Pen_1024x1024_f2fbd04b-d2a3-4ba2-ba3c-508ef4e65ad2_large.jpg?v=1502887399',
    },
  },
};

function init() {
  $("#promptHeading").text(data.promptHeading)
  $("#promptText").text(data.promptText)
  $("#youAreHeading").text(data.youAreHeading)
  $("#youAreImg").attr("src",data.youAreImgSrc)
  $("#youAreText").text(data.youAreText)
  $("#wordExplanationText").text(data.wordExplanationText)
  $("#wordExplanationImg").attr("src",data.wordExplanationImgSrc)
//loop over vocabularly words, inserting word names into markup
  for (var i = 0; i < 4; i++) {
    var id = $(".word span:eq(" + i + ")").parent().attr("id");
    var name = data.words[id].text;
    $(".word span:eq(" + i + ")").text(name);
  };
}
init()
//when vocab info is clicked
$(".word i").on("click", function(){
  //get id of clicked word
  var id = $(this).parent().attr("id");
  //get clicked word's explanation text from data's words object
  var expText = data.words[id].wordExplanationText;
  //display explanation text in explanation section
  $("#wordExplanationText").text(expText);
  //get clicked word's explanation img from data's words object
  var expImg = data.words[id].wordExplanationImgSrc;
  //display explanation image in explanation section
  $("#wordExplanationImg").attr("src", expImg);
})
