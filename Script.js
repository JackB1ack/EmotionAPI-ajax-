 $('#bt1').click(function getemo() {
        var dat = $('#insertur').val();
        var params = {
            // Request parameters
        };

        $.ajax({

            url: "https://api.projectoxford.ai/emotion/v1.0/recognize?" + $.param(params),
            beforeSend: function (xhrObj) {
                // Request headers
                xhrObj.setRequestHeader("Content-Type", "application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "e7b462a6fa14465297a1eb2b8bd786ba");
            },
            type: "POST",
            // Request body
            data: '{ "url": "' + dat + '" }'
        })

          .success(function (result) {
              alert("Данные получены!");

              var items = [];
              $('.my-new-list').remove();
              $('.1img').remove();
              $.each(result[0].scores, function (key, val) {
                  items.push('<li>' + key + ': ' + val + '</li>');
              });

              $('<ul/>', {
                  'class': 'my-new-list',
                  html: items.join('')
              }).appendTo('body');
              $("body").prepend('<img src="' + dat + '" class="1img"' + 'style="width:700px;height:400px;' + '">');
          })
           .fail(function () {
               alert("error");
           });
      
    });