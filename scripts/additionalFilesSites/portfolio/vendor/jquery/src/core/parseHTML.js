define(["../core","../var/document","./var/rsingleTag","../manipulation/buildFragment"],function(e,n,r,t){return e.parseHTML=function(a,o,i){if(!a||"string"!=typeof a)return null;"boolean"==typeof o&&(i=o,o=!1),o=o||n;var l=r.exec(a),u=!i&&[];return l?[o.createElement(l[1])]:(l=t([a],o,u),u&&u.length&&e(u).remove(),e.merge([],l.childNodes))},e.parseHTML});
//# sourceMappingURL=parseHTML.js.map
