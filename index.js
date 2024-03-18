const express = require("express");
const app = express();

const port =3000;

const reverseString =(str) => {
const reversedString = str.split("").reduce((acc, char) => char + acc, ""); 
return String(reversedString)
}

app.get("/reverseString", (req, res)=>{
    const stringToBeReversed = String(req.query.string);
    const result = reverseString(stringToBeReversed);
    res.json({
        data : result,
        statuscode: 200
    }
    )
})
app.listen(port, () =>{
    console.log("listening to port:" + port)
})
