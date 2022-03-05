import express from "express";

const GlobalRouter = express.Router();
GlobalRouter.get('/', (req, res) => {
    var persons = [
        { name: 'Sammy', organization: "Google", birth_year: 2012 },
        { name: 'Tux', organization: "Linux", birth_year: 1996 },
        { name: 'Moby Dock', organization: "Apple", birth_year: 2013 }
    ];
    var simpleText = "GMC Checkpoint ";

    res.render("../views/pages/index", {
        persons: persons,
        simpleText: simpleText

    })
});
GlobalRouter.get('/about', (req, res) => {
    res.render("../views/pages/about")

});


export default GlobalRouter;