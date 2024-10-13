const roomsData = [
    { roomNumber: "f1", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f2", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f3", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f4", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f5", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f6", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f7", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f8", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f9", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f10", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f11", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f12", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f13", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f14", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f15", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f16", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f17", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f18", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f19", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f20", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f21", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f22", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f23", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f24", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f25", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f26", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f27", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f28", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f29", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f30", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f31", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f32", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f33", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f34", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f35", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f36", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f37", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f38", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f39", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f40", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f41", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f42", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f43", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f44", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f45", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f46", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f47", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f48", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f49", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f50", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f51", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f52", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f53", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f54", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f55", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f56", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f57", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f58", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f59", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f60", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f61", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f62", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f63", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f64", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f65", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f66", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f67", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f68", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f69", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f70", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f71", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f72", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f73", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f74", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f75", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f76", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f77", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f78", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f79", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" },
    { roomNumber: "f80", building: "المبني الاول", floor: "الدور الاول", image: "photo.jpg" }
];

const searchInput = document.getElementById("roomNumber");
const suggestionsList = document.getElementById("suggestions");
const resultDiv = document.getElementById("result");

searchInput.addEventListener("input", function() {
    const query = searchInput.value.trim().toLowerCase();
    
    const filteredRooms = roomsData.filter(room => room.roomNumber.includes(query));
    
    if (filteredRooms.length > 0) {
        suggestionsList.innerHTML = "";
        suggestionsList.style.display = "block";
        
        filteredRooms.forEach(room => {
            const listItem = document.createElement("li");
            listItem.textContent = room.roomNumber;
            listItem.addEventListener("click", function() {
                displayRoomDetails(room);
                suggestionsList.style.display = "none";
            });
            suggestionsList.appendChild(listItem);
        });
    } else {
        suggestionsList.style.display = "none";
    }
});

function displayRoomDetails(room) {
    resultDiv.innerHTML = `
        <div style="animation: fadeIn 0.5s;">
            <p>الغرفة: <strong></strong></p>
            <p> <h2>${room.roomNumber}</h2></p>
            <p>المبنى: <strong></strong></p>
            <p><h2>${room.building}</h2></p>
            <p>الطابق: <strong></strong></p>
            <p><h2>${room.floor}</h2></p>
            <img src="images/${room.image}" alt="صورة المبنى والطابق">
        </div>
    `;
}