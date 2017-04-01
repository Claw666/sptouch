$(function(){
    var $write = $('#write');
    
    $('#keyboard li').click(function(){
        var $this = $(this),
            character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
        
        
        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.val();
            
            $write.val(html.substr(0, html.length - 1));
            return false;
        }
    });
});
