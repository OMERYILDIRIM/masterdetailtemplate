sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("masterdetailtemplate.controller.Create", {

		onInit: function() {
	
		},
		getRouter : function() {
			var oComponent = this.getOwnerComponent();
			return oComponent.getRouter();		
		},
		onBack : function() {
			this.getRouter().navTo("master");
		}

	});

});