import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim === ""
    ) {
      res.status(422).json({ message: "Invalid Input..." });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://as_simform:BV25HnwDrp2W8Hzh@cluster0.ze4ag0i.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(201).json({ message: "Can't connect to database." });
      return;
    }
    const db = client.db();

    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(201).json({ message: "Storing message failed!" });
      return;
    }
    console.log(newMessage);
    client.close();
    res
      .status(201)
      .json({ message: "Successfully saved!", message: newMessage });
  }
}
