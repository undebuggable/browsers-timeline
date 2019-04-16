const
    DATE_NOW = new Date(),
    DATE_TODAY = (DATE_NOW).toISOString().split('T')[0],
    FIREFOX = 'Firefox',
    FIREFOX_WIKI = 'https://en.wikipedia.org/wiki/Firefox',
    CHROMIUM = 'Chromium',
    CHROMIUM_WIKI = 'https://en.wikipedia.org/wiki/Chromium_(web_browser)',
    CHROME = 'Google Chrome',
    CHROME_WIKI = 'https://en.wikipedia.org/wiki/Google_Chrome',
    IE = 'Internet Explorer',
    IE_WIKI = 'https://en.wikipedia.org/wiki/Internet_Explorer',
    EDGE = 'Edge',
    EDGE_WIKI = 'https://en.wikipedia.org/wiki/Microsoft_Edge',
    SAFARI = 'Safari',
    SAFARI_WIKI = 'https://en.wikipedia.org/wiki/Safari_(web_browser)',
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
            id: 3, order: 3,
            content: `<a href=${FIREFOX_WIKI}>${FIREFOX}</a>`,
            title: `${FIREFOX}`
        },
        {
            id: 4, order: 4,
            content: `<a href=${IE_WIKI}>${IE}</a>`,
            title: `${IE}`
        },
        {
            id: 5, order: 5,
            content: `<a href=${EDGE_WIKI}>${EDGE}</a>`,
            title: `${EDGE}`
        },
        {
            id: 6, order: 6,
            content: `<a href=${SAFARI_WIKI}>${SAFARI}</a>`,
            title: `${SAFARI}`
        },
        {
            id: 7, order: 7,
            content: 'Opera'
        },
        {
            id: 8, order: 8,
            content: 'Lynx'
        }
    ],
    BROWSERS_CHROME = [
        {
            id: 10, group: 1,
            content: `<a href=${BLINK_WIKI}>${BLINK}</a>`,
            title: `${BLINK}`,
            start: '2013-04-03',
            end:DATE_TODAY,
            className:'browsers-layout-engine'
        },
        {
            id: 11, group: 1,
            content: `<a href=${WEBKIT_WIKI}>${WEBKIT}</a>`,
            title: `${WEBKIT}`,
            start: '2008-09-02',
            end: '2013-04-02',
            className:'browsers-layout-engine'
        },
        {
            id: 12, group: 1,
            content: `<a href=${V8_WIKI}>${V8}</a>`,
            title: `${V8}`,
            start: '2008-09-02',
            end:DATE_TODAY,
            className:'browsers-js-engine'
        }
    ],
    BROWSERS_FIREFOX = [
        {
            id: 30, group: 3,
            content: `<a href=${GECKO_WIKI}>${GECKO}</a>`,
            title:'Gecko',
            start: '1997-01-01',
            end:DATE_NOW,
            className:'browsers-layout-engine'
        },
        {
            id: 31, group: 3,
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
            id: 20, group: 2,
            content: `<a href=${BLINK_WIKI}>${BLINK}</a>`,
            title: `${BLINK}`,
            start: '2013-04-03',
            end:DATE_TODAY,
            className:'browsers-layout-engine'
        },
        {
            id: 21, group: 2,
            content: `<a href=${WEBKIT_WIKI}>${WEBKIT}</a>`,
            title: `${WEBKIT}`,
            start: '2008-09-02',
            end: '2013-04-02',
            className:'browsers-layout-engine'
        },
        {
            id: 22, group: 2,
            content: `<a href=${V8_WIKI}>${V8}</a>`,
            title: `${V8}`,
            start: '2008-09-02',
            end:DATE_TODAY,
            className:'browsers-js-engine'
        }
    ],
    BROWSERS_IE = [
        {
            id: 40, group: 4,
            content: `<a href=${TRIDENT_WIKI}>${TRIDENT}</a>`,
            title: `${TRIDENT}`,
            start: '1995-08-16',
            end: DATE_TODAY,
            className:'browsers-layout-engine'
        },
        {
            id: 41, group: 4,
            content: `<a href=${JSCRIPT_WIKI}>${JSCRIPT}</a>`,
            title: `${JSCRIPT}`,
            start: '1995-08-16',
            end:DATE_TODAY,
            className:'browsers-js-engine'
        },
        {
            id: 42, group: 4,
            content: `<a href=${CHAKRA_WIKI}>${CHAKRA}</a>`,
            title: `${CHAKRA}`,
            start: '1995-08-16',
            end:DATE_TODAY,
            className:'browsers-js-engine'
        }
    ],
    BROWSERS_EDGE = [
        {
            id: 50, group: 5,
            content: `<a href=${EDGEHTML_WIKI}>${EDGEHTML}</a>`,
            title: `${EDGEHTML}`,
            start: '2015-07-29',
            end:'2018-12-31',
            className:'browsers-layout-engine'
        },
        {
            id: 51, group: 5,
            content: `<a href=${BLINK_WIKI}>${BLINK}</a>`,
            title: `${BLINK}`,
            start: '2019-01-01',
            end:DATE_NOW,
            className:'browsers-layout-engine'
        },
        {
            id: 53, group: 5,
            content: `<a href=${CHAKRA_WIKI}>${CHAKRA}</a>`,
            title: `${CHAKRA}`,
            start: '2015-07-29',
            end:'2018-12-31',
            className:'browsers-js-engine'
        },
        {
            id: 54, group: 5,
            content: `<a href=${V8_WIKI}>${V8}</a>`,
            title: `${V8}`,
            start: '2019-01-01',
            end:DATE_NOW,
            className:'browsers-js-engine'
        }
    ],
    BROWSERS_SAFARI = [
        {
            id: 60, group: 6,
            content: `<a href=${}>${}</a>`,
            title: `${}`,
            start: '1970-07-01',
            end:'1970-10-31',
            className:'browsers-layout-engine'
        },
        {
            id: 61, group: 6,
            content: `<a href=${}>${}</a>`,
            title: `${}`,
            start: '1970-01-01',
            end:'1970-12-31',
            className:'browsers-js-engine'
        }
    ]
    // BROWSERS_ = [
    //     {
    //         id: 3, group: 1,
    //         content: `<a href=${}>${}</a>`,
    //         title: `${}`,
    //         start: '1970-07-01',
    //         end:'1970-10-31',
    //         className:'browsers-layout-engine'
    //     },
    //     {
    //         id: 4, group: 1,
    //         content: `<a href=${}>${}</a>`,
    //         title: `${}`,
    //         start: '1970-01-01',
    //         end:'1970-12-31',
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
      BROWSERS_SAFARI
    )
};
