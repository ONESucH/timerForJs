define(["../core"],function(r){return r.parseXML=function(e){var n;if(!e||"string"!=typeof e)return null;try{n=(new window.DOMParser).parseFromString(e,"text/xml")}catch(r){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+e),n},r.parseXML});
//# sourceMappingURL=parseXML.js.map
