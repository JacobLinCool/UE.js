var ue = (function () {
    var checked = {
        instagram: {},
        github: {}
    };
    var instagram = function(n) {
        if(this.checked.instagram[n] !== undefined)
            return new Promise(x=>{x(this.checked.instagram[n])});
        else
            return fetch("https://ue-instagram.1481.workers.dev/"+n)
            .then(r=>r.json());
    };
    var github = function(n) {
        if(this.checked.github[n] !== undefined)
            return new Promise(x=>{x(this.checked.github[n])});
        else
            return fetch("https://ue-github.1481.workers.dev/"+n)
            .then(r=>r.json());
    };
    return ({
        checked,
        
        instagram,
        ig: instagram,
        
        github,
        gh: github
    });
})();
