(function () {
  document.documentElement.classList.add("no-copy");

  var style = document.createElement("style");
  style.textContent =
    "html.no-copy,html.no-copy body,html.no-copy body *{" +
    "-webkit-user-select:none!important;user-select:none!important;" +
    "-webkit-touch-callout:none!important}" +
    "html.no-copy input,html.no-copy textarea{" +
    "-webkit-user-select:text!important;user-select:text!important}";
  document.head.appendChild(style);

  ["copy", "cut", "contextmenu", "dragstart"].forEach(function (eventName) {
    document.addEventListener(eventName, function (event) {
      event.preventDefault();
    });
  });
})();
