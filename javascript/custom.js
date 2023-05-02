var allimages= document.getElementsByClassName('lazyload');
for (var i=0; i<allimages.length; i++) {
    if (allimages[i].getAttribute('data-src')) {
        allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
    }
}