// ================================================================================
var MARKER = '<div id="marker"></div>';

// ================================================================================
/*window.addEventListener('load', function(){
    //alert("INITED");
});*/
// ================================================================================
function _byId(id){ return document.getElementById(id); }
function _byName(name){ return document.getElementsByName(name); }
function _byClass(className){ return document.getElementsByClassName(className); }
function _byTag(tagName){ return document.getElementsByTagName(tagName); }
function _newElem(type){ return document.createElement(type); }
function _randInt(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min;  }

// ================================================================================
function _GO( _side ){

    if( _side == ">"){
        history.forward();
    }else{
        history.back();
    }

}
// ================================================================================
function _randID(L){

    var ID = '';
    var L = L ? L : 12;
    var data = new Array('a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D','F', 'F', 'O', 'B', 'e', '9', '0', '7', '6', '3', '2', '5', '8', '1', '4' );
    for(var i=0; i<L;i++){
        ID += data[__GRIT(0, 24)];
    }
    return ID+'_';
}

// ================================================================================
function getXmlHttp(){

    var xmlHTTH;
    try{  xmlHTTH = new ActiveXObject("MSXML2.XMLHTTP"); }catch (e){
        try {  xmlHTTH = new ActiveXObject("Microsoft.XMLHTTP"); }catch (e){ 
            xmlHTTH = new XMLHttpRequest(); } }
    return xmlHTTH;

}

// ================================================================================
function hide_unhide(elem){

    // --------------------------------------------------------
    try{

        if( elem.parentNode.parentNode.className == 'row-box-closed' ){

            if( elem.is_open ){
                elem.is_open = false; elem.innerHTML = '-';
                elem.parentNode.parentNode.style.height = "48px";

            }else{
                elem.is_open = true; elem.innerHTML = '+';
                elem.parentNode.parentNode.style.height = "auto";
            }

        }else{

            if( !elem.is_open ){
                elem.is_open = true; elem.innerHTML = '+';
                elem.parentNode.parentNode.style.height = "48px";

            }else{
                elem.is_open = false; elem.innerHTML = '-';
                elem.parentNode.parentNode.style.height = "auto";
            }

        }

    }catch(e){  }

    // --------------------------------------------------------
}

// ================================================================================
