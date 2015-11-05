angular.module('starter.services').factory('LocationsService', [ function() {

  var locationsObj = {
    "type": "FeatureCollection",
    "generator": "FoodPolice App",
    "copyright": "Toronto Open DAta.",
    "timestamp": "2015-08-09T15:09:02Z",
    "city" : "Toronto",
    "coordinates": [  //Center point
      43.653226,
      -79.383184
    ],
    "features": [ //locations
      {
        "type": "Feature",
        "id": "node/252601050",
        "properties": {
          "@id": "node/252601050",
          "tags" : "20 RONCESVALLES AVE, GINGER EXPRESS, Food Take Out",
          "address" : "20 RONCESVALLES AVE",
          "status": "Pass",
          "popuptext": "<div><strong>20 RONCESVALLES AVE</strong></div><hr>" +
          "<div><a class='button icon-left ion-star button-balanced' href='#/tab/home/facility/10479655'><strong style='text-decoration: underline; cursor: pointer;'>GINGER EXPRESS</strong></a><a class='button button-icon icon ion-alert-circled' href='#/tab/home/report'>Report</a><br>Last inspected: Jul 27, 2015</div>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.4467310,
            43.6394980

          ]
        }
      },
      {
        "type": "Feature",
        "id": "node/252601050",
        "properties": {
          "@id": "node/252601050",
          "tags" : "222 LANSDOWNE AVE, PETER'S NO FRILLS,  Supermarket",
          "address" : "222 LANSDOWNE AVE",
          "status": "Multi",
          "popuptext": "<div><strong>222 LANSDOWNE AVE</strong><br>2 establishments at this address</div><hr>" +
          "<div><a class='button icon-left ion-star button-balanced' href='#/tab/home/facility/10479657'><strong style='text-decoration: underline; cursor: pointer;'>PARISCO CAFE</strong></a><a class='button button-icon icon ion-alert-circled' href='#/tab/home/report'>Report</a><br>Last inspected: Jul 27, 2015" +
          "<a class='button icon-left ion-star button-energized' href='#/tab/home/facility/10479658'><strong style='text-decoration: underline; cursor: pointer;'>PETER'S NO FRILLS</strong></a><a class='button button-icon icon ion-alert-circled' href='#/tab/home/report'>Report</a><br>Last inspected: Jul 27, 2015 </div>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.440179,
            43.649761

          ]
        }
      },
      {
        "type": "Feature",
        "id": "node/257355946",
        "properties": {
          "@id": "node/257355946",
          "tags" : "3160 EGLINTON AVE E, ROYAL BREAD Bakery",
          "address" : "3160 EGLINTON AVE E",
          "status": "ConditionalPass",
          "popuptext": "<div><strong>3160 EGLINTON AVE E</strong></div><hr>" +
          "<div><a class='button icon-left ion-star button-energized' href='#/tab/home/facility/10479656'><strong style='text-decoration: underline; cursor: pointer;'>ROYAL BREAD BAKERY</strong></a><a class='button button-icon icon ion-alert-circled' href='#/tab/home/report'>Report</a><br>Last inspected: Jul 27, 2015</div>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.2220310,
            43.7429390
          ]
        }
      },
      {
        "type": "Feature",
        "id": "node/257355946",
        "properties": {
          "@id": "node/257355946",
          "tags" : "3160 EGLINTON AVE E, ROYAL BREAD Bakery",
          "address" : "3160 EGLINTON AVE E",
          "status": "ConditionalPass",
          "popuptext": "<div><strong>3160 EGLINTON AVE E</strong></div><hr>" +
          "<div><a class='button icon-left ion-star button-energized' href='#/tab/home/facility/10479658'><strong style='text-decoration: underline; cursor: pointer;'>ROYAL BREAD BAKERY</strong></a><a class='button button-icon icon ion-alert-circled' href='#/tab/home/report'>Report</a><br>Last inspected: Jul 27, 2015</div>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.2220310,
            43.7429390
          ]
        }
      },
      {
        "type": "Feature",
        "id": "node/257355946",
        "properties": {
          "@id": "node/257355946",
          "tags" : "102 LAKESHORE AVE, M5J 1X9, THE RECTORY CAFE",
          "address" : "102 LAKESHORE AVE, M5J 1X9",
          "status": "Pass",
          "popuptext": "<div><strong>3160 EGLINTON AVE E</strong></div><hr>" +
          "<div><a class='button icon-left ion-star button-balanced' href='#/tab/home/facility/10479659'><strong style='text-decoration: underline; cursor: pointer;'>THE RECTORY CAFE</strong></a><a class='button button-icon icon ion-alert-circled' href='#/tab/home/report'>Report</a><br>Last inspected: Jul 27, 2015</div>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.356490,
            43.627368
          ]
        }
      },
      {
        "type": "Feature",
        "id": "node/257355946",
        "properties": {
          "@id": "node/257355946",
          "tags" : "1 BLUE JAYS WAY, M5V 1J4, QUEEN ST EXPRESS",
          "address" : "QUEEN ST EXPRESS",
          "status": "Pass",
          "popuptext": "<div><strong>1 BLUE JAYS WAY, M5V 1J4</strong></div><hr>" +
          "<div><a class='button icon-left ion-star button-balanced' href='#/tab/home/facility/10479660'><strong style='text-decoration: underline; cursor: pointer;'>QUEEN ST EXPRESS</strong></a><a class='button button-icon icon ion-alert-circled' href='#/tab/home/report'>Report</a><br>Last inspected: Jul 27, 2015</div>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -80.941021,
            35.209682
          ]
        }
      },
      {
        "type": "Feature",
        "id": "node/257355946",
        "properties": {
          "@id": "node/257355946",
          "tags" : "275 CHERRY ST, M5A 3L3, CHERRY STREET RESTAURANT",
          "address" : "275 CHERRY ST, M5A 3L3",
          "status": "ConditionalPass",
          "popuptext": "<div><strong>275 CHERRY ST, M5A 3L3</strong></div><hr>" +
          "<div><a class='button icon-left ion-star button-energized' href='#/tab/home/facility/10479661'><strong style='text-decoration: underline; cursor: pointer;'>CHERRY STREET RESTAURANT</strong></a><a class='button button-icon icon ion-alert-circled' href='#/tab/home/report'>Report</a><br>Last inspected: Jul 27, 2015</div>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.352504,
            43.645459
          ]
        }
      },
      {
        "type": "Feature",
        "id": "node/257355946",
        "properties": {
          "@id": "node/257355946",
          "tags" : "277 RUSHOLME RD, M6H 2Y9, ST. MICHAEL'S HOUSE",
          "address" : "277 RUSHOLME RD, M6H 2Y9",
          "status": "Pass",
          "popuptext": "<div><strong>277 RUSHOLME RD, M6H 2Y9</strong></div><hr>" +
          "<div><a class='button icon-left ion-star button-balanced' href='#/tab/home/facility/10479662'><strong style='text-decoration: underline; cursor: pointer;'>ST. MICHAEL'S HOUSE</strong></a><a class='button button-icon icon ion-alert-circled' href='#/tab/home/report'>Report</a><br>Last inspected: Jul 27, 2015</div>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.429940,
            43.658215
          ]
        }
      },
      {
        "type": "Feature",
        "id": "node/257355946",
        "properties": {
          "@id": "node/257355946",
          "tags" : "443 LAKESHORE AVE, M5J 2W2, ARTSCAPE - RETREAT CENTRE",
          "address" : "443 LAKESHORE AVE, M5J 2W2",
          "status": "ConditionalPass",
          "popuptext": "<div><strong>443 LAKESHORE AVE, M5J 2W2</strong></div><hr>" +
          "<div><a class='button icon-left ion-star button-energized' href='#/tab/home/facility/10479663'><strong style='text-decoration: underline; cursor: pointer;'>ARTSCAPE - RETREAT CENTRE</strong></a><a class='button button-icon icon ion-alert-circled' href='#/tab/home/report'>Report</a><br>Last inspected: Jul 27, 2015</div>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.384027,
            43.612932
          ]
        }
      },
      {
        "type": "Feature",
        "id": "node/257355946",
        "properties": {
          "@id": "node/257355946",
          "tags" : "46 THE QUEENSWAY, M6R 1B6, LAKEVIEW LIFECARE CENTRE",
          "address" : "46 THE QUEENSWAY, M6R 1B6",
          "status": "Pass",
          "popuptext": "<div><strong>46 THE QUEENSWAY, M6R 1B6</strong></div><hr>" +
          "<div><a class='button icon-left ion-star button-balanced' href='#/tab/home/facility/10479664'><strong style='text-decoration: underline; cursor: pointer;'>LAKEVIEW LIFECARE CENTRE</strong></a><a class='button button-icon icon ion-alert-circled' href='#/tab/home/report'>Report</a><br>Last inspected: Jul 27, 2015</div>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.451451,
            43.639710
          ]
        }
      }
    ]
  };

  return {
    all: function() {
      return locationsObj;
    },
    get: function(Id) {
      // Simple index lookup
      return locationsObj[Id];
    }
  }

}]);
