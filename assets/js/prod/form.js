function queryString(){for(var o=window.location.search.split("&"),e=0;e<o.length;e++)return o[e].split("=")[1]}$("body").hasClass("form")&&("true"==queryString()?($("#contact-message").show(),console.log("show")):($("#contact-message").hide(),console.log("hide")));