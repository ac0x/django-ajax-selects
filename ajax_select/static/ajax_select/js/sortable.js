$(function() {
  $( ".ajax_select_sortable" ).sortable(
    {
      update: function(event, ui){
        var input_id = $(this).attr('id').replace('_on_deck', '');
        var pf = $(this).attr('id') + '_';
        var value_list = [];
        $(this).children('div').each( function(i, e) {
          value_list.push($(e).attr('id').replace(pf, '').trim());
        });
        if(value_list.length > 0) {
          $('#' + input_id).val('|' + value_list.join('|') + '|');
        }
      }
    }
  );
  $( ".ajax_select_sortable" ).disableSelection();
});
