import { data } from "./constants/data.js";
import News from "./model/news-schema.js";

const DefaultData = async () => {
  try {
    // await News.deleteMany({});
    await News.insertMany(data);
    console.log("Data imported successfully");
  } catch (error) {
    console.log("Error ", error.message);
  }
};
export default DefaultData;
