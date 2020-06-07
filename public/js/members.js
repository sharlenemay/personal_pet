$(document).ready(function () {
    console.log("member's script is loaded");
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  function updateImg() {
    $.get("/api/sidekick", function(data) {
      console.log(data);
        if (data[0].Sidekicks[0].sidekickImage === "dog") {
            if (data[0].Sidekicks[0].happinessPoints < 30) {
                $(".imgDiv").empty();
                $(".imgDiv").html("<img src='assets/Dog-Alert.png'>");
            } else if (data[0].Sidekicks[0].happinessPoints > 60) {
                $(".imgDiv").empty();
                $(".imgDiv").html("<img src='assets/Dog-Happy.png'>");
            } else {
                $(".imgDiv").empty();
                $(".imgDiv").html("<img src='assets/Dog-Neutral.png'>");
            }
        } else if (data[0].Sidekicks[0].sidekickImage === "cat") {
            if (data[0].Sidekicks[0].happinessPoints < 30) {
                $(".imgDiv").empty();
                $(".imgDiv").html("<img src='assets/Cat-Alert.png'>");
            } else if (data[0].Sidekicks[0].happinessPoints > 60) {
                $(".imgDiv").empty();
                $(".imgDiv").html("<img src='assets/Cat-Happy.png'>");
            } else {
                $(".imgDiv").empty();
                $(".imgDiv").html("<img src='assets/Cat-Neutral.png'>");
            }
        }
    });
}

  updateImg();

  let activities = [];
        let category = $("#selectCategory option:selected").text();
        // let difficulty = $(".form-check-input:checked").val();
        const activityname = $("#addActivity");

        $("#savenewtask").on("click", function (event) {
            event.preventDefault();
            const activityData = {
                activityName: activityname.val().trim(),
                priority: $(".form-check-input:checked").val(),
                category: category
            }

            console.log("********",activityData);

            createActivity(activityData);
        });

        function getUser(email) {
            $.get("/api/users", function(data) {
                
            })
        }

        function createActivity(activityObj){
            $.post("/api/activity", activityObj).done(function (data){
                console.log("post was successful!", data);
            });
            
            //$.post("/api/activity", function(data){
            //    alert("success");
            //}).then(function () {
            //    console.log("new activity added: " + activityData);
            //});
        }

});


