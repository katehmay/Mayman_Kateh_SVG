(() => {
	// stub
	console.log('fired!');

  //------------selecting elements--------//

  let boulderSVG = document.querySelector("#boulder"),
      cascadeSVG = document.querySelector("#cascade"),
      thunderSVG = document.querySelector("#thunder"),
      rainbowSVG = document.querySelector("#rainbow"),
      soulSVG = document.querySelector("#soul"),
      marshSVG = document.querySelector("#marsh"),
      volcanoVG = document.querySelector("#volcano"),
      earthSVG = document.querySelector("#earth"),
      zephyrSVG = document.querySelector("#zephyr"),
      hiveSVG = document.querySelector("#hive"),
      plainSVG = document.querySelector("#plain"),
      fogSVG = document.querySelector("#fog"),
      stormSVG = document.querySelector("#storm"),
      mineralSVG = document.querySelector("#mineral"),
      glacierSVG = document.querySelector("#glacier"),
      risingSVG = document.querySelector("#rising");

  //----------functions begin here--------//

  function logMyId() {
  console.log(this.id);

  this.style.opacity = 0.5;
}

  //-----------events begin here---------//

  boulderSVG.addEventListener("click", logMyId);
  cascadeSVG.addEventListener("click", logMyId);
  thunderSVG.addEventListener("click", logMyId);
  rainbowSVG.addEventListener("click", logMyId);
  soulSVG.addEventListener("click", logMyId);
  marshSVG.addEventListener("click", logMyId);
  volcanoVG.addEventListener("click", logMyId);
  earthSVG.addEventListener("click", logMyId);
  zephyrSVG.addEventListener("click", logMyId);
  hiveSVG.addEventListener("click", logMyId);
  plainSVG.addEventListener("click", logMyId);
  fogSVG.addEventListener("click", logMyId);
  stormSVG.addEventListener("click", logMyId);
  mineralSVG.addEventListener("click", logMyId);
  glacierSVG.addEventListener("click", logMyId);
  risingSVG.addEventListener("click", logMyId);

})();
