// Script for search filter

const $searchBar = $(`#searchForm > input`); //Gets the input field in the form
const $img = $(`.imageContainer > a[title]`); // Gets the caption from the title attribute of the large images 




$searchBar.on('keyup', function(event) { //1. Input into the search field gets converted to lowercase 
    const searchTerm = $(this).val().toLowerCase();
    // const $imgList = $img.toArray();

    $img.show(); // 2. The function overrides the DOM's display settings for <a> tags with the title attribute

    $img.each(function() { //3.Then, the function runs a function that finds any of the <a> tags with the title attribute and compares their title with the search field input

        const title = $(this).attr('title').toLowerCase(); //3a. this converts the title attribute to lowercase

        if (!title.includes(searchTerm) && searchTerm !== null) { //3b. If the lowercase search input keystroke matches text within the title attribute, then the function will hide the titles that do not match.
            $(this).hide(); //3c. Hides non-matching titles
        }

    });
});