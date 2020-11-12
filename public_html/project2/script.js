function validateForm()
{
    alert("This is a test message");
    if(!validateControl(document.getElementById("zip").value, "zipCode", 5))
    {
        console.log("Invalid Zip");
        alert("Invalid Zip");
        return false;
    }

    if(!validateEmail(document.getElementById("email").value))
    {
        console.log("Invalid Email");
        alert("Invalid Email");
        return false;
    }

    if(!validateCreditCard(document.getElementById("cardNumber").value))
    {
        console.log("Invalid Card Number");
        alert("Invalid Card Number");
        return false;
    }

    if(!validateControl(document.getElementById("cvv2/cvc").value, "cvv2/cvc", 3))
    {
        console.log("Invalid CVV2/CVC");
        alert("Invalid CVV2/CVC");
        return false;
    }

    if(!validateState(document.getElementById("stateSelect").value))
    {
        console.log("Invalid State Selection");
        alert("Invalid State Selection");
        return false;
    }

    if(!validateDate(document.getElementById("expirationDate").value))
    {
        console.log("Invalid Expiration Date");
        alert("Invalid Expiration Date");
        return false;
    }

    console.log("Payment Submitted");
    alert("Payment Submitted");

    return false;
}

function testLength(value, length)
{
    if(value != length)
    {
        return false;
    }
    return true;
}

function testNumber(value)
{
    return !isNaN(value);
}

function validateControl(control, name, length)
{
    if(name == "zipCode")
    {
        if(!testLength(control.length, length))
        {
            console.log("Zip failed testLength()");
            alert("Zip failed testLength()");
            return false;
        }
        if(!testNumber(control))
        {
            console.log("Zip failed testNumber()");
            alert("Zip failed testNumber()");
            return false;
        }
    }
    else
    {
        if(!testLength(control.length, length))
        {
            console.log("CVV2/CVC failed testLength()");
            alert("CVV2/CVC failed testLength()");
            return false;
        }
        if(!testNumber(control))
        {
            console.log("CVV2/CVC failed testNumber()");
            alert("CVV2/CVC failed testNumber()");
            return false;
        }
    }
    return true;
}

function validateCreditCard(value)
{
    value = value.replace(/\s+/g, '');
    //value = parseInt(value);
    if(!testNumber(value))
    {
        console.log("cardNumber failed testNumber()");
        alert("cardNumber failed testNumber()");
        return false;
    }
    if(value.charAt(0) == 3)
    {
        if(!testLength(value.length, 15))
            {
                console.log("cardNumber failed testLength()");
                alert("cardNumber failed testLength()");
                return false;
            }
    }
    else if(value.charAt(0) == 4 || value.charAt(0) == 5 || value.charAt(0) == 6)
    {
        if(!testLength(value.length, 16))
            {
                console.log("cardNumber failed testLength()");
                alert("cardNumber failed testLength()");
                return false;
            }
    }
    else
    {
        console.log("cardNumber failed 1st Digit check");
        alert("cardNumber failed 1st Digit check");
        return false;
    }
    return true;
}

function validateDate(value)
{
    var today = new Date();
    var expirationDate = value.split("-");
    if(expirationDate[0] < today.getFullYear())
    {
        console.log("expirationDate failed Year check");
        alert("expirationDate failed Year check");
        return false;
    }
    if(expirationDate[1] < today.getMonth())
    {
        console.log("expirationDate failed Month check");
        alert("expirationDate failed Month check");
        return false;
    }
    if(expirationDate[2] <= today.getDate())
    {
        console.log("expirationDate failed Day check");
        alert("expirationDate failed Day check");
    }
    return true;
}

function validateEmail(value)
{
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailRegex.test(value))
    {
        console.log("Email failed emailRegex.test()");
        alert("Email failed emailRegex.test()");
        return false
    }
    return true;
}

function validateState(value)
{
    if(value == "default")
    {
        console.log("stateSelect failed defaultCheck");
        alert("stateSelect failed defaultCheck");
        return false;
    }
    return true;
}