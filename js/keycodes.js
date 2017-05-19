var displayAscii = document.querySelector(".display-ascii");
var keybox = document.querySelector(".keybox");

$("body").bind("keydown",function(e){
	e.preventDefault();
    // var cvalue = String.fromCharCode(e.keyCode);
    // console.log(String.fromCharCode(e.which))
    var nvalue = (e.keyCode);
    displayAscii.innerText = nvalue;
    keybox.innerText = getCharString(nvalue);
    // ***************
   //  if(e.keyCode!=16){
		 //    if(e.shiftKey){
		 //    	console.log("without shiftKey:",String.fromCharCode(e.keyCode))
		 //    	console.log("with shiftKey (+32):",String.fromCharCode(e.keyCode+32))

			// }    	
   //  }

	// *************

})

function getCharString(value){
	/*switch(value){
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
	}*/
	// console.log(keyCodes[value])
	return keyCodes[value]
}




var keyCodes = {
  3 : "break",
  8 : "backspace / delete",
  9 : "tab",
  12 : 'clear',
  13 : "enter",
  16 : "shift",
  17 : "ctrl",
  18 : "alt",
  19 : "pause/break",
  20 : "caps lock",
  27 : "escape",
  32 : "spacebar",
  33 : "page up",
  34 : "page down",
  35 : "end",
  36 : "home ",
  37 : "left arrow ",
  38 : "up arrow ",
  39 : "right arrow",
  40 : "down arrow ",
  41 : "select",
  42 : "print",
  43 : "execute",
  44 : "Print Screen",
  45 : "insert ",
  46 : "delete",
  48 : "0",
  49 : "1",
  50 : "2",
  51 : "3",
  52 : "4",
  53 : "5",
  54 : "6",
  55 : "7",
  56 : "8",
  57 : "9",
  58 : ":",
  59 : "semicolon (firefox), equals",
  60 : "<",
  61 : "equals (firefox)",
  63 : "ß",
  64 : "@ (firefox)",
  65 : "a",
  66 : "b",
  67 : "c",
  68 : "d",
  69 : "e",
  70 : "f",
  71 : "g",
  72 : "h",
  73 : "i",
  74 : "j",
  75 : "k",
  76 : "l",
  77 : "m",
  78 : "n",
  79 : "o",
  80 : "p",
  81 : "q",
  82 : "r",
  83 : "s",
  84 : "t",
  85 : "u",
  86 : "v",
  87 : "w",
  88 : "x",
  89 : "y",
  90 : "z",
  91 : "Windows Key / Left ⌘ / Chromebook Search key",
  92 : "right window key ",
  93 : "Windows Menu / Right ⌘",
  96 : "numpad 0 ",
  97 : "numpad 1 ",
  98 : "numpad 2 ",
  99 : "numpad 3 ",
  100 : "numpad 4 ",
  101 : "numpad 5 ",
  102 : "numpad 6 ",
  103 : "numpad 7 ",
  104 : "numpad 8 ",
  105 : "numpad 9 ",
  106 : "multiply ",
  107 : "add",
  108 : "numpad period (firefox)",
  109 : "subtract ",
  110 : "decimal point",
  111 : "divide ",
  112 : "f1 ",
  113 : "f2 ",
  114 : "f3 ",
  115 : "f4 ",
  116 : "f5 ",
  117 : "f6 ",
  118 : "f7 ",
  119 : "f8 ",
  120 : "f9 ",
  121 : "f10",
  122 : "f11",
  123 : "f12",
  124 : "f13",
  125 : "f14",
  126 : "f15",
  127 : "f16",
  128 : "f17",
  129 : "f18",
  130 : "f19",
  131 : "f20",
  132 : "f21",
  133 : "f22",
  134 : "f23",
  135 : "f24",
  144 : "num lock ",
  145 : "scroll lock",
  160 : "^",
  161: '!',
  163 : "#",
  164: '$',
  165: 'ù',
  166 : "page backward",
  167 : "page forward",
  169 : "closing paren (AZERTY)",
  170: '*',
  171 : "~ + * key",
  173 : "minus (firefox), mute/unmute",
  174 : "decrease volume level",
  175 : "increase volume level",
  176 : "next",
  177 : "previous",
  178 : "stop",
  179 : "play/pause",
  180 : "e-mail",
  181 : "mute/unmute (firefox)",
  182 : "decrease volume level (firefox)",
  183 : "increase volume level (firefox)",
  186 : "semi-colon / ñ",
  187 : "equal sign ",
  188 : "comma",
  189 : "dash ",
  190 : "period ",
  191 : "forward slash / ç",
  192 : "grave accent / ñ / æ",
  193 : "?, / or °",
  194 : "numpad period (chrome)",
  219 : "open bracket ",
  220 : "back slash ",
  221 : "close bracket / å",
  222 : "single quote / ø",
  223 : "`",
  224 : "left or right ⌘ key (firefox)",
  225 : "altgr",
  226 : "< /git >",
  230 : "GNOME Compose Key",
  231 : "ç",
  233 : "XF86Forward",
  234 : "XF86Back",
  255 : "toggle touchpad"
};