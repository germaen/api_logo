const purpleGroup = document.getElementById('purple-grouped');

async function getData() {
    try {
        const myURL = "http://api.weatherapi.com/v1/current.json?key=1aa1d13a384f4e0b994234559241410&q=New York&aqi=no";
        const response = await fetch(myURL);
        const data = await response.json();

        // Input Variables Here to Test Dummy Data, if want to test real time API please comment below out
        const timeHour = 1; 
        const tempFahr = 75; 

        thumpFx(tempFahr, timeHour);

    } catch (error) {
        console.error(error.message);
    }

    function thumpFx(temp, hour) {
        const nightTime = (hour >= 0 || hour < 2);  
        const thumpingCondition = (temp >= 40 && temp <= 90 && nightTime);

        if (thumpingCondition) {
            let animationSpeed;
            let gradientId;

            if (hour >= 20 && hour < 24) {
                animationSpeed = 1.3; 
                gradientId = "neonGradient2";
            } else if (hour >= 0 && hour < 2) {
                animationSpeed = 0.125; 
                gradientId = "neonGradient";
            } else if (hour >= 2 && hour < 6) {
                animationSpeed = 3;
                gradientId = "neonGradient3";
            }
            
            purpleGroup.classList.add("thumping");
            purpleGroup.style.animationDuration = `${animationSpeed}s`;
            purpleGroup.style.fill = `url(#${gradientId})`;

        } else {
            purpleGroup.classList.remove("thumping");
            purpleGroup.style.animation = "none";
            purpleGroup.style.fill = "#800080"; 
        } 
    }
}

getData();

