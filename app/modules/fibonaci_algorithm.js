
exports.get_fibonaci_sequence = (number) => {

    var result = 0;

    let n1 = 1, n2 = 1, nextTerm;

    for (let i = 1; i <= number; i++) {
        // console.log(n1);
        result += n1;
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return result;
    
  };