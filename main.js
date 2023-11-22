const selEle = id => {
    return document.getElementById(id);
};

const numbersArr = [];

const sumPositiveNumbers = numbers => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
};

const countPositiveNumbers = numbers => {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    return count;
};

const findMinNumber = numbers => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    return min;
};

const findMinPositiveNumber = numbers => {
    let min = Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0 && min > numbers[i]) {
            min = numbers[i];
        }
    }
    return isFinite(min) ? min : 'Không có số dương';
};

const findLastEvenNumber = numbers => {
    let even;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even = numbers[i];
        }
    }
    return typeof even == 'undefined' ? 'Không có số chẵn' : even;
};

const exchangeNumbers = (numbers, pos1, pos2) => {
    temp = numbers[pos1];
    numbers[pos1] = numbers[pos2];
    numbers[pos2] = temp;
    return numbers;
};

const ascendingNumbers = numbers => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                const temp = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = temp;
            }
        }
    }
    return numbers;
};

const findFirstPrimeNumber = numbers => {
    console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 2) {
            return numbers[i];
        }

        if (numbers[i] > 2) {
            let isPrime = true;

            for (let j = 2; j <= numbers[i] / 2; j++) {
                if (numbers[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                return numbers[i];
            }
        }
    }
    return 'không tìm thấy số nguyên tố';
};

const countingInteger = numbers => {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            count++;
        }
    }
    return count;
};

const compareQuantityPositiveNegative = numbers => {
    let countPositive = 0;
    let countNegative = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            countPositive++;
        }
        if (numbers[i] < 0) {
            countNegative++;
        }
    }
    console.log(countPositive, countNegative);
    if (countPositive > countNegative) {
        return 'Số dương > số âm';
    }
    if (countPositive < countNegative) {
        return 'Số âm > số dương';
    }
    if (countNegative == countNegative) {
        return 'Số âm = số dương';
    }
};

const hienThiChuoiSoFunc = numbers => {
    if (numbers.length == 0) {
        return 'Chuỗi số rỗng';
    }

    let content;

    for (var i = 0; i < numbers.length; i++) {
        content += ', ' + numbers[i];
        if (i == 0) {
            content = numbers[i];
        }
    }
    return content;
};

// Events
const btnThemSo = selEle('btnThemSo');
btnThemSo.addEventListener('click', () => {
    // Thêm số
    const themSo = selEle('themSo');
    const so = themSo.value * 1;
    numbersArr.push(so);

    // In chuỗi số ra màn hình
    selEle('hienThiChuoiSo').innerHTML = '👉 ' + hienThiChuoiSoFunc(numbersArr);

    // Tổng số dương
    // In tổng số dương ra màn hình
    selEle('hienThiTongSoDuong').innerHTML = '👉 ' + sumPositiveNumbers([...numbersArr]);

    // Đếm số dương
    // In số số dương ra màn hình
    selEle('hienThiDemSoDuong').innerHTML = '👉 ' + countPositiveNumbers([...numbersArr]);

    // Hiển thị số nhỏ nhất
    // In số nhỏ nhất ra màn hình
    selEle('hienThiSoNhoNhat').innerHTML = '👉 ' + findMinNumber([...numbersArr]);

    // In số dương nhỏ nhất ra màn hình
    selEle('hienThiSoDuongNhoNhat').innerHTML = '👉 ' + findMinPositiveNumber([...numbersArr]);

    // In số chẵn cuối cùng ra màn hình
    selEle('hienThiSoChanCuoiCung').innerHTML = '👉 Số chẵn cuối cùng là: ' + findLastEvenNumber([...numbersArr]);

    // In sắp xếp tăng dần ra màn hình
    selEle('hienThiSapXepTangDan').innerHTML =
        '👉 Mảng sau khi sắp xếp: ' + hienThiChuoiSoFunc(ascendingNumbers([...numbersArr]));
});

// Hoán đổi hai số Event
selEle('btnDoiChoHaiSo').addEventListener('click', function () {
    // Lấy vị trí hai số
    const numPos1 = selEle('numPosition1').value * 1;
    const numPos2 = selEle('numPosition2').value * 1;

    // Kiểm tra chuỗi số
    if (
        numbersArr.length == 0 ||
        numPos1 < 0 ||
        numPos1 >= numbersArr.length ||
        numPos2 < 0 ||
        numPos2 >= numbersArr.length
    ) {
        alert('Giá trị không hợp lệ, vui lòng kiểm tra lại');
        return;
    }

    // Đổi chỗ hai số
    exchangeNumbers(numbersArr, numPos1, numPos2);

    // In chuỗi số đã hoán đổi ra màn hình
    selEle('hienThiDoiChoHaiSo').innerHTML = '👉 Mảng sau khi đổi: ' + hienThiChuoiSoFunc(numbersArr);
});

// Tìm số nguyên tố đầu tiên Event
selEle('btnSoNguyenDauTien').addEventListener('click', function () {
    selEle('hienThiSoNguyenDauTien').innerHTML = '👉 Số nguyên tố đầu tiên là ' + findFirstPrimeNumber([...numbersArr]);
});

// Đếm số nguyên Event
selEle('btnDemSoNguyen').addEventListener('click', function () {
    selEle('hienThiDemSoNguyen').innerHTML = countingInteger([...numbersArr])
        ? `👉 Có ${countingInteger([...numbersArr])} số nguyên`
        : '👉 Không có số nguyên nào';
});

selEle('btnSoSanhAmDuong').addEventListener('click', function () {
    selEle('hienThiSoSanhAmDuong').innerHTML = `👉 ${compareQuantityPositiveNegative([...numbersArr])}`;
});
