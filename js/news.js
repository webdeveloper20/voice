$(document).ready(function () {

    let newsdata =$(".news-list");
    let news = dataNew;
    for (let i = 0; i < news.length; i++) {
        newsdata.append(`<div class="news-item d-flex mt-4"><div class="news-img">
                            <img src="${news[i].img}" alt="">
                        </div>
                        <div class="items-text px-3 pt-2 w-100">
                            <a href = "news-read.html">${news[i].name}<a>
                            <p><span>${news[i].history}</span> . <span>${news[i].time}</span></p>
                        </div></div>`)
    }

    let newssdata =$(".news-listt");
    let newss = data;
    for (let i = 0; i < newss.length; i++) {
        newssdata.append(`<div class="news-item d-flex mt-4"><div class="news-img">
                            <img src="${newss[i].img}" alt="">
                        </div>
                        <div class="items-text px-3 pt-2 w-100">
                            <a href = "news-read.html">${newss[i].name}<a>
                            <p><span>${newss[i].history}</span> . <span>${newss[i].time}</span></p>
                        </div></div>`)
    }

    $("#btnNew").click(function(){
        $(".news-listt").hide()
        $(".news-list").show()
    })

    $("#btnOld").click(function(){
        $(".news-list").hide()
        $(".news-listt").show()
    })




    let readNews =$(".read-new-list");
    let newsData = dataNew;
    for (let i = 0; i < newsData.length; i++) {
        readNews.append(`<div class="newsRead">
                        <div class="items-text pt-2 w-100">
                        <p><span>${newsData[i].time}</span></p>
                        <h6>${newsData[i].name}<h6>
                        </div></div>`)
    }



});