module.exports = function toReadable (number) {
    let one = new Map();
    one.set(0, 'zero');
    one.set(1, 'one');
    one.set(2, 'two');
    one.set(3, 'three');
    one.set(4, 'four');
    one.set(5, 'five');
    one.set(6, 'six');
    one.set(7, 'seven');
    one.set(8, 'eight');
    one.set(9, 'nine');
    one.set(10, 'ten');
    one.set(11, 'eleven');
    one.set(12, 'twelve');
    one.set(13, 'thirteen');
    one.set(14, 'fourteen');
    one.set(15, 'fifteen');
    one.set(16, 'sixteen');
    one.set(17, 'seventeen');
    one.set(18, 'eighteen');
    one.set(19, 'nineteen');

    let ten = new Map();
    ten.set(2, 'twenty');
    ten.set(3, 'thirty');
    ten.set(4, 'forty');
    ten.set(5, 'fifty');
    ten.set(6, 'sixty');
    ten.set(7, 'seventy');
    ten.set(8, 'eighty');
    ten.set(9, 'ninety');

    if (number == 0) {
        return one.get(number);
    }
    
    let result = "";
    if ((number - number % 100) / 100 >= 1) {
        result = result + one.get((number - number % 100) / 100) + ' hundred';
        number = number % 100;
    }
    if (number >0 && number < 20) {
        result = result + ' ' + one.get(number);
    } else if (number >= 20) {
        result = result + ' ' + ten.get((number - number % 10) / 10);
        number = number % 10;

        if (number > 0) {
            result = result + ' ' + one.get(number);
        }
    }

    return result.trim();
}
