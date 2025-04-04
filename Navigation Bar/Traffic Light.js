const led = document.querySelectorAll ('.led');
        let active = 0;

        function changeLight() {
            led.forEach (led => led.classList.remove ('current'));
            led[active].classList.add('current');
            active = (active + 1 ) % led.length;
        }
        changeLight ();
        setInterval (changeLight, 7000);