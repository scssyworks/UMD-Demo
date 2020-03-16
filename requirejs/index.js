window.require.config({
    paths: {
        'myModule': 'deps'
    }
});

(function () {
    require(['myModule'], (deps) => {
        document.querySelector('h1').innerHTML = deps.methodA();
    });
})();