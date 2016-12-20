!function(){var t,e=Backbone.Collection.extend({url:function(){return"/library"}}),a={title:"The Tempest",author:"Bill Shakespeare",length:123};QUnit.module("Backbone.sync",{beforeEach:function(s){t=new e,t.create(a,{wait:!1})},afterEach:function(t){Backbone.emulateHTTP=!1}}),QUnit.test("read",function(e){e.expect(4),t.fetch(),e.equal(this.ajaxSettings.url,"/library"),e.equal(this.ajaxSettings.type,"GET"),e.equal(this.ajaxSettings.dataType,"json"),e.ok(_.isEmpty(this.ajaxSettings.data))}),QUnit.test("passing data",function(e){e.expect(3),t.fetch({data:{a:"a",one:1}}),e.equal(this.ajaxSettings.url,"/library"),e.equal(this.ajaxSettings.data.a,"a"),e.equal(this.ajaxSettings.data.one,1)}),QUnit.test("create",function(t){t.expect(6),t.equal(this.ajaxSettings.url,"/library"),t.equal(this.ajaxSettings.type,"POST"),t.equal(this.ajaxSettings.dataType,"json");var e=JSON.parse(this.ajaxSettings.data);t.equal(e.title,"The Tempest"),t.equal(e.author,"Bill Shakespeare"),t.equal(e.length,123)}),QUnit.test("update",function(e){e.expect(7),t.first().save({id:"1-the-tempest",author:"William Shakespeare"}),e.equal(this.ajaxSettings.url,"/library/1-the-tempest"),e.equal(this.ajaxSettings.type,"PUT"),e.equal(this.ajaxSettings.dataType,"json");var a=JSON.parse(this.ajaxSettings.data);e.equal(a.id,"1-the-tempest"),e.equal(a.title,"The Tempest"),e.equal(a.author,"William Shakespeare"),e.equal(a.length,123)}),QUnit.test("update with emulateHTTP and emulateJSON",function(e){e.expect(7),t.first().save({id:"2-the-tempest",author:"Tim Shakespeare"},{emulateHTTP:!0,emulateJSON:!0}),e.equal(this.ajaxSettings.url,"/library/2-the-tempest"),e.equal(this.ajaxSettings.type,"POST"),e.equal(this.ajaxSettings.dataType,"json"),e.equal(this.ajaxSettings.data._method,"PUT");var a=JSON.parse(this.ajaxSettings.data.model);e.equal(a.id,"2-the-tempest"),e.equal(a.author,"Tim Shakespeare"),e.equal(a.length,123)}),QUnit.test("update with just emulateHTTP",function(e){e.expect(6),t.first().save({id:"2-the-tempest",author:"Tim Shakespeare"},{emulateHTTP:!0}),e.equal(this.ajaxSettings.url,"/library/2-the-tempest"),e.equal(this.ajaxSettings.type,"POST"),e.equal(this.ajaxSettings.contentType,"application/json");var a=JSON.parse(this.ajaxSettings.data);e.equal(a.id,"2-the-tempest"),e.equal(a.author,"Tim Shakespeare"),e.equal(a.length,123)}),QUnit.test("update with just emulateJSON",function(e){e.expect(6),t.first().save({id:"2-the-tempest",author:"Tim Shakespeare"},{emulateJSON:!0}),e.equal(this.ajaxSettings.url,"/library/2-the-tempest"),e.equal(this.ajaxSettings.type,"PUT"),e.equal(this.ajaxSettings.contentType,"application/x-www-form-urlencoded");var a=JSON.parse(this.ajaxSettings.data.model);e.equal(a.id,"2-the-tempest"),e.equal(a.author,"Tim Shakespeare"),e.equal(a.length,123)}),QUnit.test("read model",function(e){e.expect(3),t.first().save({id:"2-the-tempest",author:"Tim Shakespeare"}),t.first().fetch(),e.equal(this.ajaxSettings.url,"/library/2-the-tempest"),e.equal(this.ajaxSettings.type,"GET"),e.ok(_.isEmpty(this.ajaxSettings.data))}),QUnit.test("destroy",function(e){e.expect(3),t.first().save({id:"2-the-tempest",author:"Tim Shakespeare"}),t.first().destroy({wait:!0}),e.equal(this.ajaxSettings.url,"/library/2-the-tempest"),e.equal(this.ajaxSettings.type,"DELETE"),e.equal(this.ajaxSettings.data,null)}),QUnit.test("destroy with emulateHTTP",function(e){e.expect(3),t.first().save({id:"2-the-tempest",author:"Tim Shakespeare"}),t.first().destroy({emulateHTTP:!0,emulateJSON:!0}),e.equal(this.ajaxSettings.url,"/library/2-the-tempest"),e.equal(this.ajaxSettings.type,"POST"),e.equal(JSON.stringify(this.ajaxSettings.data),'{"_method":"DELETE"}')}),QUnit.test("urlError",function(t){t.expect(2);var e=new Backbone.Model;t.raises(function(){e.fetch()}),e.fetch({url:"/one/two"}),t.equal(this.ajaxSettings.url,"/one/two")}),QUnit.test("#1052 - `options` is optional.",function(t){t.expect(0);var e=new Backbone.Model;e.url="/test",Backbone.sync("create",e)}),QUnit.test("Backbone.ajax",function(t){t.expect(1),Backbone.ajax=function(e){t.strictEqual(e.url,"/test")};var e=new Backbone.Model;e.url="/test",Backbone.sync("create",e)}),QUnit.test("Call provided error callback on error.",function(t){t.expect(1);var e=new Backbone.Model;e.url="/test",Backbone.sync("read",e,{error:function(){t.ok(!0)}}),this.ajaxSettings.error()}),QUnit.test("Use Backbone.emulateHTTP as default.",function(t){t.expect(2);var e=new Backbone.Model;e.url="/test",Backbone.emulateHTTP=!0,e.sync("create",e),t.strictEqual(this.ajaxSettings.emulateHTTP,!0),Backbone.emulateHTTP=!1,e.sync("create",e),t.strictEqual(this.ajaxSettings.emulateHTTP,!1)}),QUnit.test("Use Backbone.emulateJSON as default.",function(t){t.expect(2);var e=new Backbone.Model;e.url="/test",Backbone.emulateJSON=!0,e.sync("create",e),t.strictEqual(this.ajaxSettings.emulateJSON,!0),Backbone.emulateJSON=!1,e.sync("create",e),t.strictEqual(this.ajaxSettings.emulateJSON,!1)}),QUnit.test("#1756 - Call user provided beforeSend function.",function(t){t.expect(4),Backbone.emulateHTTP=!0;var e=new Backbone.Model;e.url="/test";var a={setRequestHeader:function(e,a){t.strictEqual(e,"X-HTTP-Method-Override"),t.strictEqual(a,"DELETE")}};e.sync("delete",e,{beforeSend:function(e){return t.ok(e===a),!1}}),t.strictEqual(this.ajaxSettings.beforeSend(a),!1)}),QUnit.test("#2928 - Pass along `textStatus` and `errorThrown`.",function(t){t.expect(2);var e=new Backbone.Model;e.url="/test",e.on("error",function(e,a,s){t.strictEqual(s.textStatus,"textStatus"),t.strictEqual(s.errorThrown,"errorThrown")}),e.fetch(),this.ajaxSettings.error({},"textStatus","errorThrown")})}();
//# sourceMappingURL=sync.js.map