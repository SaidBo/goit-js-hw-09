const t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),bodyBackgroundColor:document.querySelector("body")};let o=null;t.stopButton.disabled=!0,t.startButton.addEventListener("click",(function(){t.startButton.disabled=!0,t.stopButton.disabled=!1,o=setInterval((()=>{t.bodyBackgroundColor.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopButton.addEventListener("click",(function(){clearTimeout(o),t.startButton.disabled=!1,t.stopButton.disabled=!0})),t.startButton.style.backgroundColor="green",t.stopButton.style.backgroundColor="tomato";
//# sourceMappingURL=01-color-switcher.a14b12d2.js.map