// Your code here
// function declaration
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
};
// function expression
let mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
};

// scope chain etc
function wrapAdjective(flair = '*'){
    return function (msg="special"){
        return `You are ${flair}${msg}${flair}!`;
    }
};

let Calculator = {
    add: function(x,y){
        return x + y;
    },
    subtract: function(x,y){
        return x - y;
    },
    multiply: function(x,y){
        return x * y;
    },
    divide: function(x,y){
        return x / y;
    }
};

function actionApplyer(integer, actions){
    actions.forEach(func => {
        integer = func(integer)
    });
    return integer
};