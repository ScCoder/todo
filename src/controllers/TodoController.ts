import Todo from '../model/todo'
import { TodoType } from "../types";

class TodoController {

    async getAll(req,res){
        try {
            const todos = await Todo.GetAll();
            res.json(todos);
        }
        catch(e){
            res.status(500).json(e);

        }
    }

    async create(req,res){
        try {                    
            const created = await Todo.Create(req.body);            

            if (created){
                res.json('{added:Ok}')
            }

        }
        catch(e){
            res.status(500).json(e);

        }
    }
}

export default new TodoController();