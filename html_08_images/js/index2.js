document.addEventListener("DOMContentLoaded", () => {
  // image_view box 의 img tag 를 한번에 select 하기
  // const image_view = document.querySelector("div.image_view img")

  // image_view box 를 한번 select  하고
  // image_view box 가 포함하는 img tag 를 또 한번 select 하기
  const image_view_box = document.querySelector("div.image_view");
  const image_view = image_view_box?.querySelector("img");

  // ticker 이미지를 클릭하면 view Box 에 이미지 보여주기
  const tickerOnClickHandler = (event) => {
    // event 는 div.image_ticker box 에서 발생하지만
    // event.target 은 가장 안쪽의 img 가 된다
    const target = event.target;
    // click 된 image 의 src 속성값을
    // image_view box 의 img src 속성에 복사하기
    image_view.src = target.src;
  };
  const tickerBox = document.querySelector("div.image_ticker");
  tickerBox?.addEventListener("click", tickerOnClickHandler);

  // event 버블링을 이용하지 않을 경우
  // slide image 들을 모두 select 하여 배열로 만들기
  const tickerImages = document.querySelectorAll("div.image_box img");
  for (let index = 0; index < tickerImages.length; index++) {
    tickerImages[index].addEventListener("click", () => {
      // todo ticker image view 에 보이기
    });
  }
});
