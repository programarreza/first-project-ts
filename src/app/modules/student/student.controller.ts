import { Request, Response } from 'express';
import {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
} from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    console.log(student);
    // will cal service func to send this data
    const result = await createStudentIntoDB(student);
    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully ',
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await getAllStudentsFromDB();
    // send response
    res.status(200).json({
      success: true,
      message: 'Students is rendered successfully',
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await getSingleStudentFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is rendered successfully',
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export { createStudent, getAllStudents, getSingleStudent };
