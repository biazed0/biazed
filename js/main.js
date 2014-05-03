var dummy = {
  "response": {
    "status": "ok",
    "userTier": "internal",
    "total": 20509,
    "startIndex": 1,
    "pageSize": 10,
    "currentPage": 1,
    "pages": 2051,
    "orderBy": "newest",
    "results": [
      {
        "id": "guardian-observer-style-guide-s",
        "sectionId": "info",
        "sectionName": "Info",
        "webPublicationDate": "2014-05-02T17:51:00Z",
        "webTitle": "Guardian and Observer style guide: S",
        "webUrl": "http://www.theguardian.com/guardian-observer-style-guide-s",
        "apiUrl": "http://content.guardianapis.com/guardian-observer-style-guide-s"
      },
      {
        "id": "society/2014/may/02/uk-cancer-care-national-shame-macmillan-charity-treatment",
        "sectionId": "society",
        "sectionName": "Society",
        "webPublicationDate": "2014-05-01T23:05:00Z",
        "webTitle": "UK cancer care a national shame, says Macmillan charity",
        "webUrl": "http://www.theguardian.com/society/2014/may/02/uk-cancer-care-national-shame-macmillan-charity-treatment",
        "apiUrl": "http://content.guardianapis.com/society/2014/may/02/uk-cancer-care-national-shame-macmillan-charity-treatment"
      },
      {
        "id": "guardian-observer-style-guide-c",
        "sectionId": "info",
        "sectionName": "Info",
        "webPublicationDate": "2014-05-01T17:05:00Z",
        "webTitle": "Guardian and Observer style guide: C",
        "webUrl": "http://www.theguardian.com/guardian-observer-style-guide-c",
        "apiUrl": "http://content.guardianapis.com/guardian-observer-style-guide-c"
      },
      {
        "id": "music/musicblog/2014/may/01/five-must-listen-new-tracks-from-around-the-world",
        "sectionId": "music",
        "sectionName": "Music",
        "webPublicationDate": "2014-05-01T16:34:51Z",
        "webTitle": "Five must-listen new tracks from around the world",
        "webUrl": "http://www.theguardian.com/music/musicblog/2014/may/01/five-must-listen-new-tracks-from-around-the-world",
        "apiUrl": "http://content.guardianapis.com/music/musicblog/2014/may/01/five-must-listen-new-tracks-from-around-the-world"
      },
      {
        "id": "world/2014/may/01/oklahoma-execution-drugs-pharmaceutical-companies-shortage",
        "sectionId": "world",
        "sectionName": "World news",
        "webPublicationDate": "2014-05-01T16:24:54Z",
        "webTitle": "Botched Oklahoma execution turns spotlight on US pharmaceutical firms",
        "webUrl": "http://www.theguardian.com/world/2014/may/01/oklahoma-execution-drugs-pharmaceutical-companies-shortage",
        "apiUrl": "http://content.guardianapis.com/world/2014/may/01/oklahoma-execution-drugs-pharmaceutical-companies-shortage"
      },
      {
        "id": "sustainable-business/human-rights-abuses-central-asia-workers-day-international",
        "sectionId": "sustainable-business",
        "sectionName": "Guardian Sustainable Business",
        "webPublicationDate": "2014-05-01T15:08:00Z",
        "webTitle": "Businesses across Europe and central Asia are still violating workers' rights",
        "webUrl": "http://www.theguardian.com/sustainable-business/human-rights-abuses-central-asia-workers-day-international",
        "apiUrl": "http://content.guardianapis.com/sustainable-business/human-rights-abuses-central-asia-workers-day-international"
      },
      {
        "id": "guardian-observer-style-guide-n",
        "sectionId": "info",
        "sectionName": "Info",
        "webPublicationDate": "2014-05-01T14:53:00Z",
        "webTitle": "Guardian and Observer style guide: N",
        "webUrl": "http://www.theguardian.com/guardian-observer-style-guide-n",
        "apiUrl": "http://content.guardianapis.com/guardian-observer-style-guide-n"
      },
      {
        "id": "media/greenslade/2014/may/01/denmark-magazines",
        "sectionId": "media",
        "sectionName": "Media",
        "webPublicationDate": "2014-05-01T08:20:33Z",
        "webTitle": "Danish magazine at the centre of a phone hacking-style scandal",
        "webUrl": "http://www.theguardian.com/media/greenslade/2014/may/01/denmark-magazines",
        "apiUrl": "http://content.guardianapis.com/media/greenslade/2014/may/01/denmark-magazines"
      },
      {
        "id": "football/2014/apr/30/jack-wilshere-roy-hodgson-england-world-cup",
        "sectionId": "football",
        "sectionName": "Football",
        "webPublicationDate": "2014-04-30T21:30:00Z",
        "webTitle": "Jack Wilshere outlook provides timely cheer for Roy Hodgson and England",
        "webUrl": "http://www.theguardian.com/football/2014/apr/30/jack-wilshere-roy-hodgson-england-world-cup",
        "apiUrl": "http://content.guardianapis.com/football/2014/apr/30/jack-wilshere-roy-hodgson-england-world-cup"
      },
      {
        "id": "news/datablog/2014/apr/30/top-100-universities-under-50-ranked",
        "sectionId": "news",
        "sectionName": "News",
        "webPublicationDate": "2014-04-30T20:00:00Z",
        "webTitle": "World's top 100 universities under 50: ranked by Times Higher Education",
        "webUrl": "http://www.theguardian.com/news/datablog/2014/apr/30/top-100-universities-under-50-ranked",
        "apiUrl": "http://content.guardianapis.com/news/datablog/2014/apr/30/top-100-universities-under-50-ranked"
      }
    ]
  }
};



function toggleBsInputFields() {
  $('#extrabuttons').toggle()
}

function toggleBsApplier() {
  bsApplier.toggleSelection();
}

function getSelectedNodes() {
    var selectedNodes = [];
    var sel = rangy.getSelection();
    for (var i = 0; i < sel.rangeCount; ++i) {
        selectedNodes = selectedNodes.concat( sel.getRangeAt(i).getNodes() );
    }
    return selectedNodes;
}
  //array for paragraph objects

  var par =[];


// bsSelection get the current selection, the DOM path of the object
// and anything else we need in order to later find the bullshit.
function bsSelection() {
  var sel = rangy.getSelection();
  var selText = sel.text();

}

function getBullshit() {
  return $.ajax({
    url: 'http://petardo.dk:8080/query?col=bs',
    type: 'POST',
    async: false,
    dataType: 'JSON',
    data: "q=" + JSON.stringify([{
      "eq": document.documentURI, "in": ["url"]
    }])
  }).done(function(data) {
    return data;
  })
}

function applyBullshit(bs) {
  if (bs.responseJSON) {
    bs.responseJSON.map(function(x) {
      // var obj = $(x.path);
     // console.log(x);
      var res = document.evaluate(x.xpath, document, null, XPathResult.ANY_TYPE, null );
      var obj = res.iterateNext();
       console.log(obj.innerHTML);
      //console.log(x.parHash, crc32(obj.innerHTML));

      if (x.parHash == crc32(obj.innerHTML)) {
      //  console.log(x.reason);
        obj.innerHTML = '<span class="bs" title="BULLSHIT! Here\'s why:' + x.reason +'">' + obj.innerHTML + '</span>'
      }
    });
    // enable tooltips
    $('span.bs').tooltip({
      
    });

  }
}



var stringArray=[];
var nodeArr=[];
 
var bsApplier;
var buttons = $($.parseHTML(''+
  '<div id="buttons"> <h3>Bullshit selection</h3> Make a selection in the document on the left and hit Bullshit to mark it as bullshit: '+
  '<input type="text" class="form-control" placeholder="Comment">'+
 ' <br> <input title="BULLSHIT!" type="button" disabled id="bsButton" value="BULLSHIT!" unselectable="on" class="btn btn-danger unselectable">'+
 '<br>   <div class="scontainer"> <div class="span6 offset3">  <div id="slider"></div> </div></div> '+
 ''+
 '  </div>'));




    function repositionTooltip( e, ui ){
            var div = $(ui.handle).data("tooltip").$tip[0];
            var pos = $.extend({}, $(ui.handle).offset(), { width: $(ui.handle).get(0).offsetWidth,
                                                            height: $(ui.handle).get(0).offsetHeight
                      });
            
            var actualWidth = div.offsetWidth;
            
            tp = {left: pos.left + pos.width / 2 - actualWidth / 2}            
            $(div).offset(tp);
            
            $(div).find(".tooltip-inner").text( ui.value );        
    }
        
    $("#slider").slider({ value: 15, slide: repositionTooltip, stop: repositionTooltip });
    $("#slider .ui-slider-handle:first").tooltip( {title: $("#slider").slider("value"), trigger: "manual"}).tooltip("show");





$( document ).ready(function() {
    
 
var titles=dummy.response.results;

$('.bsLevel').append('<div class=""><div class="progress col-sm-6">'+
 ' <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">'+
    '<span class="sr-only">80% Complete</span>'+
 ' </div></div> ' );  

for (i=0;i<titles.length;i++){

$('.storyContainer').append('<p>'+titles[i].webTitle+ '</p>'); 
}

  



rangy.init();

  // Enable buttons
  $('body').prepend(buttons);

  // Get bullshit
  var bs = getBullshit();
  applyBullshit(bs);

  // ClassApplier is the name for the module in 1.3. CssClassApplier is for 1.2 and earlier.
  var classApplierModule = rangy.modules.ClassApplier || rangy.modules.CssClassApplier;

      var sel;
  // Next line is pure paranoia: it will only return false if the browser has no support for ranges,
  // selections or TextRanges. Even IE 5 would pass this test.
  if (rangy.supported && classApplierModule && classApplierModule.supported) {
    // Hide extra buttons
    $('#extrabuttons').toggle()

    var extrabuttons = $('#extrabuttons');
    $('*').not('#extrabuttons').mouseup(function() {
      var selection = rangy.getSelection();
     // console.log(selection.text());
      if (selection.text().length > 0) {
        extrabuttons.show();
      }
    });

    bsApplier = rangy.createCssClassApplier("bsSelection", {
      elementTagName: "span",
      elementProperties: {
        class: "bsSelection"
      }

    });


    var bsButton = $('#bsButton').get(0);
    bsButton.disabled = false;

    bsButton.ontouchstart = bsButton.onmousedown = function() {
       var sel = rangy.getSelection();
       var whosYourDaddy = sel.anchorNode.parentNode;
        console.log(whosYourDaddy);

       var offset= (sel.anchorOffset);
       var endOffset = (sel.focusOffset);

       if(offset>endOffset){
        var rep=offset;
        offset=endOffset;
        endOffset=rep;
       }
       console.log(offset, endOffset);



      var hash = crc32(sel.anchorNode.parentNode.innerHTML);
     //console.log(hash);
      toggleBsApplier();
      $.ajax({
        url: 'http://petardo.dk:8080/insert?col=bs',
        type: 'POST',
        dataType: 'JSON',
        data: "doc=" + JSON.stringify({
          "bs": sel.text(),
          "xpath": getElementXPath(sel.anchorNode.parentNode).replace(/\/span$/, ''),
          "reason": $('.bscomment').text(),
          "reference": $('.reflink').text(),
          "url": document.documentURI,
          "parHash": hash
        })
      })
        .done(function(data) {
        // console.log(data);
        });
      return false;


    };

  }

$('#allSelection').on('click', function(){
  $( '.bsSelection' ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});

})







});













