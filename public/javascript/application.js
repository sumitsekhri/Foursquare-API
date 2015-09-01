$(function() {

  // $.getJSON('https://api.foursquare.com/v2/venues/search?client_id=1IFTS2XJBMMDBGL1YBFEKVTSTZUBA1FLQBU3WCN53G4EMLU2&client_secret=QC3GQVIH3TFTBQJI4E1XRP12PCGYNHA44VOZ2ZELPGAWWZEV&v=20130815&near=Vancouver,BC&query=burrito', function(data) {
  //   $('li').append(JSON.stringify(data));
  // });

  $.getJSON('https://api.foursquare.com/v2/venues/search?client_id=1IFTS2XJBMMDBGL1YBFEKVTSTZUBA1FLQBU3WCN53G4EMLU2&client_secret=QC3GQVIH3TFTBQJI4E1XRP12PCGYNHA44VOZ2ZELPGAWWZEV&v=20130815&near=Vancouver,BC&query=burrito', function(data){
    var venues = data.response.venues;
      var list = $('#places');
      $.each(venues, function(index, place){
        // $('li').text(place.name);
        list.append('<li>'+place.name+'</li>');
      })
    console.log(data)
  });
  //
  // var starbucksId = apis.foursquare.searchVenue({
  // ll: here().lat + ',' + here().lng,
  // query: "starbucks"
  //   }).response.venues[0].id;
  //   apis.foursquare.checkin({
  //     venueId: starbucksId,
  //     shout: "Im there ;)",
  //     broadcast: "public"
  //   });

});

// 'https://api.foursquare.com/v2/venues/search?client_id=1IFTS2XJBMMDBGL1YBFEKVTSTZUBA1FLQBU3WCN53G4EMLU2&client_secret=QC3GQVIH3TFTBQJI4E1XRP12PCGYNHA44VOZ2ZELPGAWWZEV&v=20130815&ll=49.2,-123.1&query=burrito'
