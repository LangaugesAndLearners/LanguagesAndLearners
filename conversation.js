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
  },
};
$(".word i").on("click", function(){
  var a = $(this).parent().attr("id");
  var b = data.words[a].text;
  $(this).prev().text(b);
  // console.log('click')
})
function init() {
  $("#promptHeading").text(data.promptHeading)
  $("#promptText").text(data.promptText)
  $("#youAreHeading").text(data.youAreHeading)
  $("#youAreImg").attr("src",data.youAreImgSrc)
  $("#youAreText").text(data.youAreText)
  $("#wordExplanationText").text(data.wordExplanationText)
  $("#wordExplanationImg").attr("src",data.wordExplanationImgSrc)
  for (var i = 0; i < 4; i++) {
    $(".word span:eq(" + i + ")").css( "backgroundColor", "#ff0" );
    var a = $(".word span:eq(" + i + ")").text();
    console.log(a);
    var b = data.words[a];
    console.log(b);
  };
}
init()
