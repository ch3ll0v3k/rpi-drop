// ================================================================================
function simulateKeyPress() {

    try{

        var e = document.createEvent('KeyboardEvent');
        e.initKeyboardEvent("keyup", true, true, window, 0,0,0,0,0, 27,0 ); // <= 27 == ESC
        document.dispatchEvent(e);

        var e = document.createEvent('KeyboardEvent');
        e.initKeyboardEvent("keydown", true, true, window, 0,0,0,0,0, 27,0 ); // <= 27 == ESC
        document.dispatchEvent(e);

        var e = document.createEvent('KeyboardEvent');
        e.initKeyboardEvent("keypress", true, true, window, 0,0,0,0,0, 27,0 ); // <= 27 == ESC
        document.dispatchEvent(e);

    }catch(e){
        alert(e);
    }

}

// ================================================================================
