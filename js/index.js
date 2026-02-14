//! home sidebar start
const btnOpenSideBar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSideBar = document.querySelector("#close-sidebar");
btnOpenSideBar.addEventListener("click", function(){
  sidebar.style.left = "0";
 
})
btnCloseSideBar.addEventListener("click", function(){
   sidebar.style.left = "-100%"
})
console.log(btnOpenSideBar);
// * click outside start
document.addEventListener("click", function(event){
    if (
        !event.composedPath().includes(sidebar) && 
        !event.composedPath().includes(btnOpenSideBar)
    ){
        sidebar.style.left = "-100%";
    }
});
// * click outside end

//! home sidebar end

// ! search modal start
const btnOpenSearch = document.querySelector(".search-button");
const modalSearchWrapper = document.getElementsByClassName("modal-search-wrapper");
const btnCloseSearch = document.getElementById("close-search");

btnOpenSearch.addEventListener("click", function(){
    modalSearch[0].style.visibility = "visible";
    modalSearch[0].style.opacity = "1";

});

btnCloseSearch.addEventListener("click", function(){
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "0";

});
// ! search modal end

// * click outside start
document.addEventListener("click", function(event){
    if(
        !event.composedPath().includes(btnOpenSearch) &&
        !event.composedPath().includes(modalSearchWrapper)
    ){
        modalSearch[0].style.visibility = "hidden";
        modalSearch[0].style.opacity = "0";
    }
});
// * click outside end


