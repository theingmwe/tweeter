/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name: Breanne Oo
 * Email: oot@oregonstate.edu
 */

var createTwitModal = document.getElementById('create-twit-modal')
var modalBackdrop = document.getElementById('modal-backdrop')
var createTwitButton = document.getElementById('create-twit-button')
var twitTextInput = document.getElementById('twit-text-input')
var twitAttributionInput = document.getElementById('twit-attribution-input')
const modalCloseButton = document.getElementsByClassName('modal-close-button') [0]
const modalCancelButton = document.getElementsByClassName('modal-cancel-button') [0]
const modalAcceptButton = document.getElementsByClassName('modal-accept-button') [0]
var twitContainer = document.getElementsByClassName('twit-container') [0]

/*********************** CREATE POST ********************************/

/* makes modal visible */
function openModal() {
    createTwitModal.classList.remove('hidden')
    modalBackdrop.classList.remove('hidden')
}

/* calls openModal when the create twit button is clicked on */
createTwitButton.addEventListener('click', openModal)

/* resets modal */
function closeModal() {
    createTwitModal.classList.add('hidden')
    modalBackdrop.classList.add('hidden')
    twitTextInput.value = ""
    twitAttributionInput.value = ""
}

/* calls closeModal when the x button is clicked on */
modalCloseButton.addEventListener('click', closeModal)
modalCancelButton.addEventListener('click', closeModal)

/* checks to see if all text fields have inputs */
function inputCheck() {
    alert("Whoops! Looks like you didn't fill in the text properly")
}

/* create Twit Button */
function createTwit() {
    // create article (container for tweet)
    var articleFr = document.createElement("article")

    // add twit class to article
    articleFr.classList.add("twit")

    // create div for twit-icon
    var divTwitIcon = document.createElement("div")
    // add twit-icon class to div
    divTwitIcon.classList.add("twit-icon")
    // append the twit-icon div to the article
    articleFr.appendChild(divTwitIcon)
    // create i tag 
    var iconTag = document.createElement("i")
    // add fas and fas-bullhorn class to iconClass
    iconTag.classList.add("fas")
    iconTag.classList.add("fa-bullhorn")
    // append the i tag to the twit-icon div
    divTwitIcon.appendChild(iconTag)
    

    //create a div for twit-content
    var divTwitContent = document.createElement("div")
    // add twit-content class to div
    divTwitContent.classList.add("twit-content")
    // append divTwitContent to article
    articleFr.appendChild(divTwitContent)
    // create first p tag
    var pTag1 = document.createElement("p")
    // add twit-text class to the p tag
    pTag1.classList.add("twit-text")
    // get the user input for twit text
    var twitTextFr = document.getElementById("twit-text-input")
    pTag1.textContent = twitTextFr.value //!!!!!!
    // append p tag to divTwitContent
    divTwitContent.appendChild(pTag1)
    // create second p tag
    var pTag2 = document.createElement("p")
    // add twit-author class to the p tag
    pTag2.classList.add("twit-author")
    // append pTag2 to divTwitContent
    divTwitContent.appendChild(pTag2)
    // create a tag
    var aTag = document.createElement("a")
    // link the link
    aTag.href = "#"
    // get the user input for twit author
    var twitAuthorFr = document.getElementById("twit-attribution-input")
    pTag2.textContent = twitAuthorFr.value // !!!!
    // append a tag to p2 tag
    pTag2.appendChild(aTag)


    // condition check
    if (twitTextFr.value === "" || twitAuthorFr.value === "") { // if one input field is empty
        alert("Whoops! Looks like you didn't fill in the text properly.")
    }
    else {
        // append the new article to the main html
        twitContainer.appendChild(articleFr)
        closeModal()
    }

}

/* run the createTwit function when accept button is clicked on */
modalAcceptButton.addEventListener('click', createTwit)

/*********************** SEARCH BAR ****************************/

