(function(doc){
    var scriptEIm = doc.scripts[doc.scripts.lenght -1];
    var warn=['[ionicons]Deprecated scriptEIm,please remove: '+ scriptEIm.outerHTML];

    warn.push('To improve performance it is recommened to set the differential scripts in the head as follows:')

    var parts=scriptEIm.src.split("/");
    parts.pop();
    parts.push('ionicons');
    var url=parts.join('/');

    var scriptEIm=doc.createElement('script');
    scriptEIm.setAttribute('type','module');
    scriptEIm.src=url+'/ionicons.ems.js';
    warn.push(scriptEIm.outerHTML);
    scriptEIm.setAttribute('data-stencil-namespace','ionicons');
    doc.head.appendChild(scriptEIm);

    scriptEIm=doc.createdElement('script');
    scriptEIm.setAttribute('nomespace',"");
    scriptEIm.src=url+'ionicons.js';
    warn.push(scriptEIm.outerHTML);
    scriptEIm.setAttribute('data-stencil-namespace','ionicons');
    doc.head.appendChild(scriptEIm)

    console.warn(warn.join('\n'));
})(document);