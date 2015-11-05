angular.module('starter.services').factory('FacilityService', function($http) {
  // Might use a resource here that returns a JSON array
//HTTP call to Dataabse
  $http({
    method: 'GET',
    url: 'https://kkousyal.cloudant.com/toronto/_all_docs',
    headers: {
      'Authorization': 'Basic a2tvdXN5YWw6YW1hcjEyMw=='
    }
  }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    var result = response;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    var error = response;
  });
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
    },
    {
      "id": "10479659",
      "ESTABLISHMENT_ID": "10479659",
      "ESTABLISHMENT_NAME": "THE RECTORY CAFE",
      "ESTABLISHMENTTYPE": "Cafe",
      "ESTABLISHMENT_ADDRESS": "102 LAKESHORE AVE, M5J 1X9",
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
      "id": "10479660",
      "ESTABLISHMENT_ID": "10479660",
      "ESTABLISHMENT_NAME": "QUEEN ST EXPRESS",
      "ESTABLISHMENTTYPE": "Supermarket",
      "ESTABLISHMENT_ADDRESS": "1 BLUE JAYS WAY, M5V 1J4",
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
    },
    {
      "id": "10479661",
      "ESTABLISHMENT_ID": "10479661",
      "ESTABLISHMENT_NAME": "CHERRY STREET RESTAURANT",
      "ESTABLISHMENTTYPE": "RESTAURANT",
      "ESTABLISHMENT_ADDRESS": "275 CHERRY ST, M5A 3L3",
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
    },
    {
      "id": "10479662",
      "ESTABLISHMENT_ID": "10479662",
      "ESTABLISHMENT_NAME": "ST. MICHAEL'S HOUSE",
      "ESTABLISHMENTTYPE": "Bar",
      "ESTABLISHMENT_ADDRESS": "277 RUSHOLME RD, M6H 2Y9",
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
      "id": "10479663",
      "ESTABLISHMENT_ID": "10479663",
      "ESTABLISHMENT_NAME": " ARTSCAPE - RETREAT CENTRE",
      "ESTABLISHMENTTYPE": "RETREAT CENTRE",
      "ESTABLISHMENT_ADDRESS": "443 LAKESHORE AVE, M5J 2W2",
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
    },
    {
      "id": "10479664",
      "ESTABLISHMENT_ID": "10479664",
      "ESTABLISHMENT_NAME": "LAKEVIEW LIFECARE CENTRE",
      "ESTABLISHMENTTYPE": "Retreat center",
      "ESTABLISHMENT_ADDRESS": "46 THE QUEENSWAY, M6R 1B6",
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
