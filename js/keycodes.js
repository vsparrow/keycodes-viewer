var displayAscii = document.querySelector(".display-ascii");
var keybox = document.querySelector(".keybox");

$("body").bind("keydown",function(e){
	e.preventDefault();
    // var cvalue = String.fromCharCode(e.keyCode);
    var nvalue = (e.keyCode);
    displayAscii.innerText = nvalue;
    keybox.innerText = getCharString(nvalue);
})

function getCharString(value){
	switch(value){
		case 8 : return "Backspace" ; done
		case 9 : return "Tab" ; done
		case 13 : return "Enter" ; done
		case 16 : return "Shift" ; done
		case 17 : return "Ctrl" ; done
		case 18 : return "Alt" ; done
		case 20 : return "Caps Lock" ; done
		case 27 : return "Esc" ; done
		case 32 : return "Space" ; done
		case 33 : return "PgUp" ; done
		case 34 : return "PgDn" ; done
		case 35 : return "End" ; done
		case 36 : return "Home" ; done
		case 37 : return "Left Arrow" ; done
		case 38 : return "Up Arrow" ; done
		case 39 : return "Right Arrow" ; done
		case 40 : return "Down Arrow" ; done
		case 45 : return "Insert" ; done
		case 46 : return "Delete" ; done
		case 48 : return "0" ; done
		case 49 : return "1" ; done
		case 50 : return "2" ; done
		case 51 : return "3" ; done
		case 52 : return "4" ; done
		case 53 : return "5" ; done
		case 54 : return "6" ; done
		case 55 : return "7" ; done
		case 56 : return "8" ; done
		case 57 : return "9" ; done
		case 65 : return "a" ; done
		case 66 : return "b" ; done
		case 67 : return "c" ; done
		case 68 : return "d" ; done
		case 69 : return "e" ; done
		case 70 : return "f" ; done
		case 71 : return "g" ; done
		case 72 : return "h" ; done
		case 73 : return "i" ; done
		case 74 : return "j" ; done
		case 75 : return "k" ; done
		case 76 : return "l" ; done
		case 77 : return "m" ; done
		case 78 : return "n" ; done
		case 79 : return "o" ; done
		case 80 : return "p" ; done
		case 81 : return "q" ; done
		case 82 : return "r" ; done
		case 83 : return "s" ; done
		case 84 : return "t" ; done
		case 85 : return "u" ; done
		case 86 : return "v" ; done
		case 87 : return "w" ; done
		case 88 : return "x" ; done
		case 89 : return "y" ; done
		case 90 : return "z" ; done
		case 91 : return "Windows Key / Left ⌘ / Chromebook Search key" ; done
		case 112 : return "f1" ; done
		case 113 : return "f2" ; done
		case 114 : return "f3" ; done
		case 115 : return "f4" ; done
		case 116 : return "f5" ; done
		case 117 : return "f6" ; done
		case 118 : return "f7" ; done
		case 119 : return "f8" ; done
		case 120 : return "f9" ; done
		case 121 : return "f10" ; done
		case 122 : return "f11" ; done
		case 123 : return "f12" ; done
		case 186 : return "Semi-colon" ; done
		case 187 : return "Equals" ; done
		case 188 : return "Comma" ; done
		case 189 : return "Dash" ; done
		case 190 : return "Period" ; done
		case 191 : return "Forward Slash" ; done
		case 192 : return "Grave Accent / ñ / æ" ; done
		case 219 : return "Open Bracket" ; done
		case 221 : return "Close Bracket" ; done
		case 220 : return "Back Slash" ; done
		case 222 : return "Single Quote" ; done
		default: return "undefined" ; done
		done;
	}
}
