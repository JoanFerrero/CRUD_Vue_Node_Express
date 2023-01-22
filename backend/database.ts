import { connect } from "mongoose";

export const startConnection = async (): Promise<void> => {
  try {
    await connect("mongodb+srv://joan:1234joan1234@cluster0.6swopdo.mongodb.net/?retryWrites=true&w=majority");
  } catch (error) {
    console.error(error);
  }
};