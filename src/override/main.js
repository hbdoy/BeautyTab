function initLoad(){
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/100/1');
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            console.log(data.results.length);
            var index = Math.floor(Math.random() * data.results.length);
            showImg(data, index);
        }
    }
    xhr.send();
}
initLoad();

function showImg(data, index){
    var result = document.getElementById('result');
    var tmp = document.createElement("IMG");
    // console.log(data.results[index].url);
    tmp.src = data.results[index].url;
    tmp.className = "img-fluid rounded";
    result.appendChild(tmp);
}
