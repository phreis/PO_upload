sap.ui.define(['sap/m/MessageToast', 'sap/ui/core/mvc/Controller'],
	function(MessageToast, Controller) {
		"use strict";

		var ControllerController = Controller.extend("PO_UPLOAD.controller.Controller", {
			handleUploadComplete: function(oEvent) {
				var sResponse = oEvent.getParameter("response");
				if (sResponse) {
					var sMsg = "";
					var m = /^\[(\d\d\d)\]:(.*)$/.exec(sResponse);
					if (m[1] == "200") {
						
						//	sMsg = "Return Code: " + m[1] + "\n" + m[2], "SUCCESS", "Upload Success";
						oEvent.getSource().setValue("");
					} else {
						//	sMsg = "Return Code: " + m[1] + "\n" + m[2], "ERROR", "Upload Error";
					}

					MessageToast.show(sMsg);
				}
			},

			handleUploadPress: function(oEvent) {
				var oFileUploader = this.getView().byId("uploader");
				oFileUploader.upload();
				MessageToast.show("handleUploadPress");
			},
			handleTestmodePress: function(oEvent) {
				var box = this.getView().byId("box0");
				MessageToast.show(box.getSelected());
//MessageToast.show({mySelectedState});.

			}
		});

		return ControllerController;

	});