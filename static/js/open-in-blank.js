/**
 * 
 * @authors shiwen (chenshiwen@outlook.com)
 * @date    2016-08-06 21:55:13
 * @version V1.0
 */

function addBlankTargetForLinks () {
  $('a[href^="http"]').each(function(){
        $(this).attr('target', '_blank');
    });
}

$(document).bind('DOMNodeInserted', function(event) {
    addBlankTargetForLinks();
});