const roomsData = [
    { roomNumber: "101", building: "A", floor: "1", image: "building_a_floor_1.jpg" },
    { roomNumber: "102", building: "A", floor: "1", image: "building_a_floor_1.jpg" },
];

const searchInput = document.getElementById("roomNumber");
const suggestionsList = document.getElementById("suggestions");
const resultDiv = document.getElementById("result");

// عند كتابة النص في البحث، نقوم بتصفية النتائج
searchInput.addEventListener("input", function() {
    const query = searchInput.value.trim().toLowerCase();
    
    // فلترة الغرف بناءً على النص المدخل
    const filteredRooms = roomsData.filter(room => room.roomNumber.includes(query));
    
    // إذا كانت النتائج متوفرة، عرض الاقتراحات
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

// عرض تفاصيل الغرفة بعد اختيارها
function displayRoomDetails(room) {
    resultDiv.innerHTML = `
        <div style="animation: fadeIn 0.5s;">
            <p>الغرفة: <strong>${room.roomNumber}</strong></p>
            <p>المبنى: <strong>${room.building}</strong></p>
            <p>الطابق: <strong>${room.floor}</strong></p>
            <img src="images/${room.image}" alt="صورة المبنى والطابق">
        </div>
    `;
}