const
    DATE_NOW = new Date(),
    DATE_TODAY = (DATE_NOW).toISOString().split('T')[0],
    FIREFOX = 'Firefox',
    FIREFOX_WIKI = 'https://en.wikipedia.org/wiki/Firefox',
    CHROME = 'Google Chrome',
    CHROME_WIKI = 'https://en.wikipedia.org/wiki/Google_Chrome',
    BLINK = 'Blink',
    BLINK_WIKI = 'https://en.wikipedia.org/wiki/Blink_(browser_engine)',
    V8 = 'V8',
    V8_WIKI = 'https://en.wikipedia.org/wiki/Chrome_V8',
    GECKO = 'Gecko',
    GECKO_WIKI = 'https://en.wikipedia.org/wiki/Gecko_(software)',
    SPIDER_MONKEY = 'SpiderMonkey',
    SPIDER_MONKEY_WIKI = 'https://en.wikipedia.org/wiki/SpiderMonkey',
    BROWSERS_CONFIG = {
        groupOrder: 'order',
        min: '1995-01-01',
        max: ''.concat(
            DATE_NOW.getFullYear() + 1,
            '-',
            DATE_TODAY.split(DATE_NOW.getFullYear()+'-')[1]
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
            content: 'Chromium'
        },
        {
            id: 3, order: 3,
            content: `<a href=${FIREFOX_WIKI}>${FIREFOX}</a>`,
            title: `${FIREFOX}`
        },
        {
            id: 4, order: 4,
            content: 'Internet Explorer'
        },
        {
            id: 5, order: 5,
            content: 'Edge'
        },
        {
            id: 6, order: 6,
            content: 'Safari'
        },
        {
            id: 7, order: 7,
            content: 'Opera'
        },
    ],
    BROWSERS_CHROME = [
        {
            id: 1, group: 1,
            content: `<a href=${BLINK_WIKI}>${BLINK}</a>`,
            title:'Blink',
            start: '2013-04-03',
            end:DATE_TODAY,
            className:'browsers-layout-engine'
        },
        {
            id: 2, group: 1,
            content: `<a href=${V8_WIKI}>${V8}</a>`,
            title: `${V8}`,
            start: '2008-09-02',
            end:DATE_TODAY,
            className:'browsers-js-engine'
        }
    ],
    BROWSERS_FIREFOX = [
        {
            id: 3, group: 3,
            content: `<a href=${GECKO_WIKI}>${GECKO}</a>`,
            title:'Gecko',
            start: '1997-01-01',
            end:DATE_NOW,
            className:'browsers-layout-engine'
        },
        {
            id: 4, group: 3,
            content: `<a href=${SPIDER_MONKEY_WIKI}>${SPIDER_MONKEY}</a>`,
            title:`${SPIDER_MONKEY}`,
            start: '1996-03-01',
            end:DATE_NOW,
            className:'browsers-js-engine'
        }
    ]
    // BROWSERS_ = [
    //     {id: 3, group: 1,
    //         content:
    //             '<a href=""></a>',
    //         title:'', start: '1970-07-01', end:'1970-10-31', className:'browsers-layout-engine'
    //     },
    //     {id: 4, group: 1,
    //         content: '<a href=""></a>',
    //         title:'', start: '1970-01-01',end:'1970-12-31', className:'browsers-js-engine'
    //     }
    // ]
;
module.exports = {
    TIMELINE_CONFIG: BROWSERS_CONFIG,
    TIMELINE_GROUPS: BROWSERS_GROUPS,
    TIMELINE_ITEMS: BROWSERS_CHROME.concat(BROWSERS_FIREFOX)
};
