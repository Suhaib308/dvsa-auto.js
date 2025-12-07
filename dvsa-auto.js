(function(){
    if (window.DVSA_AUTO_RUNNING) return;
    window.DVSA_AUTO_RUNNING = true;

    console.log("DVSA Auto-Checker Running…");

    const CLICK_INTERVAL = 10000;
    const CHECK_INTERVAL = 600;

    function clickSearchButton() {
        const btn = document.querySelector('#test-centres-submit');
        if (btn) {
            console.log("Clicking Search Tests…");
            btn.click();
        }
    }

    function checkForSlot() {
        const msg = document.querySelector("li");
        if (!msg) {
            console.log("SLOT FOUND!");
            alert("🚨 SLOT FOUND — GO NOW!");

            const audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
            audio.loop = true;
            audio.play().catch(()=>{});

            clearInterval(window.dvsaClicker);
            clearInterval(window.dvsaChecker);
        }
    }

    window.dvsaClicker = setInterval(clickSearchButton, CLICK_INTERVAL);
    window.dvsaChecker = setInterval(checkForSlot, CHECK_INTERVAL);
})();
