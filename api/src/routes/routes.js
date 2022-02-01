import { addNewPet, getPets } from "../controllers/controller";

const routes = (app) => {
    app.route('/pets')
        .get(getPets)
        
        .post(addNewPet);
    
}

export default routes;