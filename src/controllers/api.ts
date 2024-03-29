import { Application, Request, Response } from "express";

import CoursesData from "../../data/courses.json";

export const loadApiEndpoints = (app: Application): void => {
	app.get("/api", (req: Request, res: Response) => {
		return res.status(200).send(CoursesData);
	});
	app.get("/api1", (req: Request, res: Response) => {
		return res.status(404).send(CoursesData);
	});
	app.get("/api2", (req: Request, res: Response) => {
		return res.status(404).send(CoursesData);
	});
};
