
import { TodoType } from "../types";
import { pool } from "./db";



class Todo {
    async GetAll(){
       try{
            const res = await pool.query('SELECT id, title FROM public."TODOS";');
            return res.rows;
        }
        catch(e){
            console.log(e);
        }
    }

    async Create(todo: TodoType){
        try{
           await pool.query(`INSERT INTO public."TODOS"(id, title) VALUES ($1, $2);`, [todo.id,todo.title]);  
           return true;         
        }
        catch(e){
            console.log(e);
        }
    }


}

export default new Todo();