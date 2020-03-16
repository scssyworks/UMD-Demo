(function (ns) {
    document.querySelector('h1').innerHTML = ns.methodA(); // Assume that it will exist
})(window.ns || {});