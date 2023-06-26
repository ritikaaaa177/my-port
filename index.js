var infolinks = document.getElementsByClassName("info-link");
var infocontents = document.getElementsByClassName("list-contents");
function opentab(id){
    for(infolink of infolinks){
        infolink.classList.remove("active-link");
    }

    for(infocontent of infocontents)
    {
        infocontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(id).classList.add("active-tab");



}