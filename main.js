$.getJSON('http://api.open-notify.org/astros.json', function(data) {
        $('#number').html('Currently there are <b>'+data['number']+'</b> working in space.');
        data["people"].forEach(element => {
          if (element.craft == "ISS") {
            $('#iss_people').append('<p>'+element.name+'</p>');
          }
          else {
            $('#tiangong_people').append('<p>'+element.name+'</p>');
          }
        });
      });

      $('#spacecraft').click(function () {
        $('#crafts').slideToggle();
      })
      
      $('#iss').click(function () {
        $('#iss_people').slideToggle();
      })
      
      $('#tiangong').click(function () {
        $('#tiangong_people').slideToggle();
      })