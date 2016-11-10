// ================================================================================
function ajaxPOST(url, PostData){
    // -------------------------------------------
    var PostData = '';
        PostData += 'login=name';
        PostData += '&password=12345';

        //PostData = encodeURIComponent(PostData);
        //alert(encodeURIComponent(PostData));
        //alert(encodeURI(PostData));    
    // -------------------------------------------
    var _AJAX_ = getXmlHttp();
    // -------------------------------------------
    _AJAX_.open('POST',url, true); // false ASYNC         
    // -------------------------------------------
    //_AJAX_.setRequestHeader("Custom_name", "custom_data");
    //_AJAX_.setRequestHeader("Content-Type", "multipart/form-data");
    _AJAX_.setRequestHeader("Content-Type", "text/html");
    _AJAX_.setRequestHeader("Content-length", PostData.length);
    _AJAX_.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    // -------------------------------------------
    _AJAX_.onreadystatechange = function () {
        if(_AJAX_.readyState == 4 && _AJAX_.status == 200){
            // ---------------------------------------------------------
            // var seconds = new Date().getTime() / 1000;
            // var time = new Date().getTime();

            // _AJAX_.getAllResponseHeaders();      // 
            // _AJAX_.getResponseHeader('name');    // 
            // _AJAX_.readyState                    // == 4
            // _AJAX_.status                        // == 200
            // _AJAX_.responseText                  // == text response
            // ---------------------------------------------------------
        }
    }
    // -------------------------------------------
    _AJAX_.send(PostData);
}

// ================================================================================
function ajaxGET(url) {
    // -------------------------------------------
    var _AJAX_ = getXmlHttp();
    // -------------------------------------------
    _AJAX_.open('GET', url, true); // false SYNC
    // _AJAX_.setRequestHeader('Access-Control-Allow-Origin', '*');
    // _AJAX_.setRequestHeader('_status_', 'custom-data');
    // -------------------------------------------
    _AJAX_.onreadystatechange = function () {
        if(_AJAX_.readyState == 4 && _AJAX_.status == 200){
            // ---------------------------------------------------------
            // var seconds = new Date().getTime() / 1000;
            // var time = new Date().getTime();

            // _AJAX_.getAllResponseHeaders();      // 
            // _AJAX_.getResponseHeader('name');    // 
            // _AJAX_.readyState                    // == 4
            // _AJAX_.status                        // == 200
            // _AJAX_.responseText                  // == text response
            // ---------------------------------------------------------
        }
    }
    // -------------------------------------------
    _AJAX_.send(null);
}

// ================================================================================
