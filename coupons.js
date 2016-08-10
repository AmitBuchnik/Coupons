    $(document).ready(function () {
        $.ajax( {
            url: 'data/coupons.json',
            dataType: 'json',
            success: function (data, status, xhr) {
                console.log(status);

                if(xhr.status == 200) {
                    var items = [];
                    let arr = data.coupons;

                    $.each(arr, function (key, val) {
                        /*items.push("<li><a href='#details'><img src='" + val.img + "'/><h2>"
                                        + val.name + "</h2><p>" + val.description + "</p></a></li>");*/

                        items.push("<li data-name='" + val.name + "'><a href='#'><img src='" + val.img + "'/><h2 class='summary'>"
                            + val.deal + "</h2><p class='brand'>" + val.name + "</p></a></li>");
                    });

                    $('#list').append(items.join(''));
                    /*data.forEach(function(obj)
                     {
                     var li = document.createElement("li");
                     var a = document.createElement("a");
                     var text = document.createTextNode(obj.country);
                     a.appendChild(text);
                     //a.innerHTML = obj.country;
                     a.setAttribute("href","#");
                     li.appendChild(a);
                     list.appendChild(li);
                     });*/
                    $('#list').listview('refresh');

                    $('#list').children('li').on('click', function () {
                        let coupon = arr.find(c => c.name == $(this).attr('data-name'));
                        let content = "<a href='#' data-rel='back' class='ui-btn ui-corner-all ui-shadow " +
                                            "ui-btn-b ui-icon-delete ui-btn-icon-notext ui-btn-right'>Close</a>" +
                                      "<div data-role='header' data-theme='a' role='banner' class='ui-header ui-bar-a'>" +
                                        "<h1 class='ui-title' role='heading' aria-level='1' style='font-weight: normal'>" + coupon.name + "</h1>" +
                                      "</div>" +
                                      "<div data-role='main' class='ui-content'>" +
                                         "<p style='width: 250px; word-break: keep-all' class='description'>" + coupon.description + "</p>" +
                                      "</div>";
                        $("#details").html(content);
                        $("#details").popup('open', {transition: 'slide'});
                    });
                }
                else {
                    console.log('error: ' + xhr.statusText);
                }
            },
            error: function (xhr, status, error) {
                console.log(status + " " + error);
            }
        });

        /*$.getJSON(
         'countries.json',
         function (data) {
         var items = [];
         $.each(data, function( key, val ) {
         items.push( "<li><a href='#'>" + val.country + "</a></li>" );
         });

         $('#list').append(items.join(''));

         /!*data.forEach(function(obj)
         {
         var li = document.createElement("li");
         var a = document.createElement("a");
         var text = document.createTextNode(obj.country);
         a.appendChild(text);
         //a.innerHTML = obj.country;
         a.setAttribute("href","#");
         li.appendChild(a);
         list.appendChild(li);
         });*!/
         $('#list').listview('refresh');
         })
         .done(function(data) {
         console.log('second success');
         })
         .fail(function () {
         console.log('error');
         });*/
    });
