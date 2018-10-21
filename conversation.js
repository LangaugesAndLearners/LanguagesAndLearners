var data = {
  promptHeading: "prompt heading",
  promptText: "prompt text........",
  youAreHeading: "you are heading",
  youAreImgSrc: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg",
  youAreText: 'you are text........',
  wordExplanationText: 'word explanation text.......',
  wordExplanationImgSrc: "https://image.shutterstock.com/image-photo/anatomical-tweezers-isolated-on-white-260nw-529351978.jpg"
  words {

  }
};
// console.log($("#promptHeadline").text());
$("#promptHeading").text(data.promptHeading)
$("#promptText").text(data.promptText)
$("#youAreHeading").text(data.youAreHeading)
$("#youAreImg").attr("src",data.youAreImgSrc)
$("#youAreText").text(data.youAreText)
$("#wordExplanationText").text(data.wordExplanationText)
$("#wordExplanationImg").attr("src",data.wordExplanationImgSrc)
$(".word").
