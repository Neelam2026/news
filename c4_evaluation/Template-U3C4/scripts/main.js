async function apiCall(url) {
try{

    let res=await fetch(url)
    let data=await res.json()
    return data;
}
catch(err){
    console.log(err)
}
    


}


function appendArticles(articles, main) {
    articles.map(function(el){
        let div1=document.createElement("div")
        div1.id="div1"
        let div4=document.createElement("div")
        div4.textContent=el.title;
        let div2=document.createElement("div")
        let img1=document.createElement("img")
        img1.src=el.urlToImage;
        img1.id="img1"
        div2.append(img1)
        let div3=document.createElement("div")
        div3.textContent=el.source.name

        div1.append( div4,div2,div3)
        div1.addEventListener("click", function(){
            showdata(el)
        })
        main.append(div1)  

    })
   

}
var array=[];
var showdata=(data)=>{
    array.push(data)
    localStorage.setItem("news",JSON.stringify(array));
    window.location.href="news.html"
}

export { apiCall, appendArticles }