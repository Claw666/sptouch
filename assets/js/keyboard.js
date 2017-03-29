$(function(){
    var $write = $('#write'),
        shift = false,
        capslock = false;
    
    $('#keyboard li').click(function(){
        var $this = $(this),
            character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
        
        
        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.val();
            
            $write.val(html.substr(0, html.length - 1));
            return false;
        }
        
        console.log("DO IT ", character);
        // Add the character
        $write.val($write.val() + character);
    });
});
