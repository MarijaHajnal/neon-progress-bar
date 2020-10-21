var progress = document.getElementById("progressbar");
var btn = document.getElementById("btn");
var num = 100;

btn.onclick = function() {runProgressBar()};

function runProgressBar() {
    var progMove = setTimeout(runProgressBar, 50);
    progress.style.width = num+"%";
    if (num>0) {
      num--
      btn.style.borderColor = "rgba(48, 205, 14, 1)";
      btn.style.color = "#C9F404";
      btn.style.boxShadow  = "0 0 2vmin rgba(48, 205, 14, 0.5)";
    }else {
      num=100;
      clearTimeout(progMove);
    }
 }
