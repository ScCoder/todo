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
            console.log(req.body);               
            //const created = await Todo.Create({id:req.body.id, title:req.body.title});            
            
            const created = await Todo.Create({id:4, title:"WebPack"});            
            if (created){
                res.staus(200).json('{Ok}')
            }

        }
        catch(e){
            res.status(500).json(e);

        }
    }
}

export default new TodoController();