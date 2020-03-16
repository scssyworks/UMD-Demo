(function (ns) {
    ns.methodA = function () {
        return 'It works!';
    };
    window.ns = ns;
})(window.ns || {});