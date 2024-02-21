const allBtn = document.getElementsByClassName("btn");
for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const seat = event.target.parentNode.innerText;
        const cls = "Economy";
        const price = "550";

        const selectedContainer = document.getElementById("selected-seats-container");
        event.target.setAttribute("disabled", false);
        btn.style.backgroundColor = 'LimeGreen'; 
        const firstCount = document.getElementById("selected").innerText;
        const personSeat = parseInt(firstCount);
        if (personSeat + 1 > 4) {
            alert("not Allowed");
            btn.style.backgroundColor = 'WhiteSmoke';
            return;
        }
        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("flex-row");
        div.classList.add("gap-44");
        console.log(div)
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = seat;
        p2.innerText = cls;
        p3.innerText = price;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);
        updateTotalCost(price);
        updateLeftSeat();
        updateSeatCount();
        updateGrandTotal();

    });
}
function updateTotalCost(price) {
    const preiviousTotal = document.getElementById("total-cost").innerText;
    const convertedPrevious = parseInt(preiviousTotal);
    const convertedPrice = parseInt(price);
    const sum = convertedPrevious + convertedPrice;
    document.getElementById("total-cost").innerText = sum;
}
function updateGrandTotal(control) {
    const previousTotal = document.getElementById("total-cost").innerText;
    const convertedTotal = parseInt(previousTotal);
    const couponCode = document.getElementById("coupon-code").value;
    if (control) {
        if (couponCode == "NEW15") {
            const discount = convertedTotal * 0.15;
            document.getElementById("grand-total").innerText =
                convertedTotal - discount;
                const hide=document.getElementById("inputfield");
            hide.classList.add("hidden");
        }
        else if (couponCode == "Couple 20") {
            const discount = convertedTotal * 0.2;
            document.getElementById("grand-total").innerText =
                convertedTotal - discount;
                const hide=document.getElementById("inputfield");
            hide.classList.add("hidden");
        }
        else {
            alert("Invalid Coupon Code No Discount");
            return;
        }
    }
    else {
        document.getElementById("grand-total").innerText = convertedTotal;
    }
}

function updateLeftSeat() {
    const defaultLeft = document.getElementById("current-seat").innerText;
    const convertDefaultLeft = parseInt(defaultLeft);
    document.getElementById("current-seat").innerText = convertDefaultLeft - 1;
}
function updateSeatCount() {
    const defaultCartCount = document.getElementById("selected").innerText;

    const convertDefaultCartCount = parseInt(defaultCartCount);
    const seatCount = convertDefaultCartCount + 1;
    document.getElementById("selected").innerText = seatCount;


}