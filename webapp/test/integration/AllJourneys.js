/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 GetHeadersSet in the list
// * All 3 GetHeadersSet have at least one GetItensSet

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
		"AppCoxinha/AppCoxinha/test/integration/MasterJourney",
		"AppCoxinha/AppCoxinha/test/integration/NavigationJourney",
		"AppCoxinha/AppCoxinha/test/integration/NotFoundJourney",
		"AppCoxinha/AppCoxinha/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});