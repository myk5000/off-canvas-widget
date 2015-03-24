jQuery(document).ready(function($){
  // set up the options to be used for jqDock...
  var dockOptions =
    { align: 'left' // vertical menu, with expansion RIGHT from a fixed LEFT edge
    , size: 60  // set the maximum minor axis (horizontal) image dimension to 60px
    };
  // ...and apply...
  $('#docmenu').jqDock(dockOptions);
});

