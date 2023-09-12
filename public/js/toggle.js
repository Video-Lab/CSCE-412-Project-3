let styles = {
    one: 'public/css/style1.css',
    two: 'public/css/style2.css'
};

function getVersion() {
    let styleLink = document.querySelector("link[rel='stylesheet']");
    let version = localStorage.getItem('version');

    if(!version) {
        for(const key in styles) {
            console.log(styles[key], key)
            if(styles[key] === styleLink.getAttribute('href')) {
                version = key;
                break;
            }
        }
        
        if(!version) {
            version = 'one';
        }
        localStorage.setItem('version', version);
    }

    return version;
}

function toggleVersion() {
    let version = getVersion();

    if(version === 'one') {
        localStorage.setItem("version", "two");
    } else if(version === 'two') {
        localStorage.setItem("version", "one");
    }

    setVersion();
}

function setVersion() {
    let version = getVersion();
    let link = document.querySelector('#version');
    link.setAttribute('href', styles[version]);
    return version;
}

setVersion();