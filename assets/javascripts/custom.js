var addBanner = function() {
    if (location.hostname.indexOf('staging') != -1) {
        var e = document.createElement('div');
        e.classList.add('env-banner');
        e.innerHTML = 'STAGING';
        document.body.appendChild(e);
    } else if (location.hostname.indexOf('hackumass.com') == -1 && location.hostname.indexOf('prod') == -1) {
        var e = document.createElement('div');
        e.classList.add('env-banner');
        e.innerHTML = 'NON-PROD';
        document.body.appendChild(e);
    }
};

var init = function() {
    addBanner();

    if (location.pathname == '/login' && document.getElementById('apps-open') == null) {
        var c = document.createElement('div');
        c.setAttribute('id', 'apps-open');
        c.classList.add('alert');
        c.classList.add('alert-info');
        c.setAttribute('style', 'margin-top: 20px');
        c.innerHTML = "Primary-round applications for HackUMass VII have closed -- waitlist applications are still open!";
        document.querySelector('.container').prepend(c);
    } else if (location.pathname == '/users/password/new' && document.getElementById('apps-open') == null) {
        var c = document.createElement('div');
        c.setAttribute('id', 'apps-open');
        c.classList.add('alert');
        c.classList.add('alert-info');
        c.setAttribute('style', 'margin-top: 20px');
        c.innerHTML = "<b>If you created a Dashboard account last year, then you'll need to register again instead of resetting your old password. Thanks!</b>";
        document.querySelector('.container').prepend(c);
    }
}

window.addEventListener('load', init);
$(document).on('turbolinks:load', init);
