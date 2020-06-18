// code for link of topics, mobile version
var articles = document.querySelectorAll(".articlelist article"),i;

for (i = 0; i < articles.length; i++) {
    articles[i].addEventListener('click', redirect => {
        var viewWidth = window.innerWidth;
        console.log(viewWidth);
        if (viewWidth < 768) {
            window.location.href = "articlemondkapje.html";
        }
    });
}