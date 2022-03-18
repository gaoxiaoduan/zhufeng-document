function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;initNavEvent();}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };
  function supportsImports() {
    return 'import' in document.createElement('link');
  }  
function initNavHtml(){
  
    // var element = document.getElementById('nav_template').innerHTML;
    // var _html= element.innerHTML;
    // document.getElementById('nav').innerHTML=_html;
 
    if (supportsImports()) {
      // 支持导入!
      var link = document.querySelector('link[rel="import"]');
      var content = link.import;
  
      // // 从 warning.html 的文档中获取 DOM。
      // var el = content.querySelector('.warning');
  
      // document.body.appendChild(el.cloneNode(true));
      document.getElementById('nav').innerHTML= content;
    } else {
      // 使用其他的库来加载文件。
    }
}  
function initNavHtml2(){
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var f = fso.OpenTextFile("/title.html", ForReading);
}
function initNavEvent(){
  $('.warpper .page-toc ul ul li a').on('click',function(){
    $('.warpper .page-toc ul ul li a').removeClass('my-active')
    $(this).addClass('my-active')
  })
  $('.logo').on('mouseenter',function(){
    $('.nav').height('450px');
  })
  $('.nav').on('mouseleave',function(){
    $('.nav').height('80px');
  })
  $('.logo').on('click',function(){
    $('.nav').css('display','none');
   $('.warpper').css('padding','0px');
  })
}
initNavHtml2();
