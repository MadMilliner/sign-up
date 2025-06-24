const colorPicker = document.getElementById('colorPicker');
        
        colorPicker.addEventListener('input', function(e) {
            // Update CSS custom property
            document.documentElement.style.setProperty('--svg-color', e.target.value);
        });

window.addEventListener("load", startup, false);

function resetForm() {
    document.getElementById("sweepstakes").reset();
}

body.onload = function(){resetForm};