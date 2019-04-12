import * as CONFIG from './timeline-config.js';
import * as DATA from '../data/timeline-data-browsers.js';
import 'vis/dist/vis.css'
import '../styles/montserrat.modern-browsers.css'
import '../styles/timeline-app.css'
import DataSet from 'vis/lib/DataSet';
import Timeline from 'vis/lib/timeline/Timeline';

(function init (_window) {
  const
    window = _window,
    document = window.document,
    elemTimeline = document.getElementById(CONFIG.ID_TIMELINE),
    timeline = new Timeline(elemTimeline)
  ;
  function onWindowLoad (e) {
    timeline.setOptions(DATA.TIMELINE_CONFIG);
    timeline.setGroups(new DataSet(DATA.TIMELINE_GROUPS));
    timeline.setItems(new DataSet(DATA.TIMELINE_ITEMS));
  };
  (function init () {
    window.addEventListener(CONFIG.EVENT_LOAD, onWindowLoad);
  })();
})(window);
