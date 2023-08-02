var allImages = document.querySelectorAll("#\\:20 > div:nth-child(2) > table > tbody > tr:nth-child(even) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > img");

allImages.forEach((img, index) => {
    setTimeout(function() {
        var link = document.createElement('a');
        link.href = img.src;
        link.download = 'download-' + index;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 2000 * index); // delay each download by 2 seconds
});
