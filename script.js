//$(".currentDay")
const mfull = moment().format('MMMM Do YYYY, h:mma');
const mtime = moment().format('h:mma');


timeblocks = {
    "9:00am": "",
    "10:00am": "",
    "11:00am": "",
    "12:00pm": "",
    "1:00pm": "",
    "2:00pm": "",
    "3:00pm": "",
    "4:00pm": "",
    "5:00pm": "",
}

for (let [key, value] of Object.entries(timeblocks)) {
    time = ("<div class=col-md-1>"+key+"</div>")
    planner_data = ("<div class='col-md-10'><input style='width:100%' type='text' id='"+key+"'></input></div>")
    button = ("<div class=col-md-1><button class='save' time-attr='"+key+"'>Save</button></div>")
    console.log(key)
    $(".container").append("<div class=row>"+time+planner_data+button+ "</div>")
}

$(".save").on("click", function(){
    console.log($(this).attr("time-attr"))
})

