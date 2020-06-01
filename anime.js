const elements = document.querySelectorAll("#light");
const body = document.getElementById('body');
let slider = document.getElementById("slider");
let lightTranslate;

// calculate translation
let temp = anime.get(body,'width','px');
temp = temp.substring(0,temp.length - 2);
let temp2 = anime.get(light,'width','px');
temp2 = temp2.substring(0,temp2.length - 2);
let translatePX = temp-temp2;

// set speed
lightTranslate = anime({
    targets: elements,
    translateX: [0,translatePX],
    loop: true,
    direction: 'alternate',
    duration: slider.max - slider.value,
    easing: 'linear'
});

slider.oninput = function() {
    anime.remove(lightTranslate);
    let speed = this.max - this.value
    console.log('speed: ' + speed)
    lightTranslate = anime({
        targets: elements,
        translateX: [0,translatePX],
        loop: true,
        direction: 'alternate',
        duration: speed,
        easing: 'linear',
        round: 1
    });
}