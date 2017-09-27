const temp = {};
temp.operation; // What does this statement?

if (process.argv.length-2 != 4) {
    printError();
} else {
    // No need for the `!!` in the next line.
    // You convert the argument with `parseFloat` here. A few lines below you convert it again
    // using the same method --> store the conversion result in a variable to speed up your code.
    // Converting a string to a number is a relatively complex operation.
    if (!!parseFloat(process.argv[2])) {
        checkArgs(3);
        if(process.argv[4] !== 'to'){
            printError();
        }
        checkArgs(5);
    } else {
        printError();
    }
}

convert();

function printError(){
    console.log('Invalid parameters');
    process.exit(-1);
}
function checkArgs(index){
    if(temp.operation){
        if(temp.operation === -1 && process.argv[index].indexOf('g') !== -1){
            return;
        }
        if(temp.operation === 1 && process.argv[index].indexOf('m') !== -1){
            return;
        }
        printError();
    }
    switch(process.argv[index]){
        case 'm':
        case 'mm':
        case 'cm':
            temp.operation = 1;
            break;
        case 'kg':
        case 'g':
        temp.operation = -1;
            break;
        default:
            printError();
            break;
    }
}
function convert(){
    if(process.argv[3] === process.argv[5])
        printResult(process.argv[2]);
    if(temp.operation === -1){
        if(process.argv[3] === 'kg'){
            printResult(parseFloat(process.argv[2]) * 1000);
        }else{
            printResult(parseFloat(process.argv[2]) * 0.001);
        }
    }else{
        if(process.argv[3] === 'm'){
            if(process.argv[5] == 'mm'){
                printResult(parseFloat(process.argv[2]) * 1000);
            }else{
                printResult(parseFloat(process.argv[2]) * 100);
            }
        }else{
            if(process.argv[3] === 'mm'){
                if(process.argv[5] === 'm'){
                    printResult(parseFloat(process.argv[2]) * 0.001);
                }else{
                    printResult(parseFloat(process.argv[2]) * 0.01);
                }
            }else{
                if(process.argv[5] === 'm'){
                    printResult(parseFloat(process.argv[2]) * 0.01);
                }else{
                    printResult(parseFloat(process.argv[2]) * 10);
                }
            }
        }
    }
}
function printResult(a){
    console.log(`${process.argv[2]} ${process.argv[3]} are ${a} ${process.argv[5]}`);
    process.exit(-1);
}
