var GetSupport = function(){
    this.support = function(type,name,value){
        if(type == "css" ||type == "css01" ){
            return name in document.body.style;
        }else if(type == "css02"){
            return CSS.supports(name,value == undefined ? "initial" : value);
        }else if(type == "html"){
            return !(document.createElement(name) instanceof HTMLUnknownElement);
        }else if(type == "attribute"){
            return name in document.createElement(value);
        }else if(type == "svg"){
            return document.createElementNS("http://www.w3.org/2000/svg",name).toString() != "[object SVGElement]";
        }else if(type == "js" || type == "js01"){
            name = name.charAt(0).toUpperCase()+name.slice(1);
            var nameWithPrefix = window["moz"+name] || window["webkit"+name] || window["ms"+name] || window["shim"+name] || window[name] || undefined;
            return nameWithPrefix != undefined;
        }else if(type == "js02"){
            return window[name] != undefined;
        }
    }
}
