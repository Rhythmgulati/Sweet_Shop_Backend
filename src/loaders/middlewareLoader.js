export const middlewareLoader = (app) => {
    app.use(express.json());   
    app.use(express.urlencoded({ extended: true }));
    
}