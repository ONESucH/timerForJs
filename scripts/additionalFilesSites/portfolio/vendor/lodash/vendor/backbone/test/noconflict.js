!function(){QUnit.module("Backbone.noConflict"),QUnit.test("noConflict",function(n){n.expect(2);var o=Backbone.noConflict();n.equal(window.Backbone,void 0,"Returned window.Backbone"),window.Backbone=o,n.equal(window.Backbone,o,"Backbone is still pointing to the original Backbone")})}();
//# sourceMappingURL=noconflict.js.map
