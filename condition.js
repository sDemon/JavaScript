// test of if statement
var pos = prompt('Enter what do you like TODO:','').toLowerCase();
if (pos == 'turn on conditioner') {
        document.writeln('Conditioner is turned On');
    }
else if (pos == 'turn off conditioner') {
        document.writeln('Conditioner is turned Off');
    }
else if (pos == 'go to conditioner') {
        document.writeln('You are at the conditioner');
    }
else {
        document.writeln('I do not know what you want from me !!!');
    }