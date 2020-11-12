function performStatistics()
{
    var str = document.getElementById("numInput").value;
    var numArray = str.split(" ");

    //convert array to int
    for(var i = 0; i < numArray.length; i++)
    {
        numArray[i] = parseInt(numArray[i]);
    }

    //check array length
    if(numArray.length < 5 || numArray.length > 20)
    {
        console.log("Input 5-20 numbers, each seperated by a space");
        alert("Input 5-20 numbers, each seperated by a space");
        return false;
    }

    //check number value
    for(var i = 0; i < numArray.length; i++)
    {
        if(numArray[i] < 0 || numArray[i] > 100)
        {
            console.log("Each number must be between 0-100");
            alert("Each number must be between 0-100");
            return false;
        }
    }

    //insertion sort for small array size
    for(var i = 1; i < numArray.length; i++)
    {
        var key = numArray[i];
        var j = i - 1;
        while(j >= 0 && numArray[j] > key)
        {
            numArray[j + 1] = numArray[j];
            j = j - 1;
        }
        numArray[j + 1] = key;
    }

    document.getElementById("sum").value = calcSum(numArray);
    document.getElementById("max").value = findMax(numArray);
    document.getElementById("min").value = findMin(numArray);
    document.getElementById("mean").value = calcMean(numArray).toFixed(2);
    document.getElementById("median").value = calcMedian(numArray);
    document.getElementById("mode").value = calcMode(numArray);
    document.getElementById("vari").value = calcVariance(numArray).toFixed(2);
    document.getElementById("stdDev").value = calcStdDev(numArray).toFixed(2);

    return false;
}

function calcMean(array)
{
    return calcSum(array) / array.length;
}

function calcMedian(array)
{
    if(array.length % 2 == 0)
    {
        var middle = array.length / 2;
        return (array[middle] + array[middle - 1]) / 2;
    }
    var middle = Math.floor(array.length / 2);
    return array[middle];
}

function calcMode(array)
{
    var curStreak = 1;
    var bestStreak = 1;
    var curMode = [];

    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == array[i + 1])
        {
            curStreak++;
        }
        else
        {
            curStreak = 1;
        }
        
        if(curStreak == bestStreak)
        {
            curMode[curMode.length] = array[i];
        }
        else if(curStreak > bestStreak)
        {
            bestStreak = curStreak;
            curMode = [];
            curMode[0] = array[i];
        }
    }
    var str = "";
    for(var i = 0; i < curMode.length; i++)
    {
        str = str.concat(curMode[i] + " ");
    }
    return str;
}

function calcStdDev(array)
{
    return Math.sqrt(calcVariance(array));
}

function calcSum(array)
{
    var sum = 0;
    for(var i = 0; i < array.length; i++)
    {
        sum += array[i];
    }
    return sum;
}

function calcVariance(array)
{
    var tempArray = [...array];
    var mean = calcMean(tempArray);
    for(var i = 0; i < tempArray.length; i++)
    {
        tempArray[i] = Math.pow((tempArray[i] - mean), 2);
    }
    var vari = calcMean(tempArray);
    return vari;
}

function findMax(array)
{
    var max = array[0];
    for(var i = 1; i < array.length; i++)
    {
        if(max < array[i])
        {
            max = array[i];
        }
    }
    return max;
}

function findMin(array)
{
    var min = array[0];
    for(var i = 1; i < array.length; i++)
    {
        if(min > array[i])
        {
            min = array[i];
        }
    }
    return min;
}