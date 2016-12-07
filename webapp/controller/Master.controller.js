sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	
	return Controller.extend("masterdetailtemplate.controller.Master", {
		
		onInit: function() {
			
		},
		getRouter : function() {
			var oComponent = this.getOwnerComponent();
			return oComponent.getRouter();		
		},
		onCreate : function(oEvent) {
			
			this.getRouter().navTo("create");
		},
		toDetail : function(oEvent) {
			this.getRouter().navTo("detail",{id : "15"});
		}
	});
});