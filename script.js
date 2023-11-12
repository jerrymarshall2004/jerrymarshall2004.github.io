var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        text = (xhttp.responseText);
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(text,"text/xml");
        titles = xmlDoc.getElementsByTagName("title");
        videoIDs = xmlDoc.getElementsByTagName("videoID");
        videoCount = xmlDoc.getElementsByTagName("title").length;

        for (i = 0; i < videoCount; i++){
            console.log(titles[i].childNodes[0].nodeValue);
            console.log(videoIDs[i].childNodes[0].nodeValue);
            let img = new Image();
            let a = document.createElement('a');
            a.target = "_blank";
            a.className="thumbnailLink"
            a.title = titles[i].childNodes[0].nodeValue;
            a.href=("https://www.youtube.com/watch?v=" + videoIDs[i].childNodes[0].nodeValue);
            img.className="thumbnail";
            img.src ='images/thumbnails/' + videoIDs[i].childNodes[0].nodeValue + '.jpeg';
            a.appendChild(img);

            document.getElementById("workDiv").appendChild(a);
        }
        
    }
};
xhttp.open("GET", "gallery.xml", true);
xhttp.send();

