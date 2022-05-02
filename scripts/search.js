// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import{apiCall,AppendNews} from "./index";

let main = document.getElementById("search_input")
let input = JSON.parse(localStorage.getItem("news"))
let data2 = apiCall(`https://masai-mock-api.herokuapp.com/news?q=${query}`)

let data1 = data2.then(function(resp){
    appendNews(resp,main);
}).catch(function(err){
    console.log(err);
})