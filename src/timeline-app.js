require('vis/dist/vis.css')
require('../styles/montserrat.modern-browsers.css')
require('../styles/timeline-app.css')
const CONFIG = require('./timeline-config.js')
const DATA = require('../data/timeline-data.js')
const DataSet = require('vis/lib/DataSet')
const Timeline = require('vis/lib/timeline/Timeline')

;(function init(_window) {
  const window = _window,
    document = window.document,
    elemTimeline = document.getElementById(CONFIG.ID_TIMELINE),
    timeline = new Timeline(elemTimeline)
  function onWindowLoad(e) {
    timeline.setOptions(DATA.TIMELINE_CONFIG)
    timeline.setGroups(new DataSet(DATA.TIMELINE_GROUPS))
    timeline.setItems(new DataSet(DATA.TIMELINE_ITEMS))
  }
  ;(function init() {
    window.addEventListener(CONFIG.EVENT_LOAD, onWindowLoad)
  })()
})(window)
