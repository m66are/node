import  Express  from "express";
import EventsRouter from "./routes/EventsRoute";
import PostRoutes from "./routes/PostsRoute";
import bodyParser from "body-parser";
const app = Express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(Express.json());
app.use('/posts', PostRoutes);
app.use('/events', EventsRouter)

app.listen(3000, (req, res) => {
    console.log('Runing on 3000');

    
});
