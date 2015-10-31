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
          "<div><button class='button icon-left ion-star button-balanced' href='#/tab/home/facility/10479655'><strong style='text-decoration: underline; cursor: pointer;'>GINGER EXPRESS</strong></button><a class='button button-icon icon ion-alert-circled'>Report</a><br>Last inspected: Jul 27, 2015</div>"
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
          "<div><a class='button icon-left ion-star button-balanced' href='#/tab/home/facility/10479657'><strong style='text-decoration: underline; cursor: pointer;'>PARISCO CAFE</strong></a><a class='button button-icon icon ion-alert-circled'>Report</a><br>Last inspected: Jul 27, 2015" +
          "<button class='button icon-left ion-star button-energized' href='#/tab/home/facility/10479658'><strong style='text-decoration: underline; cursor: pointer;'>PETER'S NO FRILLS</strong></button><a class='button button-icon icon ion-alert-circled'>Report</a><br>Last inspected: Jul 27, 2015 </div>"
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
          "<div><button class='button icon-left ion-star button-energized' href='#/tab/home/facility/10479656'><strong style='text-decoration: underline; cursor: pointer;'>ROYAL BREAD BAKERY</strong></button><a class='button button-icon icon ion-alert-circled'>Report</a><br>Last inspected: Jul 27, 2015</div>"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.2220310,
            43.7429390
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
