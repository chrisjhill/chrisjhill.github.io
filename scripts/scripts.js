$(document).ready(function() {
    $("body").show();
});

$(window).on("load scroll resize", function () {
    var windowHeight = $(window).height();
    var $els = $(".animate--onscroll");

    $els.each(function (index, el) {
        var $el = $(el);
        var scrolledDistance = $(document).scrollTop();
        var imageFromTop = $el.offset().top;
        var imageHeight = $el.height();

        // When most of the image is visible, allow it to be shown
        if ((imageFromTop + (imageHeight / 3)) <= (windowHeight + scrolledDistance)) {
            $el
                .removeClass("animate--onscroll")
                .addClass("animate--show");
        }
    });
});

$(document).ready(function(){1<=$(".mouse").length&&$(document).on("scroll",function(){$(".mouse").fadeOut(),$(document).off("scroll")}),$("#i-made__parser_submit").click(function(){$("#template_output_introduction").removeClass("loaded").removeClass("pre-load").html('<img src="/assets/v11/img/loading.gif" alt="Loading..." class="loading" />'),$.ajax({url:"/ajax/dev-parser.php",type:"POST",data:{template:$("#i-made__parser_code").val()},success:function(a){$("#template_output_introduction").addClass("loaded").html(a)}})}),$(".battle__submit").click(function(){$(".battle__output").html('<img src="/assets/v11/img/loading.gif" alt="Loading..." class="loading" />'),$.ajax({url:"/ajax/dev-battle.php",type:"POST",data:{"defending[0]":$("input[name='defending[0]']").val(),"defending[1]":$("input[name='defending[1]']").val(),"defending[2]":$("input[name='defending[2]']").val(),"defending[3]":$("input[name='defending[3]']").val(),"defending[4]":$("input[name='defending[4]']").val(),"defending[5]":$("input[name='defending[5]']").val(),"defending[6]":$("input[name='defending[6]']").val(),"defending[7]":$("input[name='defending[7]']").val(),"attacking[0]":$("input[name='attacking[0]']").val(),"attacking[1]":$("input[name='attacking[1]']").val(),"attacking[2]":$("input[name='attacking[2]']").val(),"attacking[3]":$("input[name='attacking[3]']").val(),"attacking[4]":$("input[name='attacking[4]']").val(),"attacking[5]":$("input[name='attacking[5]']").val(),"attacking[6]":$("input[name='attacking[6]']").val(),"attacking[7]":$("input[name='attacking[7]']").val(),waves:$("#waves").val(),asteroid:$("#asteroid").val()},success:function(a){$(".battle__output").html(a),$("#wave_selector li:eq(0)").click()}})}),$(".battle__output").on("click","#wave_selector li",function(){$(".active").removeClass("active"),$(".wave_report").slideUp(),$(this).addClass("active"),$("#wave"+$(this).attr("rel")).slideDown()}),$("a").on("click",function(a){if("#"==$(this).attr("href").charAt(1)&&"/"==location.pathname){a.preventDefault();var t=$(this.hash);if(t.length<=0)return;$("html, body").animate({scrollTop:t.offset().top},1e3,function(){window.location.hash=el})}}),$(".icon_nav").click(function(a){a.preventDefault(),$("body").addClass("nav--open")}),$(".icon_close").click(function(a){a.preventDefault(),$("body").removeClass("nav--open")})});