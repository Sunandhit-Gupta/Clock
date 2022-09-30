function watch() {
    let a = new Date();
    let b = a.getTime();
    let c = a.getHours();
    let d = a.getMinutes();
    let e = a.getSeconds();
    let l = a.getDate();
    let m = a.getMonth();
    let o = a.getFullYear();
    let p = l+"/"+m+"/"+o ;
    let j = c + ":" + d + ":" + e;
    f = document.getElementById("ck");
    f.innerHTML = j;

    k = document.getElementById("dt");
    k.innerHTML = "dd/mm/yy = "+ p;

setTimeout(watch,0);                 
}
