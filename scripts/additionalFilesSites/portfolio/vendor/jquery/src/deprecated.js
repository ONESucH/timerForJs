define(["./core"],function(n){n.fn.extend({bind:function(n,t,e){return this.on(n,null,t,e)},unbind:function(n,t){return this.off(n,null,t)},delegate:function(n,t,e,f){return this.on(t,n,e,f)},undelegate:function(n,t,e){return 1===arguments.length?this.off(n,"**"):this.off(t,n||"**",e)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack});
//# sourceMappingURL=deprecated.js.map
