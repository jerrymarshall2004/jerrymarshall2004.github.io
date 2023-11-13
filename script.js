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


infoText = [
    "Jerry Marshall is a professional videographer who has been shooting, editing and producing videos for over a decade. Since becoming a professional videographer in 2020, he has produced content for dozens of companies, organizations and events across Southern Ontario, including Ontario Tech University, Market Logics, Duntroon Highlands, and South Georgian Bay Tourism. He has also worked closely with H Visual Media to produce videos for Honda, Blue Mountain Resort, One World Music Festival, the Great Northern Exhibition, and more. He is on track to graduate from Durham College in 2024 with a degree in Video Production, and has a passion for live music videography.",
    "Camera:\
    <br>\
    Sony FX3\
    <br><br>\
    Lenses:\
    <br>\
    Sigma 50mm f/1.4\
    <br>\
    Sigma 24-70mm f/2.8\
    <br>\
    <br>\
    Monitor:\
    <br>\
    Atomos Ninja V\
    <br>\
    <br>\
    Tripod:\
    <br>\
    SmallRig Freeblazer",
    "<ul><li>H Visual Media</li><li>Ontario Tech Ridgebacks</li><li>Parkbridge</li><li>Duntroon Highlands Resort</li><li>Main Street Meaford</li><li>Rally Beer</li></ul>"
]

var selectedButton;

function textSelect(text){
    textWrapper = document.getElementById('infoTextWrapper');
    infoTextP = document.getElementById('infoText');
    infoGrid = document.getElementById('infoGrid');
    selectedButton.classList.add('selection');
    selectedButton = document.getElementById('selection'+text);
    selectedButton.classList.remove('selection');
    infoTextP.innerHTML=infoText[text];
    textWrapper.style.height = infoTextP.clientHeight + 20 + 'px';
}

function onload(){
    selectedButton = document.getElementById('selection0');
    textSelect(0);
}