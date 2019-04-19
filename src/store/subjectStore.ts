import { SubjectModel } from "../model/subject";

export interface ISubjectState {
    subjectList:SubjectModel[],
}

export const INITIAL_STATE:ISubjectState={
    subjectList:[
        {
          "subject": "subject A",
          "status": 1
        },
        {
          "subject": "subject B",
          "status": 0
        },
        {
          "subject": "subject C",
          "status": 0
        },
        {
          "subject": "subject D",
          "status": 1
        },
        {
          "subject": "subject E",
          "status": 0
        },
        {
          "subject": "subject F",
          "status": 1
        },
        {
          "subject": "subject G",
          "status": 0
        },
        {
          "subject": "subject H",
          "status": 0
        },
        {
          "subject": "subject I",
          "status": 1
        },
        {
          "subject": "subject J",
          "status": 0
        },
        {
          "subject": "subject K",
          "status": 1
        },
        {
          "subject": "subject L",
          "status": 0
        }
      ]
}