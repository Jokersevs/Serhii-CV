let view = document.querySelector('.view')
let prewiev = document.querySelector('.prewiev')

view.onclick = function() {
    prewiev.classList.add('prewievNone')
    setTimeout(ok, 2000);
};
function ok() {
    prewiev.classList.add("prewievNone1");
}