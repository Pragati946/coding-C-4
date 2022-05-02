// Ude Import export (MANDATORY)

// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let apiCall = async(url)=>{
    try{
  let res = await fetch(url);
  let data = await res.json();
  return data;
    }
    catch(err){
        console.log(err);
    }
}

  let appendNews = (articles,main)=>{
      main.innerHTML=null;

      articles.map((el)=>{
          let div = document.createElement("div");
     div.setAttribute("id","detailed_news");
     div.addEventListener("click",()=>{
         selectedNews(el);
     })

     let img = document.createElement("img");
     img.src = el.urlToImage;

     let title = document.createElement("h3");
     title.innerText=el.title;

     let content = document.createElement("p");
     content.innerText=el.content

     div.append(img.ATTRIBUTE_NODE,title,content);
     main.append(div);
      })
  }

  let selectedNews=(el)=>{
      localStorage.setItem("news",JSON.stringify(el));
      window.location.href="./news.html";
  }

  let main = docuemnt.getElementById("results");




import{apiCall,appendNews} from "./scripts/index.js";

let data  = apiCall(`https://masai-mock-api.herokuapp.com/news?q= `)
let data1 = data.then(function(resp){
  appendNews(resp,main);
}).catch(function(err){
  console.log(err);
})
document.getElementById("search_input").addEventListener("keypress",()=>{
  search(event);
})

let search = async(e)=>{
if(e.code=="Enter"){
  let input = document.getElementById("search_input").value;
  localStorage.setItem("newss",JSON,stringify(input))
  window.location.href="./search.html"
}
}


let categories = document.getElementById("categories").children;

function cSearch(){
    console.log(this.id);
    
       searchImages(API,this.id).then((data)=>{
          
        console.log(data);
        let container = document.getElementById("sidebar")
        container.innerHTML=null;
        append(data.results,container)
        });
    }



for(let el of categories){
    el.addEventListener("click",cSearch);
}
  export {apiCall,appendNews}