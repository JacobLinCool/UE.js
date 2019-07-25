var ue = (function () {
    var checked = {
        instagram: {},
        github: {}
    };
    var instagram = function(n) {
        if(this.checked.instagram[n] !== undefined)
            return new Promise(x=>{x(this.checked.instagram[n])});
        else
            return fetch("https://www.instagram.com/"+n+"/")
            .then(r=>r.text())
            .then(a=>{
                if(new RegExp("(@"+n.toLowerCase()+")").test(a)) {
                    this.checked.instagram[n] = true;
                    return true;
                } else {
                    this.checked.instagram[n] = false;
                    return false;
                }
            });
    };
    var github = function(n) {
        if(this.checked.github[n] !== undefined)
            return new Promise(x=>{x(this.checked.github[n])});
        else
            return fetch("https://api.github.com/users/"+n)
            .then(response => {
                if (!response.ok) {
                    this.checked.github[n] = false;
                    return false;
                } else {
                    this.checked.github[n] = true;
                    return true;
                }
            })
    };
    return ({
        checked,
        
        instagram,
        ig: instagram,
        
        github,
        gh: github
    });
})();
