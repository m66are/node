import Express from "express";
import EventsRouter from "./routes/EventsRoute";
import PostRoutes from "./routes/PostsRoute";
import bodyParser from "body-parser";
import { PostMiddleware } from "./middlewares/PostsMiddleware";
import GlobalRouter from "./routes/GlobalRoute";
const app = Express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(Express.json());
app.set('view engine', 'ejs');
app.use(GlobalRouter);
app.use('/posts', PostMiddleware);


app.use('/posts', PostRoutes);


app.use('/events', EventsRouter)

app.listen(3000, (req, res) => {
    console.log('Runing on 3000');


});