import {subjectTodoAction} from "../action/subjectAction";
import { ISubjectState } from 'src/store/subjectStore';

export function rootReducer(state:ISubjectState,action):ISubjectState{
    switch(action.type){
        
        case subjectTodoAction.Add_NewSubject:
                // action.todo.subject=state.bugList.length+1;
                // action.todo.status="Unassigned";
                console.log("aaaa",action.todo,state)
                return Object.assign({},state,{
                    // subjectList:[state.subjectList,action.todo]
                    subjectList:state.subjectList.concat(Object.assign({},action.todo)),
                });     
              

        case subjectTodoAction.Delete_Subject:

        case subjectTodoAction.Update_Subject:

        case subjectTodoAction.List_Subject:

        }
    }