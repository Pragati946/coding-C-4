// Ude Import export (MANDATORY)
import navbar from "../components/sidebar"

document.getElementById("navbar").innerHTML=navbar();

let news = JSON.parse(localStorage.getItem("news"))
console.log(news);

let div = document.createElement("div");
let tittle = document.createElement("div");
tittle.innerText=news.title;
let img = document.createElement("div");
img.src = news.urlToImage;

let content = document.createElement("div");
content.innerText = news.content;
div.append(img,title,content);

document.getElementById(main).append(div);