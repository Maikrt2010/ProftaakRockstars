coverflow('container').setup({
    item: 0,
    playlist: [
        {
            "title": "Lazy loading with Angular",
            "description": "Robin van Tienhoven",
            "image": "https://www.teamrockstars.nl/sites/default/files/styles/530x530/public/2020-06/Robin%20Tienhoven_0.jpg",
            "link": "ArticleLazyLoading.html",
            "tag": "tag3"
        },
        {
            "title": "Security by design bij informatiesystemen",
            "description": "Christiaan Nieuwlaat",
            "image": "https://www.teamrockstars.nl/sites/default/files/styles/380x380/public/2020-04/Tech%20Burst%20omslagfoto%20.jpg",
            "link": "",
            "tag": "tag3"
        },
        {
            "title": "Themes in nativescript with webpack",
            "description": "Robin van Tienhoven",
            "image": "https://www.teamrockstars.nl/sites/default/files/styles/380x380/public/2020-03/NativeScript-6.0-1024x684_0.jpg",
            "link": "",
            "tag": "tag3"
        },
        {
            "title": "Een library migreren naar JPMS",
            "description": "Sven Haster",
            "image": "https://www.teamrockstars.nl/sites/default/files/styles/380x380/public/2019-08/java_1.jpg",
            "link": "",
            "tag": "tag3"
        },
        {
            "title": "Structured logging in een .net applicatie",
            "description": "Vincent Hendriks",
            "image": "https://www.teamrockstars.nl/sites/default/files/styles/380x380/public/2019-05/architecture-structure-sky-window-glass-view-877703-pxhere.com_.jpg",
            "link": "",
            "tag": "tag3"
        },
        {
            "title": "Dit is nieuw in .net core 3.0",
            "description": "Vincent Bitter",
            "image": "https://www.teamrockstars.nl/sites/default/files/styles/380x380/public/2019-04/photo-1517148815978-75f6acaaf32c.jpg",
            "link": "",
            "tag": "tag3"
        }

    ],
    width: window.innerWidth,
    coverwidth: 180,
    coverheight: 150,
    covergap: 120,
    coveroffset: -20,
    coverangle: 30,
    fixedsize: true,
    textoffset: 50,
    backgroundcolor: '333333',
    backgroundopacity: 1,
    mousewheel: false,

});

coverflow('container').on('ready', function() {
    window.addEventListener("resize", function() {
        coverflow('container').resize(window.innerWidth, 270);
    });

    coverflow('container').on('click', function(index, link) {



        let ifrm = document.getElementById('popup-frame');
        let ifrDoc = ifrm.contentDocument;

        let articleData = this.config.playlist[index];
        console.log(articleData.link);

        let title = ifrDoc.getElementById("title");
        title.textContent = articleData.title;

        let author = ifrDoc.getElementById("author");
        author.textContent = articleData.description;

        let content = ifrDoc.getElementById("popup-content");
        let coverimage = ifrDoc.getElementById("cover-image");
        let covercontainer = ifrDoc.getElementById("cover-container");

        covercontainer.style.backgroundImage = "url(" + this.config.playlist[index].image + ")";



        //popup
        let clicked_cover = container.getElementsByClassName("coverflow-hit")[index];
        let pos = clicked_cover.getBoundingClientRect();


        let popup = document.getElementById("popup")
        popup.showpopup();

        popup.style.top = pos.top + window.scrollY + "px";

        popup.style.height = pos.height + "px";
        popup.style.width = pos.width + window.scrollX + "px";



        // open(link,'_self');
    });
});

let popup = document.getElementById("popup")
popup.showpopup = function() {
    popup.classList.add("open");

    document.getElementById('overlay').style.visibility = "visible";
    document.getElementById('overlay').style.pointerEvents = "auto";


    document.getElementById('overlay').style.opacity = 1;

}


document.body.onmousedown = function() {
    console.log("click");

    if (document.getElementById('overlay').style.visibility == "visible") {
        document.getElementById('overlay').style.opacity = 0;
        document.getElementById('overlay').style.visibility = "hidden";

        document.getElementById('popup').classList.remove("open");
    }

};







coverflow('covers1').setup({
    item: 0,
    playlist: [{
            "title": "#10 Deze ervaren .NET ontwikkelaar, en sinds kort ook Product Owner, over wat zijn definitie van groei is en hoe je duidelijke taal spreekt.",
            "description": "Met Vincent Bitter",
            "image": "https://cdn.podcastfeed.nl/aeba5040-b60f-11ea-8880-9774aad122c1/aeba5c00-b60f-11ea-b1db-55f05061b5d6.jpg",
            "link": "https://open.spotify.com/episode/1fXS8ikiHTuFXjZCI87Kdi",
            "duration": "183"
        },
        {
            "title": "#9 Deze DevOps evangelist steelt op dit moment de show als Cloud Solution Architect en vertelt ons hoe zijn unieke route hem hier heeft gebracht en hij geeft tips hoe je je marktwaarde kunt verhogen.",
            "description": "Met David de Hoop",
            "image": "https://cdn.podcastfeed.nl/aeba5040-b60f-11ea-8880-9774aad122c1/aeba5c00-b60f-11ea-b1db-55f05061b5d6.jpg",
            "link": "https://open.spotify.com/episode/2V9h63z2DQH2c2KNbq6g0G",
            "duration": "782"
        },
        {
            "title": "#8 Deze platform engineer met liefde voor de pure techniek deelt zijn gouden tips voor het bijblijven in de IT, het durven stellen van vragen en vertelt over het stoeien met de beesten van...",
            "description": "Met Subhi Dweik",
            "image": "https://cdn.podcastfeed.nl/aeba5040-b60f-11ea-8880-9774aad122c1/aeba5c00-b60f-11ea-b1db-55f05061b5d6.jpg",
            "link": "https://open.spotify.com/episode/4gjOn6E51OJlhdJr1RAw7U",
        },
        {
            "title": "#7 Deze software engineer leerde hoe hij van een teruggetrokken leven meer naar buiten kon treden om zo meer van het leven te genieten",
            "description": "Met Jeroen de Deken",
            "image": "https://cdn.podcastfeed.nl/aeba5040-b60f-11ea-8880-9774aad122c1/aeba5c00-b60f-11ea-b1db-55f05061b5d6.jpg",
            "link": "https://open.spotify.com/episode/0iNPYFgFetz0FK8qoJrRyW",
            "duration": "183"
        },
        {
            "title": "#6 Deze DevOps Cloud man vertelt in dit gesprek met 'een open einde' hoe je er soms met gestrekt been in moet gaan om voor jezelf op te komen, hoe hij de eigenaar van AnyCoin gelukkig ...",
            "description": "Met Maarten van Arem",
            "image": "https://cdn.podcastfeed.nl/aeba5040-b60f-11ea-8880-9774aad122c1/aeba5c00-b60f-11ea-b1db-55f05061b5d6.jpg",
            "link": "https://open.spotify.com/episode/7BHhv2mYnAKvvSHZQlA5nY",
            "duration": "782"
        },
        {
            "title": "#5 Deze ervaren IT-allrounder vertelt over de kunst en de valkuil van de klant tevreden willen stellen, de misvatting over software developers en zijn recept voor groei & ontwikkeling",
            "description": "Met Christiaan Nieuwlaat",
            "image": "https://cdn.podcastfeed.nl/aeba5040-b60f-11ea-8880-9774aad122c1/aeba5c00-b60f-11ea-b1db-55f05061b5d6.jpg",
            "link": "https://open.spotify.com/episode/5G9eQiTgjwkT4EP7fPVpEJ",
        },
        {
            "title": "#4 Met 20 jaar op de teller vertelt deze Limburger over hoe zijn rol als Azure Solution Architect is als een droom die uitkwam en alle stappen die hem daarbij hebben geholpen",
            "description": "Met Marco Vervoort",
            "image": "https://cdn.podcastfeed.nl/aeba5040-b60f-11ea-8880-9774aad122c1/aeba5c00-b60f-11ea-b1db-55f05061b5d6.jpg",
            "link": "https://open.spotify.com/episode/5AlHMrGCtXSQJgkpuszsoV",
            "duration": "183"
        },
        {
            "title": "#3 Dit jonge talent vertelt over zijn avonturen als ondernemer, zijn huidige rol als Tech Lead, het belang van Personal Branding en hoe het hem lukt om soms zijn hoofd leeg te maken",
            "description": "Met Sjors Snoeren",
            "image": "https://cdn.podcastfeed.nl/aeba5040-b60f-11ea-8880-9774aad122c1/aeba5c00-b60f-11ea-b1db-55f05061b5d6.jpg",
            "link": "https://open.spotify.com/episode/1d98Yhn3FF8UAnL6B1SNrz",
            "duration": "782"
        },
        {
            "title": "#2 De enthousiaste 30’er die vertelt over zijn rol als Team Lead, 5 jaren plan, liefde voor de combinatie van programmeren & het coachen van mensen",
            "description": "Met Pascal Quist",
            "image": "https://cdn.podcastfeed.nl/aeba5040-b60f-11ea-8880-9774aad122c1/aeba5c00-b60f-11ea-b1db-55f05061b5d6.jpg",
            "link": "https://open.spotify.com/episode/6Sr1cfJ6S7OJHgqFNESdkH",
        },
        {
            "title": "#1 Over zijn route tot Solution Architect, het belang van self-management en het durven vragen van feedback aan anderen",
            "description": "Met Oscar van der Leij",
            "image": "https://cdn.podcastfeed.nl/aeba5040-b60f-11ea-8880-9774aad122c1/aeba5c00-b60f-11ea-b1db-55f05061b5d6.jpg",
            "link": "https://open.spotify.com/episode/5Q5njuuhXNMlj528moiQIZ",
            "duration": "183"
        }
    ],
    width: window.innerWidth,
    height: 270,
    coverwidth: 180,
    coverheight: 150,
    fixedsize: true,
    textoffset: 50,
    backgroundcolor: '333333',
    backgroundopacity: 1,
    mousewheel: false,

});

coverflow('covers1').on('ready', function() {
    window.addEventListener("resize", function() {
        coverflow('covers1').resize(window.innerWidth, 270);
    });


    coverflow('covers1').on('click', function(index, link) {

        open(link);
    });
});