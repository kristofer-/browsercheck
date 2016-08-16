/*jshint browser: true*/
/* Detects which useragent is used */
window.browser = (window.browser) ? window.browser : {};
window.browser.is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
window.browser.is_ie = navigator.userAgent.indexOf('MSIE') > -1;
window.browser.is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
window.browser.is_safari = navigator.userAgent.indexOf("Safari") > -1;
window.browser.is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
window.browser.is_ios = (navigator.userAgent.toLowerCase().match(/(ipad|iphone)/))?true:false;

if ((window.browser.is_chrome) && (window.browser.is_safari)) {
    window.browser.is_safari = false;
}
if ((window.browser.is_chrome) && (window.browser.is_opera)) {
    window.browser.is_chrome = false;
}
