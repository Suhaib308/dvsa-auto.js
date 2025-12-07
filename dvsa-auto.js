(function() {
    // Click "Search tests" every 10s
    const scanInterval = 10000;
    const messageSelector = "li";

    function playAlert() {
        const audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
        audio.loop = true;
        audio.play().catch(()=>{});
        alert("Slot available!");
    }

    function checkSlot() {
        const msg = document.querySelector(messageSelector);
        if (!msg || !msg.textContent.includes("There are no short notice tests available")) {
            console.log("🎉 Slot available!");
            playAlert();
        } else {
            console.log("No slots yet. Retrying...");
            setTimeout(clickSearch, scanInterval);
        }
    }

    function clickSearch() {
        const btn = document.querySelector("#test-centres-submit");
        if (btn) {
            btn.click();
            setTimeout(checkSlot, 1000); // wait 1s for reload/message
        } else {
            console.log("Search button not found.");
        }
    }

    clickSearch();
})();
