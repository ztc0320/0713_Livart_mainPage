$(function(){
    var res;
    var money = [];
    for(var i = 0; i < 7; i++){
        money[i] = $(".goodsPrice").eq(i).find("span").text();
        money[i] = parseInt(money[i]);
        res = money[i].toLocaleString();
        $(".goodsPrice").eq(i).find("span").text(res);
    };


    // 모달 레이어 팝업
    $(".goodsInfo").click(function(){
        $("div#layerBG").css({"display": "block"});
        // 이미지 가져오기
        var imgSrc = $(this).find("img").attr("src");
        $("div#popImg").children("img").attr("src", imgSrc);

        // 상품명 가져오기
        var popupGoodsName = $(this).find("tr.goodsName").children("td").html();
        popupGoodsName = popupGoodsName.replace("<br>", "");
        $("div#popGoodsName").html(popupGoodsName);
        // 가격 가져오기
        var popupGoodsPrice = $(this).find("tr.goodsPrice").children("td").html();
        
        $("div#popGoodsPrice").html(popupGoodsPrice);
    });

    $("div#closeBtn").click(function(){
        $("div#layerBG").css({"display":"none"});
    })
});