var restaurants_data_url = 'https://api.airtable.com/v0/appFQlFxeZz0lJMJ7/Restaurants%20SF?api_key=keykETEaNX5SX8cZb';
var restaurantsHTML = '';
var restaurantsDiv = $('.restaurants');
//var restaurants_Pictures = restaurants.fields['Pictures'];
var renderrestaurantsData = function(data) {
  console.log(data);
  data.records.forEach(function(restaurant) {

    restaurantsHTML += '<h2>' + restaurant.fields['Name'] + '</h2>';
    restaurantsHTML += '<h4>' + restaurant.fields['Address'] + '</h4>';
    restaurantsHTML += '<p>' + restaurant.fields['phone number'] + '</p>';
   restaurantsHTML += '<p>' + restaurant.fields['Rate'] + '</p>';

 restaurantsHTML += '<a href="' + restaurant.fields['Website'] + '">' + restaurant.fields['Website'] + '</a>';
   restaurantsHTML += '<p>' + restaurant.fields['Hours'] + '</p>'
    restaurantsHTML += '<a href="' + restaurant.fields['Menu'] + '">' + restaurant.fields['Menu'] + '</a>';
    //restaurantsHTML += '<img  src =" ${Pictures.url}" >';
  restaurantsHTML += restaurant.fields['Pictures'];
    restaurantsHTML += '<hr />';
  });
  restaurantsDiv.html(restaurantsHTML);
};

//
$.getJSON(restaurants_data_url, renderrestaurantsData);
