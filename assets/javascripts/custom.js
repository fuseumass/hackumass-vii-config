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