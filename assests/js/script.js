$(document).ready(() => {
	$("#add_user").submit(() => {
		alert("Data inserted successfullt");
	});

	$("#update_user").submit((e) => {
		e.preventDefault();
		var dataArray = $("#update_user").serializeArray();
		// console.log(dataArray);
		var data = {};
		$.map(dataArray, (obj, ind) => {
			data[obj["name"]] = obj["value"];
		});
		// console.log(data);
		// var request = {
		// 	url: `http://localhost:8085/update-use/${data.id}`,
		// 	method: "PUT",
		// 	data: data,
		// };
		$.ajax({
			url: `http://localhost:8085/api/users/${data.id}`,
			method: "PUT",
			data: data,
		}).done(() => {
			alert("User updated successfully");
			location.href = "/";
		});
	});
	// if (window.location.pathname == "/") {
	$(".delete").click(function () {
		var id = $(this).attr("data-id");
		// console.log(id);
		$.ajax({
			url: `http://localhost:8085/api/users/${id}`,
			method: "DELETE",
		}).done(() => {
			alert("User Deleted succesfully..");
			location.reload();
		});
		console.log("button clicked");
	});
	// }
});
