coverflow('covers1').setup({
    item: 5,
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