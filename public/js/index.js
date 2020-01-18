/* eslint-disable prettier/prettier */
// Get references to page elements
var $hackText = $("#hack-text");
var $hackDescription = $("#hack-description");
var $submitBtn = $("#submit");
var $hackList = $("#hack-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveHacks: function (hacks) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/hacks",
      data: JSON.stringify(hacks)
    });
  },
  getHacks: function () {
    return $.ajax({
      url: "api/hacks",
      type: "GET"
    });
  },
  deleteHacks: function (id) {
    return $.ajax({
      url: "api/hacks/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshHacks = function () {
  API.getHacks().then(function (data) {
    var $hacks = data.map(function (hacks) {
      var $a = $("<a>")
        .text(hacks.text)
        .attr("href", "/example/" + hacks.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": hacks.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $hackList.empty();
    $hackList.append($hacks);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var hack = {
    text: $hackText.val().trim(),
    description: $hackDescription.val().trim()
  };

  if (!(hack.text && hack.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(hack).then(function () {
    refreshExamples();
  });

  $hackText.val("");
  $hackDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

console.log("Hi");
