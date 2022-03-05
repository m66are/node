import express from "express";

export const PostMiddleware = async(req, res, next) => {
    const auth = false;


    if (isOpen()) {
        next()

    } else {
        console.log("Not authorized");
        res.status(400).send('Not authorized');


    }
}

function isOpen() {

    let currentdate = new Date();
    if (currentdate.getDay() <= 6) {
        console.log('DAY TRUUUUUUE');
        if (currentdate.getHours() < 13 && currentdate.getHours() > 8) {
            console.log('Morning TIME TRUUUUUUE');
            return true;
        } else
        if (currentdate.getHours() < 17 && currentdate.getHours() >= 14) {
            console.log('Afternoon TIME TRUUUUUUE');

            return true;
        } else {
            return false;
        }
    } else {
        return false
    }
}