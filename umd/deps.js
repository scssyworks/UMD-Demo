(function (global, fn) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = fn();
    } else if (global.define) {
        global.define(fn);
    } else {
        global.ns = fn();
    }
})(this, function () {
    return {
        methodA() {
            return 'It works!';
        }
    };
});