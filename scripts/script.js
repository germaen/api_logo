// API respondent Code, to test out random values please look at the commented out code below, strts at line 58

const purpleGroup = document.getElementById('purple-grouped');

async function getData(){
    try{
        const myURL = "http://api.weatherapi.com/v1/current.json?key=1aa1d13a384f4e0b994234559241410&q=New York&aqi=no";

        const response = await fetch(myURL);
        const data = await response.json();

        const currentTime = data.location.localtime;
        console.log(currentTime);

        const timeHour = new Date(currentTime).getHours();
        const tempFahr = data.current.temp_f;
        console.log(tempFahr);

        thumpFx(tempFahr, timeHour);

    } catch(error) {
        console.error(error.message);
    }

    function thumpFx(temp, hour) {
        const nightTime = (hour >= 20 || hour < 6);
        const thumpingCondition = (temp >= 40 && temp <= 90 && nightTime);
    
        if (thumpingCondition) {
            let animationSpeed;

            if (hour >= 20 && hour < 24) {
                animationSpeed = 1.8; 
            } else if (hour >= 0 && hour < 2) {
                animationSpeed = 0.001; 
            } else if (hour >= 2 && hour < 6) {
                animationSpeed = 2;
            }
            
            purpleGroup.classList.add("thumping");

            purpleGroup.style.animationDuration = `${animationSpeed}s`;

            purpleGroup.style.fill = "url(#neonGradient)"; 

    } else {
        purpleGroup.classList.remove("thumping");
        purpleGroup.style.animation = "none";
        purpleGroup.style.fill = "#800080";
    } 
}
}
getData();
setInterval(getData, 60 * 60 * 1000);

// Test variable Code without realtime API

// const purpleGroup = document.getElementById('purple-grouped');

// async function getData(){
//     try{
//         const myURL = "http://api.weatherapi.com/v1/current.json?key=1aa1d13a384f4e0b994234559241410&q=New York&aqi=no";

//         const response = await fetch(myURL);
//         const data = await response.json();

//         const timeHour = 21; 
//         const tempFahr = 75;

//         thumpFx(tempFahr, timeHour);

//     } catch(error){
//         console.error(error.message);
//     }

//     function thumpFx(temp, hour) {
//         const nightTime = (hour >= 6 && hour < 18);
//         const thumpingCondition = (temp >= 40 && temp <= 90 && nightTime);
    
//         if (thumpingCondition){
//             let animationSpeed;

//             if (hour >= 20 && hour < 24) {
//                 animationSpeed = 1.8; 
//             } else if (hour >= 0 && hour < 2) {
//                 animationSpeed = 0.001; 
//             } else if (hour >= 2 && hour < 6) {
//                 animationSpeed = 2;
//             }
            
//             purpleGroup.classList.add("thumping");
//             purpleGroup.style.animationDuration = `${animationSpeed}s`;
//             purpleGroup.style.fill = "url(#neonGradient)";

//         } else{
//             purpleGroup.classList.remove("thumping");
//             purpleGroup.style.animation = "none";
//             purpleGroup.style.fill = "#800080"; 
//         } 
//     }
// }

// getData();
