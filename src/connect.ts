import mongoose from "mongoose";

export default (dbConnectionString: string) => {
  const connect = () => {
    mongoose
      .connect(dbConnectionString, { useNewUrlParser: true })
      .then(() => {
        return console.log(`Succesfully connected to ${dbConnectionString}`);
      })
      .catch((error) => {
        console.log("Error connecting to database : ", error);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};
