//cards
var card_open = false;
var clicked_index = 0;
var cards = document.getElementsByClassName("project");
var card_img = document.getElementsByClassName("img-small");
var card_content = document.getElementsByClassName("card-content");
var card_title = document.getElementsByClassName("card-title");
var card_text = document.getElementsByClassName("card-text");

//modals
var modals = document.getElementsByClassName("modal");

//debugging
var test = 0;

function initPage() {
  for (var i = 0; i < cards.length; i++) {
    //add clicked listeners
    cards[i].addEventListener("click", cardClicked);
    card_img[i].addEventListener("click", cardClicked);
    card_content[i].addEventListener("click", cardClicked);
    card_title[i].addEventListener("click", cardClicked);
    card_text[i].addEventListener("click", cardClicked);

    //add modal listeners
    modals[i].addEventListener("click", closeModal);
  }
}

function cardClicked(e) {
  clicked_index = "modal" + e.currentTarget.id;
  curr_modal = document.getElementById(clicked_index);
  console.log(curr_modal);
  curr_modal.style.display = "block";
  console.log("card opened: " + clicked_index);
}

function closeModal(e) {
  if (e.target.id.length < 3 || e.target.className == "close") {
    clicked_index = "modal" + e.currentTarget.id;
  } else {
    clicked_index = e.currentTarget.id;
  }

  curr_modal = document.getElementById(clicked_index);
  curr_modal.style.display = "none";
  console.log("card closed: " + clicked_index);
}

initPage();
