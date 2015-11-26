// author:Dorit_lyx
// date: 2015 - 07 -02
//js分层（功能）：jquery（tools）   UI（组件）    应用（app）      mvc( backboneJs)
//js规划（管理）：:避免全局变量和方法( 命名空间    闭包      面向对象)   模块化( seaJs  requireJS)
//运用面向对象的方法写js
window.onload = function(){
	
	mv.app.toTip();
	
}
var mv = {};
mv.tools = {};
mv.ui = {};
mv.app = {};

mv.app.toTip = function(){
	var oText1 = document.getElementById("text1");
	var oText2 = document.getElementById("text2");
}
