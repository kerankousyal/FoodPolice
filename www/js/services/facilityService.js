angular.module('starter.services').factory('FacilityService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var facilities = [
    {//facility 1
      "id": "10479655",
      "ESTABLISHMENT_ID": "10479655",
      "ESTABLISHMENT_NAME": "GINGER EXPRESS",
      "ESTABLISHMENTTYPE": "Food Take Out",
      "ESTABLISHMENT_ADDRESS": "20 RONCESVALLES AVE ",
      "ESTABLISHMENT_STATUS": "Pass",
      "LAST_INSPECTION_DATE": "2015-05-19",
      "inspections":[
        {
          "@id": "1",
          "INSPECTION_YEAR": "2013",
          "ESTABLISHMENT_STATUS": "Pass",
          "infractions": [{
            "INFRACTION_DETAILS": "",
            "INSPECTION_DATE": "2014-01-13",
            "SEVERITY": "",
            "ACTION": "",
            "COURT_OUTCOME": "",
            "AMOUNT_FINED": ""
          } ]
        },
        {
          "@id": "2",
          "INSPECTION_YEAR": "2014",
          "ESTABLISHMENT_STATUS": "Pass",
          "infractions": [ {
            "INFRACTION_DETAILS": "FAIL TO PROVIDE THERMOMETER IN STORAGE COMPARTMENT O. REG  562/90 SEC. 21",
            "INSPECTION_DATE": "2014-05-22",
            "SEVERITY": "S - Significant",
            "ACTION": "Corrected During Inspection",
            "COURT_OUTCOME": " ",
            "AMOUNT_FINED": " "
          }, {
            "INFRACTION_DETAILS": "Food handler fail to wear headgear",
            "INSPECTION_DATE": "2014-09-19",
            "SEVERITY": "M - Minor",
            "ACTION": "Notice to Comply",
            "COURT_OUTCOME": " ",
            "AMOUNT_FINED": " "
          }
          ]
        },{
          "@id": "3",
          "INSPECTION_YEAR": "2015",
          "ESTABLISHMENT_STATUS": "Pass",
          "infractions": [ {
            "INFRACTION_DETAILS": "FAIL TO PROVIDE SOAP OR DETERGENT IN FOOD PREPARATION AREA O. REG  562/90 SEC. 20(1)(C)",
            "INSPECTION_DATE": "2015-05-19",
            "SEVERITY": "S - Significant",
            "ACTION": "Corrected During Inspection",
            "COURT_OUTCOME": " ",
            "AMOUNT_FINED": " "
          }
          ]
        }
      ]
    },
    {//Facility 2
      "id": "10479656",
      "ESTABLISHMENT_ID": "10479656",
      "ESTABLISHMENT_NAME": "ROYAL BREAD BAKERY",
      "ESTABLISHMENTTYPE": "Bakery",
      "ESTABLISHMENT_ADDRESS": "3160 EGLINTON AVE E",
      "ESTABLISHMENT_STATUS": "ConditionalPass",
      "LAST_INSPECTION_DATE": "2015-05-19",
      "inspections":[
        {
          "@id": "1",
          "INSPECTION_YEAR": "2013",
          "ESTABLISHMENT_STATUS": "Pass",
          "infractions": [{
            "INFRACTION_DETAILS": "",
            "INSPECTION_DATE": "2014-01-13",
            "SEVERITY": "",
            "ACTION": "",
            "COURT_OUTCOME": "",
            "AMOUNT_FINED": ""
          } ]
        },
        {
          "@id": "2",
          "INSPECTION_YEAR": "2014",
          "ESTABLISHMENT_STATUS": "ConditionalPass",
          "infractions": [ {
            "INFRACTION_DETAILS": "FAIL TO PROVIDE THERMOMETER IN STORAGE COMPARTMENT O. REG  562/90 SEC. 21",
            "INSPECTION_DATE": "2014-05-22",
            "SEVERITY": "C - Crucial",
            "ACTION": "Corrected During Inspection",
            "COURT_OUTCOME": " ",
            "AMOUNT_FINED": " "
          }
          ]
        },{
          "@id": "3",
          "INSPECTION_YEAR": "2015",
          "ESTABLISHMENT_STATUS": "ConditionalPass",
          "infractions": [ {
            "INFRACTION_DETAILS": "FAIL TO PROVIDE SOAP OR DETERGENT IN FOOD PREPARATION AREA O. REG  562/90 SEC. 20(1)(C)",
            "INSPECTION_DATE": "2015-05-19",
            "SEVERITY": "NA - Not Applicable",
            "ACTION": "Corrected During Inspection",
            "COURT_OUTCOME": " ",
            "AMOUNT_FINED": " "
          }
          ]
        }
      ]
    },
    {
      "id": "10479657",
      "ESTABLISHMENT_ID": "10479657",
      "ESTABLISHMENT_NAME": "PARISCO CAFE",
      "ESTABLISHMENTTYPE": "Cafe",
      "ESTABLISHMENT_ADDRESS": "222 LANSDOWNE AVE",
      "ESTABLISHMENT_STATUS": "Pass",
      "LAST_INSPECTION_DATE": "2015-05-19",
      "inspections":[
        {
          "@id": "1",
          "INSPECTION_YEAR": "2013",
          "ESTABLISHMENT_STATUS": "Pass",
          "infractions": [{
            "INFRACTION_DETAILS": "FAIL TO PROVIDE THERMOMETER IN STORAGE COMPARTMENT O. REG  562/90 SEC. 21",
            "INSPECTION_DATE": "2014-05-22",
            "SEVERITY": "S - Significant",
            "ACTION": "Corrected During Inspection",
            "COURT_OUTCOME": " ",
            "AMOUNT_FINED": " "
          } ]
        },
        {
          "@id": "2",
          "INSPECTION_YEAR": "2014",
          "ESTABLISHMENT_STATUS": "Pass",
          "infractions": [ {
            "INFRACTION_DETAILS": "Food handler fail to wear headgear",
            "INSPECTION_DATE": "2014-09-19",
            "SEVERITY": "M - Minor",
            "ACTION": "Notice to Comply",
            "COURT_OUTCOME": " ",
            "AMOUNT_FINED": " "
          }
          ]
        }
      ]
    },
    {
      "id": "10479658",
      "ESTABLISHMENT_ID": "10479658",
      "ESTABLISHMENT_NAME": "PETER'S NO FRILLS",
      "ESTABLISHMENTTYPE": "Supermarket",
      "ESTABLISHMENT_ADDRESS": "222 LANSDOWNE AVE",
      "ESTABLISHMENT_STATUS": "ConditionalPass",
      "LAST_INSPECTION_DATE": "2015-05-19",
      "inspections":[
        {
          "@id": "1",
          "INSPECTION_YEAR": "2015",
          "ESTABLISHMENT_STATUS": "ConditionalPass",
          "infractions": [{
            "INFRACTION_DETAILS": "FAIL TO PROVIDE THERMOMETER IN STORAGE COMPARTMENT O. REG  562/90 SEC. 21",
            "INSPECTION_DATE": "2014-05-22",
            "SEVERITY": "S - Significant",
            "ACTION": "Corrected During Inspection",
            "COURT_OUTCOME": " ",
            "AMOUNT_FINED": " "
          } ]
        },
        {
          "@id": "2",
          "INSPECTION_YEAR": "2014",
          "ESTABLISHMENT_STATUS": "Pass",
          "infractions": [ {
            "INFRACTION_DETAILS": "Food handler fail to wear headgear",
            "INSPECTION_DATE": "2014-09-19",
            "SEVERITY": "M - Minor",
            "ACTION": "Notice to Comply",
            "COURT_OUTCOME": " ",
            "AMOUNT_FINED": " "
          }
          ]
        }
      ]
    }
  ];

  return {
    all: function() {
      return facilities;
    },
    get: function(FacilityId) {
      // Search through facility list
      if(facilities != null)
      {
        for (var i in facilities)
        {
          if(facilities[i].id == FacilityId)
          {
            return facilities[i];
          }
        }
      }
      return null;
    },
    search: function(searchString) {
      var facilitiesList =[];

      // Search through facility list
      if(facilities != null && searchString != '')
      {
        searchString = searchString.toLowerCase();
        for (var i in facilities)
        {
          if(facilities[i].ESTABLISHMENT_NAME.toLowerCase().indexOf(searchString)>-1)
          {
            facilitiesList.push(facilities[i]);
          }
        }
      }

      return facilitiesList;
    }
  }
});
