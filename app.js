// Start Code
// 07 - Aug - 2020
// Al Nahian | Dominating The Web | https://alnahian.xyz
// =====================================
// =       Al Nahian ♥ 7 July 2020     =
// =====================================

// Variables & Copy To Clipboard Functions of Text Color Section

var styleTag = document.querySelector("#main-style");
var cssAsPlainText = styleTag.innerText;
var colors = document.querySelectorAll(".color-tabs");
colors.forEach(function(value, index){
    value.addEventListener('click',function(e){
        var targetClass = e.currentTarget.classList.value.replace('color-tabs ', '');
        var searchKey = '.' + targetClass + '{'
        var replaseBefore = cssAsPlainText.replace( cssAsPlainText.substr(0, cssAsPlainText.search(searchKey)), '' );
        var startPoint = replaseBefore.indexOf('{') + 1;
        var endPoint = replaseBefore.indexOf('}') - startPoint - 1;
        var copiedValue = replaseBefore.substr( startPoint, endPoint );
        //console.log(copiedValue);
        alert("✓ Successfully Copied!");
        var copiedValueElement = document.createElement('input');
        copiedValueElement.value = copiedValue;
        document.body.appendChild(copiedValueElement).select();
        document.execCommand('copy')
        copiedValueElement.remove();
    });

});

//End Code

//Alhamdulillah!