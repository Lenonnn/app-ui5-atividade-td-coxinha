/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"AppCoxinha/AppCoxinha/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"AppCoxinha/AppCoxinha/test/integration/pages/App",
	"AppCoxinha/AppCoxinha/test/integration/pages/Browser",
	"AppCoxinha/AppCoxinha/test/integration/pages/Master",
	"AppCoxinha/AppCoxinha/test/integration/pages/Detail",
	"AppCoxinha/AppCoxinha/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "AppCoxinha.AppCoxinha.view."
	});

	sap.ui.require([
		"AppCoxinha/AppCoxinha/test/integration/NavigationJourneyPhone",
		"AppCoxinha/AppCoxinha/test/integration/NotFoundJourneyPhone",
		"AppCoxinha/AppCoxinha/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});