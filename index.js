var restaurants_data_url = 'https://api.airtable.com/v0/appFQlFxeZz0lJMJ7/Restaurants%20SF?api_key=keykETEaNX5SX8cZb';
var restaurantsHTML = '';
var restaurantsDiv = $('.restaurants');

var renderrestaurantsData = function(data) {
  console.log(data);
  data.records.forEach(function(restaurant) {
var restaurants_Pictures = restaurant.fields['Pictures'];
    restaurantsHTML += '<h2>' + restaurant.fields['Name'] + '</h2>';
    restaurantsHTML += '<h4>' + restaurant.fields['Address'] + '</h4>';

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



    restaurantsHTML += '<a href="' + restaurant.fields['Menu'] + '">' + restaurant.fields['Menu'] + '</a>';


  $.each(restaurants_Pictures, function(i, Pictures){
    restaurantsHTML += `<img src="${Pictures.url}">`;
    console.log(Pictures.url);
    restaurantsHTML += '<hr />';
  });

  restaurantsDiv.html(restaurantsHTML);
});
}
//
$.getJSON(restaurants_data_url, renderrestaurantsData);
