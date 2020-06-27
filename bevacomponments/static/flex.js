function w() {
	let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
	let htmlDom = document.getElementsByTagName('html')[0];
	// if (htmlwidth > 750) {
	//  htmlwidth = 750
	// }
	htmlDom.style.fontSize = htmlwidth / 20 + 'px';

}
// 实时监测当前设备是否进行横竖屏切换
var evt = "onorientationchange" in window ? "orientationchange" : "resize";
window.addEventListener(evt, resize, false);

function resize(fals) {
	if (window.orientation == 0 || window.orientation == 180) {
		w()
	} else {
		w()
	}
}
resize(true);
