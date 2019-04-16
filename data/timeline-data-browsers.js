const
    DATE_NOW = new Date(),
    DATE_TODAY = (DATE_NOW).toISOString().split('T')[0],
    FIREFOX = 'Firefox',
    FIREFOX_WIKI = 'https://en.wikipedia.org/wiki/Firefox',
    CHROMIUM = 'Chromium',
    CHROMIUM_WIKI = 'https://en.wikipedia.org/wiki/Chromium_(web_browser)',
    CHROME = 'Chrome',
    CHROME_WIKI = 'https://en.wikipedia.org/wiki/Google_Chrome',
    IE = 'Internet Explorer',
    IE_WIKI = 'https://en.wikipedia.org/wiki/Internet_Explorer',
    EDGE = 'Edge',
    EDGE_WIKI = 'https://en.wikipedia.org/wiki/Microsoft_Edge',
    SAFARI = 'Safari',
    SAFARI_WIKI = 'https://en.wikipedia.org/wiki/Safari_(web_browser)',
    OPERA = 'Opera',
    OPERA_WIKI = 'https://en.wikipedia.org/wiki/Opera_(web_browser)',
    LYNX = 'Lynx',
    LYNX_WIKI = 'https://en.wikipedia.org/wiki/Lynx_(web_browser)',
    BLINK = 'Blink',
    BLINK_WIKI = 'https://en.wikipedia.org/wiki/Blink_(browser_engine)',
    V8 = 'V8',
    V8_WIKI = 'https://en.wikipedia.org/wiki/Chrome_V8',
    GECKO = 'Gecko',
    GECKO_WIKI = 'https://en.wikipedia.org/wiki/Gecko_(software)',
    SPIDER_MONKEY = 'SpiderMonkey',
    SPIDER_MONKEY_WIKI = 'https://en.wikipedia.org/wiki/SpiderMonkey',
    WEBKIT = 'WebKit',
    WEBKIT_WIKI = 'https://en.wikipedia.org/wiki/WebKit',
    TRIDENT = 'Trident',
    TRIDENT_WIKI = 'https://en.wikipedia.org/wiki/Trident_(software)',
    CHAKRA = 'Chakra',
    CHAKRA_WIKI = 'https://en.wikipedia.org/wiki/Chakra_(JScript_engine)',
    JSCRIPT = 'JScript',
    JSCRIPT_WIKI = 'https://en.wikipedia.org/wiki/JScript',
    EDGEHTML = 'EdgeHTML',
    EDGEHTML_WIKI = 'https://en.wikipedia.org/wiki/EdgeHTML',
    NITRO = 'Nitro',
    NITRO_WIKI = 'https://en.wikipedia.org/wiki/WebKit#JavaScriptCore',
    PRESTO = 'Presto',
    PRESTO_WIKI = 'https://en.wikipedia.org/wiki/Presto_(browser_engine)',
    CARAKAN = 'Carakan',
    CARAKAN_WIKI = 'https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines',
    BROWSERS_CONFIG = {
        groupOrder: 'order',
        min: '1995-01-01',
        max: ''.concat(
            DATE_NOW.getFullYear() + 1,
            '-',
            DATE_TODAY.split(
              DATE_NOW.getFullYear()+'-'
            )[1]
        ),
        showTooltips: true,
        stack: true
    },
    BROWSERS_GROUPS = [
        {
            id: 1, order: 1,
            content: `<a href=${CHROME_WIKI}>${CHROME}</a>`,
            title: `${CHROME}`
        },
        {
            id: 2, order: 2,
            content: `<a href=${CHROMIUM_WIKI}>${CHROMIUM}</a>`,
            title: `${CHROMIUM}`
        },
        {
            id: 3, order: 4,
            content: `<a href=${FIREFOX_WIKI}>${FIREFOX}</a>`,
            title: `${FIREFOX}`
        },
        {
            id: 4, order: 5,
            content: `<a href=${IE_WIKI}>${IE}</a>`,
            title: `${IE}`
        },
        {
            id: 5, order: 3,
            content: `<a href=${EDGE_WIKI}>${EDGE}</a>`,
            title: `${EDGE}`
        },
        {
            id: 6, order: 8,
            content: `<a href=${SAFARI_WIKI}>${SAFARI}</a>`,
            title: `${SAFARI}`
        },
        {
            id: 7, order: 7,
            content: `<a href=${OPERA_WIKI}>${OPERA}</a>`,
            title: `${OPERA}`
        },
        {
            id: 8, order: 6,
            content: `<a href=${LYNX_WIKI}>${LYNX}</a>`,
            title: `${LYNX}`
        }
    ],
    BROWSERS_CHROME = [
        {
            id: 100, group: 1,
            content: `<a href=${BLINK_WIKI}>${BLINK}</a>`,
            title: `${BLINK}`,
            start: '2013-04-03',
            end:DATE_TODAY,
            className:'browsers-layout-engine'
        },
        {
            id: 101, group: 1,
            content: `<a href=${WEBKIT_WIKI}>${WEBKIT}</a>`,
            title: `${WEBKIT}`,
            start: '2008-09-02',
            end: '2013-04-02',
            className:'browsers-layout-engine'
        },
        {
            id: 102, group: 1,
            content: `<a href=${V8_WIKI}>${V8}</a>`,
            title: `${V8}`,
            start: '2008-09-02',
            end:DATE_TODAY,
            className:'browsers-js-engine'
        }
    ],
    BROWSERS_FIREFOX = [
        {
            id: 300, group: 3,
            content: `<a href=${GECKO_WIKI}>${GECKO}</a>`,
            title:'Gecko',
            start: '1997-01-01',
            end:DATE_NOW,
            className:'browsers-layout-engine'
        },
        {
            id: 301, group: 3,
            content:
              `<a href=${SPIDER_MONKEY_WIKI}>${SPIDER_MONKEY}</a>`,
            title:`${SPIDER_MONKEY}`,
            start: '1996-03-01',
            end:DATE_NOW,
            className:'browsers-js-engine'
        }
    ],
    BROWSERS_CHROMIUM = [
        {
            id: 200, group: 2,
            content: `<a href=${BLINK_WIKI}>${BLINK}</a>`,
            title: `${BLINK}`,
            start: '2013-04-03',
            end:DATE_TODAY,
            className:'browsers-layout-engine'
        },
        {
            id: 201, group: 2,
            content: `<a href=${WEBKIT_WIKI}>${WEBKIT}</a>`,
            title: `${WEBKIT}`,
            start: '2008-09-02',
            end: '2013-04-02',
            className:'browsers-layout-engine'
        },
        {
            id: 202, group: 2,
            content: `<a href=${V8_WIKI}>${V8}</a>`,
            title: `${V8}`,
            start: '2008-09-02',
            end:DATE_TODAY,
            className:'browsers-js-engine'
        }
    ],
    BROWSERS_IE = [
        {
            id: 400, group: 4,
            content: `<a href=${TRIDENT_WIKI}>${TRIDENT}</a>`,
            title: `${TRIDENT}`,
            start: '1995-08-16',
            end: DATE_TODAY,
            className:'browsers-layout-engine'
        },
        {
            id: 401, group: 4,
            content: `<a href=${JSCRIPT_WIKI}>${JSCRIPT}</a>`,
            title: `${JSCRIPT}`,
            start: '1995-08-16',
            end:DATE_TODAY,
            className:'browsers-js-engine'
        },
        {
            id: 402, group: 4,
            content: `<a href=${CHAKRA_WIKI}>${CHAKRA}</a>`,
            title: `${CHAKRA}`,
            start: '1995-08-16',
            end:DATE_TODAY,
            className:'browsers-js-engine'
        }
    ],
    BROWSERS_EDGE = [
        {
            id: 500, group: 5,
            content: `<a href=${EDGEHTML_WIKI}>${EDGEHTML}</a>`,
            title: `${EDGEHTML}`,
            start: '2015-07-29',
            end:'2018-12-31',
            className:'browsers-layout-engine'
        },
        {
            id: 501, group: 5,
            content: `<a href=${BLINK_WIKI}>${BLINK}</a>`,
            title: `${BLINK}`,
            start: '2019-01-01',
            end:DATE_NOW,
            className:'browsers-layout-engine'
        },
        {
            id: 503, group: 5,
            content: `<a href=${CHAKRA_WIKI}>${CHAKRA}</a>`,
            title: `${CHAKRA}`,
            start: '2015-07-29',
            end:'2018-12-31',
            className:'browsers-js-engine'
        },
        {
            id: 504, group: 5,
            content: `<a href=${V8_WIKI}>${V8}</a>`,
            title: `${V8}`,
            start: '2019-01-01',
            end:DATE_NOW,
            className:'browsers-js-engine'
        }
    ],
    BROWSERS_SAFARI = [
        {
            id: 600, group: 6,
            content: `<a href=${WEBKIT_WIKI}>${WEBKIT}</a>`,
            title: `${WEBKIT}`,
            start: '2003-01-07',
            end: DATE_NOW,
            className:'browsers-layout-engine'
        },
        {
            id: 601, group: 6,
            content: `<a href=${NITRO_WIKI}>${NITRO}</a>`,
            title: `${NITRO}`,
            start: '2003-01-07',
            end:DATE_NOW,
            className:'browsers-js-engine'
        }
    ],
    BROWSERS_OPERA = [
        {
            id: 700, group: 7,
            content: `<a href=${PRESTO_WIKI}>${PRESTO}</a>`,
            title: `${PRESTO}`,
            start: '1995-04-10',
            end: '2013-02-12',
            className:'browsers-layout-engine'
        },
        {
            id: 701, group: 7,
            content: `<a href=${WEBKIT_WIKI}>${WEBKIT}</a>`,
            title: `${WEBKIT}`,
            start: '2013-02-13',
            end: '2013-04-03',
            className:'browsers-layout-engine'
        },
        {
            id: 702, group: 7,
            content: `<a href=${BLINK_WIKI}>${BLINK}</a>`,
            title: `${BLINK}`,
            start: '2013-04-04',
            end: DATE_NOW,
            className:'browsers-layout-engine'
        },
        {
            id: 703, group: 7,
            content: `<a href=${CARAKAN_WIKI}>${CARAKAN}</a>`,
            title: `${CARAKAN}`,
            start: '1995-04-10',
            end: '2013-05-27',
            className:'browsers-js-engine'
        },
        {
            id: 704, group: 7,
            content: `<a href=${V8_WIKI}>${V8}</a>`,
            title: `${V8}`,
            start: '2013-05-28',
            end: DATE_NOW,
            className:'browsers-js-engine'
        }
    ]
    // BROWSERS_ = [
    //     {
    //         id: , group: ,
    //         content: `<a href=${}>${}</a>`,
    //         title: `${}`,
    //         start: '',
    //         end:'',
    //         className:'browsers-layout-engine'
    //     },
    //     {
    //         id: , group: ,
    //         content: `<a href=${}>${}</a>`,
    //         title: `${}`,
    //         start: '',
    //         end:'',
    //         className:'browsers-js-engine'
    //     }
    // ]
;
module.exports = {
    TIMELINE_CONFIG: BROWSERS_CONFIG,
    TIMELINE_GROUPS: BROWSERS_GROUPS,
    TIMELINE_ITEMS: BROWSERS_CHROME.concat(
      BROWSERS_CHROMIUM,
      BROWSERS_FIREFOX,
      BROWSERS_IE,
      BROWSERS_EDGE,
      BROWSERS_SAFARI,
      BROWSERS_OPERA
    )
};
