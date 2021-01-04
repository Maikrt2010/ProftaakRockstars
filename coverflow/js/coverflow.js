coverflow('container').setup({
    item: 0,
    playlist: [
    {
        "title": "Software is niet voor eeuwig",
        "description": "Lars Stolwijk",
        "image": "/img/Robin Tienhoven_0.jpg",
        "link": "ArticleLazyLoading.html",
        "tag": "tag3"
    }
    // ,
    // {
    //     "title": "Van Devops naar Devsecops",
    //     "description": "Christiaan Nieuwlaat",
    //     "image": "https://lh3.googleusercontent.com/4XvTP6fCprTfJoPLQs7z4JO2F3DQOvPuIfV0_w-abOIxMvC-CL_RILChzQTskSKV8SBOZiI4mHdx9u9foXUJ80kokZz2J_fSBlJCyrBY-u9pbtKt3-gahi8lr-dqsemyb7dIakI40AnwqlfcbcDrmfdfCxeLvPDHLe-B7NJ2udnwYQ2iZ5Tdpb7RhUguokMIK4OxBDlrmvIh7iDnNaVUIHDCDZVclm0NEKrMcv0yhy5YEQ0HLO4rGyL-F0wEI89CW0sTYj3lgCdPKcuBzo_6USy5hsCCj8X1N8TQUirrIc5FteBfQirC0dht9Cz3BoiVL3pxZokirNqGH4f7fxhpIRzfSBoG4fkwmmsLKZA76JaTt5GmRiD0LJ8XKre5NijUYwIK0azQJlPlHNIH9_Ohl41HUXe0YKLHO2Cm0EzWFsv5w58UEIJ354Vj7NDqF2gtfp1TW19xkbsL_YNxiRLNbfK-S2IM-WyE9IDwg3Y89NRmfXR2MaFXoXStneKM-yNAsn0ecb_35KowEP7ly38ItqHvGsTFnu0inrmG2Q7Ey6SURM-orbunEMYCrzI9_DJZPeIZUE0uNKfsydVkW18ScT0j_mwwZA7NAYgWg84p9-w49fp3iG2A2wpdXFxxz3OQED-0QOJ0_5oIcfneCCQveBzqhwLX67WmNSSZUhB9FQqDbEWoifi-hSB0Fj0_=s459-no?authuser=0",
    //     "link": "",
    //     "tag": "tag1"
    // },
    // {
    //     "title": "Devops starter",
    //     "description": "Marco Vervoort",
    //     "image": "https://lh3.googleusercontent.com/7Hcyb1n-TznpdnUOBJDpXossnL9dcIfYKo3yfqRQCti_u5399kja3nWIRiCECb_tBUyYS5Wy9lMADmxn6h4V4JAN0cWgWhloedojpHnoVxHk-FhrmduGmGr5tvslb4kEtTc35hhAR745ZOOpJX2BDyceT-xn--Z3JkNywVObeU_5F-Po90jSepXoLQZiilQ6ak9bKC3m2kmL36_OlmWoS4uea8mxT0BT-q8pi3VkqWNnxFBk7jUiGrLlQy6uOb8EbmDMcUQX55bIJBIW03V95Yoo0JUwY7RTLuGE7cm2iZ_dAS0NoaBA-XLgQB4Mm7FLWv7lFWqdxoB80_mpXH21JBhJ98Hz1LHuIB4jG9fslEzbbGvZP7EMGMnUYZpUXekZ5FKoBtq9Rd_7KwYJr-4QTImDXOj1KUkGKHwMrMcLmLzwjb8llr68DdqtRlel5b_kMvQguRMYbDmGCcMbzmMTtLZZI4K_9miSSEQxgr7PPAqDe8j5EibBuQo5bs_a_Rfy8c4Gko1Dx7KnU_ez86izb3nzSRe-iYT8SAl3vXthi__Dg5sUSNmBlnzrWIyxjMn6TA_T8HRNChRy555xW5m9aJISKqHopPCayThqrv7r8N8UsCud395ZofTImWfz6_50qoj2_uu4x094euHUobVpzPK6qcSqdq0BZnwXD8-qI6DXufACT_tHwc8zGvrp=s459-no?authuser=0",
    //     "link": "",
    //     "tag": "tag2"
    // },
    // {
    //     "title": "HTTP-store with Angular & RXJS",
    //     "description": "Robin van Tienhoven",
    //     "image": "https://lh3.googleusercontent.com/_OSqgtY6gMyvlZWAdsH9KH_oUeRvshlYN5O_CViAvnrZr1d095q-97XviSY9_aL06O3dvmv4EKo0p4-YDt-BDl4FQTlOdbcx6i8KHI1pso7IDdYUwq704OP07W1Fciu8MB8b2Nt-Iko0kWIBsTlJevijUbZ-UapKKVU_bdYvF494Uo4Fb0039LQdlc6UqSoUSMT57yBRJxPCgHmk21XaOSrQmjHUiU9zrBzVbnQCbHTHsB7boYVBGqQgV2bVtOXQhnnYyU34eWTUQ3qh_kIEH76LGW4a2E2c7BCwgAlG8unkhp96wwQsL_SznYK9GzelEIdeD53kAJOuLA9BkDexNDU7QaicLr68uktCOCjuRRWMq15UxixleYLQQbJdB_lyMVmZm7TUbyeMZ5h3LfCmlAlLyhey-_T9QkMKF6YHwb0CgTNAnwqjf1ib5mNLeP5zgb9Vky5WHnGKgvSZ0iUTJJDpxgUOvFhuVO59OATwqufAdhoS-lghjgfMK1WitNJAaRk_mAwUezyIkV22avE1xTZFph86C8eFAIIFMBQyqfoJcaIEMMtxWkpwaLpUsfs959cvM96dx-J0ZiR64kUifiDfhMzMBIFKmr5hsd3Cw8YXjvDyTHGKJtnOMjW2_W593tMLlVaufW_GhcSqw12u7yPNUCs-k-yE1EK796KknuD91DwkqJ1h7x16syh4=s459-no?authuser=0",
    //     "link": "",
    //     "tag": "tag1"
    // },
    // {
    //     "title": "Monitor residential climate with Raspberry Pi",
    //     "description": "Pim Hazebroek",
    //     "image": "https://lh3.googleusercontent.com/xw3iBOfTcYa4Pq110tZa3f1LLHP5k3oJOqeiWZypTJmNhk7u9c1POdaqrCU8g7bSkg64mdK82dgNpEzc8yc4mEmbuj1rJmf2Gr_KhMhKpmytrr4mi-Q61AzvL_WMLO_MZzQBhhL9bYRcyYfTFn-7Y9tLC3SiignHO0mRJgPA2K0cybuCfph690dWXmC5yzulsrOsJMBbzXaYe5av1gWX8gUp4NQvWMZbZKZqUzRKez0LmJcOUPc45J_AXVF4v4Y_P6_on6lYh5V1FzeSQJ3eCM9ou3nGvIt2Ii9kVDc6F-qaaM3O79FATGW5szOGKr8XJ6h3_YPRcz9GXFO7D8_rR2X7cmOjwKVAWQgAC9kXsofp7CLNA8Q67iauA7vI9HY1IH5lec4hXrwAjYDWx5TTDnOt8-1pXiNaeUSt2SQXQaoWUaWW0PKhF5wqfl7_KekChlCCXwD5zDKed21g24owcZjE9syJ35-kXBp-0_ipbDrAHMohugq9iXKSLhNyc0pfHnaRqz5QGD0MtALCQ-5mA-n1zbfxzydmj6ZZ8W262TdgPjq3rPdDdZ481u9sAEuguDchG0alIoZhdD0w38KYirr7EoZZNWcTkkzr7Bdy2X50QTZWDWmmtcjTL0vGaEYcn6JmZ5tKGMyPYddW6_2qUacvqeIAMO4KjEQo3RuqHhIPHINCpkaMEv8pkejK=s459-no?authuser=0",
    //     "link": "",
    //     "tag": "tag2"
    // }

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