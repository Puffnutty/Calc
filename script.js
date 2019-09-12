(function() {
    'use strict';
    
    let calc = function(e) {
        if(e.charAt(0) === '#') { // if ID
            return document.querySelector(e); // return single e
        }
        
        return document.querySelectorAll(e); // return many e
    }
    
    let viewer = calc('#viewer'),
        equally = calc('#equally'),
        ops = calc('.ops'),
        nums = calc('.value'),
        clear = calc('#clear'), // Clear display
        newNum = '',
        oldNum = '',
        result,
        operator;
        
    let setOps = function() {
        if(!operator) {
            oldNum = newNum;
            newNum = '';
            operator = this.getAttribute('data-ops');
        }
    };
    
    let setNums = function() {
        if(newNum === 'Ошибка'){
            newNum = '';
        }
        newNum += this.getAttribute('data-value');
        
        viewer.innerHTML = newNum;
    };
    
    let clearAll = function() {
        oldNum = '';
        newNum = '';
        viewer.innerHTML = '0';
    }
    
    let displayNum = function() {
        
        oldNum = parseFloat(oldNum);
        newNum = parseFloat(newNum);
        
        switch(operator) {
            case 'plus':
                result = oldNum + newNum;
            break;
            
            case 'minus':
                result = oldNum - newNum;
            break;
            
            case 'multiply':
                result = oldNum * newNum;
            break;
            
            case 'devide':
                result = oldNum / newNum;
            break;
            
            default:
                result = newNum;
        }
        
        if(!isFinite(result)) {
            result = 'Ошибка';
        }
        
        viewer.innerHTML = result;
        
        oldNum = 0;
        newNum = result;
        operator = null;
    };
    
    /* The click events */
        
    for(let i = 0; i < ops.length; i++) {
        ops[i].onclick = setOps;
    }
        
    for(let i = 0; i < nums.length; i++) {
        nums[i].onclick = setNums;
    }
    
    clear.onclick = clearAll;
    
    equally.onclick = displayNum;
})();