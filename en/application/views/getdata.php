<button type='button' name='getdata' id='getdata'>Get Data.</button>

<div id='result_table' style="color:white;">
Renew Group
</div>

<script type='text/javascript' language='javascript'>
$('#getdata').click(function(){
                $.ajax({
                        url: '<?php echo $this->config->item('outside_base_url'); ?>index/getvalues',
                         type:'POST',
                         dataType: 'json',
                          error: function(){
                          $('#result_table').append('<p>goodbye world</p>');
                          },

                         success: function(results){


                       $('#result_table').append('<p>hello world</p>' +results);
                       alert("Success!");

                          } // End of success function of ajax form
                          }); // End of ajax call

                });
</script>
