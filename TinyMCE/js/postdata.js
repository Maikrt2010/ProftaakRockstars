$.post('/jquery/submitData',   // url
       { myData: 'This is my data.' }, // data to be submit
       function(data, status, jqXHR) {// success callback
                $('p').append('status: ' + status + ', data: ' + data);
        })