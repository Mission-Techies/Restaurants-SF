var restaurants_data_url = 'https://api.airtable.com/v0/appFQlFxeZz0lJMJ7/Restaurants%20SF?api_key=keykETEaNX5SX8cZb';
var restaurantsHTML = '';
var restaurantsDiv = $('.restaurants');

var renderrestaurantsData = function(data) {
  // console.log(data);
  data.records.forEach(function(restaurant) {
//this code for american restaurants

  var restaurants_Pictures = restaurant.fields['Pictures'];

  if(restaurant.fields['Name']) {

      restaurantsHTML += '<div class="rest"><h2>' + restaurant.fields['Name'] + '</h2>';
      restaurantsHTML += '<h4>' + restaurant.fields['Address'] + '</h4>';


    if(restaurant.fields['Cuisine']) {
      foodclass = restaurant.fields['Cuisine']
      console.log(foodclass)
      restaurantsHTML += '<h3 class="hidden">' + restaurant.fields['Cuisine'] + '</h3>';

    }

    if (restaurant.fields['phone number']) {
      restaurantsHTML += '<p>' + restaurant.fields['phone number'] + '</p>';
    }
    if (restaurant.fields['Rate']){
       restaurantsHTML += '<p>' + restaurant.fields['Rate'] + '</p>';
     };

    if(restaurant.fields['Website']) {
       restaurantsHTML += '<a href="' + restaurant.fields['Website'] + '">' + restaurant.fields['Website'] + '</a>';
    };

    if (restaurant.fields['Hours']) {
      restaurantsHTML += `<p>${restaurant.fields['Hours']}</p>`;
    };

    if (restaurant.fields['Menu']) {
      restaurantsHTML += '<a href="' + restaurant.fields['Menu'] + '">' + restaurant.fields['Menu'] + '</a>';
    };
}


  $.each(restaurants_Pictures, function(i, Pictures){
  restaurantsHTML += "</br>";
    restaurantsHTML += `<img src="${Pictures.url}">`;
    // console.log(Pictures.url);
    restaurantsHTML += '<hr />';
  });
  restaurantsHTML += '</div>';
  });

  restaurantsDiv.html(restaurantsHTML);
}
//
$.getJSON(restaurants_data_url, renderrestaurantsData);
