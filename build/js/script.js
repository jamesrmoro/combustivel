$(document).ready(function(){function e(){var e=Number($("#reais").val()),a=.12*e;$(".porcentagem .item1 i.value").html(a.toFixed(2));var t=.12*e;$(".porcentagem .item2 i.value").html(t.toFixed(2));var s=.28*e;$(".porcentagem .item3 i.value").html(s.toFixed(2));var o=.15*e;$(".porcentagem .item4 i.value").html(o.toFixed(2));var i=.33*e;$(".porcentagem .item5 i.value").html(i.toFixed(2))}function a(e){""===$(e).val()?($(".litros-p").removeClass("show"),$(".reais-p").removeClass("show"),$(".abastecer").addClass("disabled")):($(".litros-p").addClass("show"),$(".reais-p").addClass("show"),$(".abastecer").removeClass("disabled"))}function t(){Number($(".situacao .valor-tanque i").html())>=$("#litros").val()?($("#litros").css("border","1px solid #8bc34a"),$(".completar").css("display","none")):($("#litros").css("border","1px solid red"),$(".completar").css("display","inline-block"))}function s(){""===$("#reais").val()&&$("#litros").val("")}function o(){""===$("#litros").val()&&$("#reais").val("")}$(window).width()<1024&&($("body").on("click",".abastecer-mobile, .sim",function(a){a.preventDefault(),$(".bomba").addClass("show").removeClass("hide"),$(".deseja").addClass("hide").removeClass("show"),$(".bomba .abastecer").removeClass("disabled2"),e(),setTimeout(function(){$(".porcentagem .item1").addClass("animate-1"),$(".porcentagem .item2").addClass("animate-2"),$(".porcentagem .item3").addClass("animate-3"),$(".porcentagem .item4").addClass("animate-4"),$(".porcentagem .item5").addClass("animate-5")},500)}),$("body").on("click",".bomba #abastecer",function(){$(".deseja").addClass("show").removeClass("hide"),$(".bomba").addClass("hide").addClass("show"),e(),$(".porcentagem .item1").removeClass("animate-1"),$(".porcentagem .item2").removeClass("animate-2"),$(".porcentagem .item3").removeClass("animate-3"),$(".porcentagem .item4").removeClass("animate-4"),$(".porcentagem .item5").removeClass("animate-5")}),$("body").on("click",".sim",function(){var a=Number($(".wrapper-tipo em").html());r=$(".situacao .valor-tanque i").html()*a.toFixed(2),$('.line2 input[type="number"]').val(r),e()})),$(".button-next").prop("disabled",!0),$(".button-next").each(function(){$(".button-next").addClass("disabled")}),$('input[type="number"]').keyup(function(){""===$(this).val()?($(".screen-1 .button-next").addClass("disabled"),$(".screen-1 .button-next").prop("disabled",!0)):($(".screen-1 .button-next").removeClass("disabled"),$(".screen-1 .button-next").prop("disabled",!1))}),$(".screen-2 input").change(function(){$(".screen-2 .button-next").prop("disabled",!1),$(".screen-2 .button-next").removeClass("disabled")}),$(".screen-3 input").change(function(){$(".screen-3 .button-next").prop("disabled",!1),$(".screen-3 .button-next").removeClass("disabled")}),$("body").on("click",".button-next",function(){$(".screen.show").next().addClass("show"),$(".screen.show").prev().removeClass("show")}),$("body").on("click",".button-prev",function(){$(".screen.show").prev().addClass("show"),$(".screen.show").next().removeClass("show")});var i=$("#tanque").val();$("body").on("click",".mensagem-1",function(){var a=Number($(".wrapper-tipo em").html());r=$(".situacao .valor-tanque i").html()*a.toFixed(2),$('.line2 input[type="number"]').val(r),$(this).removeClass("show"),$(".abastecer").removeClass("disabled2"),$(".abastecer-mobile").removeClass("disabled2"),e()}),$("body").on("click",".sim",function(){var e=Number($(".wrapper-tipo em").html()),a=Number($(".situacao .valor-tanque i").html()),s=e*a;$(".abastecer").removeClass("disabled2"),$(".mensagem").parent().removeClass("aviso"),$("#litros").val(a),$("#reais").val(s),t()}),$("body").on("click",".nao",function(){$("#litros").val(""),$("#reais").val(""),$(".abastecer").removeClass("disabled"),t()}),$("body").on("click",".fieldset-fuel input[type='radio']",function(){switch(v_combustivel=Number($(this).val()),t_combustivel=$(this).attr("id"),$(".wrapper-tipo em").html(v_combustivel),$(".wrapper-tipo i").html(t_combustivel),t_combustivel){case"etanol":$(".bomba").addClass("etanol");break;case"gasolina":$(".bomba").addClass("gasolina");break;case"diesel":$(".bomba").addClass("diesel");break;case"gas":$(".bomba").addClass("gas")}}),$("body").on("click",".fieldset input[type='radio']",function(){i=Number($("#tanque").val()),situacao=Number($(this).val()),total_tanque=i*situacao,$(".situacao .valor-tanque i").html(total_tanque),$(".situacao .valor-tanque-inicial i").html(i),$(".descr i").html(total_tanque)}),$("#reais").keyup(function(){var e=Number($(".wrapper-tipo em").html()),t=$(this).val();total_litros=t/e,$("#litros").val(total_litros),$(".reais-p i").html(total_litros.toFixed(2));var s=Number($("#reais").val());$(".litros-p i").html(s.toFixed(2)),total_litros>$(".situacao .valor-tanque i").html()&&$("#litros").val($(".situacao .valor-tanque i").html()),t>$(".situacao .valor-tanque i").html()*e?($(".abastecer").addClass("aviso-1"),r=$(".situacao .valor-tanque i").html()*e.toFixed(2),$(".aviso-1 i").html(r.toFixed(2)),$(".abastecer, .abastecer-mobile").addClass("disabled2"),$(".line2 .mensagem-1").addClass("show")):($(".abastecer").removeClass("aviso-1"),$(".abastecer, .abastecer-mobile").removeClass("disabled2"),$(".line2 .mensagem-1").removeClass("show")),a(this)}),$("#litros").keyup(function(){valor_combustivel=Number($(".wrapper-tipo em").html()),valor_litros=$(this).val(),total_reais=valor_combustivel*valor_litros,$("#reais").val(total_reais),Number($(".situacao .valor-tanque i").html())>=$("#litros").val()?($("#litros").css("border","1px solid #8bc34a"),$(".completar").css("display","none"),$(".abastecer, .abastecer-mobile").removeClass("disabled2")):($("#litros").css("border","1px solid red"),$(".completar").css("display","inline-block"),$(".abastecer, .abastecer-mobile").addClass("disabled2"));var e=Number($("#litros").val());$(".reais-p i").html(e.toFixed(2)),$(".litros-p i").html(total_reais.toFixed(2)),a(this)}),$("#reais").blur(function(){s()}),$("#litros").blur(function(){o()}),$("body").on("click","#abastecer, .sim, .button-mobile",function(){var e=Number($(".wrapper-tipo em").html()),a=Number($("#litros").val()),t=Number($("#reais").val()),s=e*a,o=t/e,i=3e3,l=.12*t;$(".valor-pago .item1 i").html(l.toFixed(2));var r=.12*t;$(".valor-pago .item2 i").html(r.toFixed(2));var n=.28*t;$(".valor-pago .item3 i").html(n.toFixed(2));var m=.15*t;$(".valor-pago .item4 i").html(m.toFixed(2));var d=.33*t;$(".valor-pago .item5 i").html(d.toFixed(2)),$(".valor-pago").addClass("animate"),$("#litros").prop("Counter",0).animate({Counter:o},{duration:i,easing:"swing",step:function(e){var a=e.toFixed(2);$(".litros span").text(a>9.99?a:"0"+a)}}),$("#reais").prop("Counter",0).animate({Counter:s},{duration:i,easing:"swing",step:function(e){var a=e.toFixed(2);$(".reais span").text(a>9.99?a:"0"+a)}})})});