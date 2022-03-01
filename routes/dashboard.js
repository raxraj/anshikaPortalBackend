const router = require("express").Router();
const { isAuthenticated } = require("../functions/authFunctions") 

router.post("/liveReporting", (req,res) => {
    const attendance = require("../DATA/attendance.json")
    let anshikaPresentCount = 0;
    let anshikaAbsentCount = 0;
    let anshikaTotalCount = 0;

    let abhishekPresentCount = 0;
    let abhishekAbsentCount = 0;
    let abhishekTotalCount = 0;

    attendance.anshika.map( attn => {
        if(attn.status === "P"){
            anshikaPresentCount++;
        } else {
            anshikaAbsentCount++;
        }
        anshikaTotalCount++;
    })
    attendance.abhishek.map( attn => {
        if(attn.status === "P"){
            abhishekPresentCount++;
        } else {
            abhishekAbsentCount++;
        }
        abhishekTotalCount++;
    })
    return res.json({
        anshika: { presentCount: anshikaPresentCount, absentCount: anshikaAbsentCount, totalCount: anshikaTotalCount},
        abhishek: { presentCount: abhishekPresentCount, absentCount: abhishekAbsentCount, totalCount: abhishekTotalCount }
    });
})


module.exports = router;