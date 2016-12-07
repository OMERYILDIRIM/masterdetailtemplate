sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("masterdetailtemplate.controller.Detail", {

			onInit: function() {
				this.getRouter().attachRoutePatternMatched(this._onRouteMatched, this);
			},
			_onRouteMatched : function(oEvent) {
				var sRouteName = oEvent.getParameter("name");
				if (sRouteName==="detail") {
					var id = oEvent.getParameter("arguments").id;
					MessageToast.show("id:"+id);
				}
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