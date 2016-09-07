// test of ternary operator
var desc= function(sit) {
    (sit == 'go to desk') ? document.writeln('You are at the desk')
        : (sit == 'sit on the desk') ? document.writeln('You are sitting on the desk')
        : (sit == 'get up from the desk') ? document.writeln('You are at the desk')
           : desc(prompt('Enter what do you want TODO:').toLowerCase());
}
    desc(prompt('Enter what do you want TODO:').toLowerCase());
