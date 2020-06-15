$('.gallery').magnificPopup({ //enables the MP plugin
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    titleSrc: 'title', //captions are based on the title attribute of the <a> tags
    gallery: { enabled: true }, // enables gallery mode
    showCloseBtn: false, // Removed the "X" button to close. 
    fixedContentPos: true, // I didn't like the scroll while the image was enlarged so it's disabled.
    removalDelay: 500,
    mainClass: 'mfp-fade' //Enables editting transitions on event start and event end
});

//MagnificPopup source: https://dimsemenov.com/plugins/magnific-popup/
//MFP documentation: https://dimsemenov.com/plugins/magnific-popup/documentation.html