import Express from "express";
import { getAllEvents } from "../controllers/EventsController";
const EventsRouter = Express.Router();

EventsRouter.get('/', getAllEvents)
export default EventsRouter;