import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const postsData = JSON.parse(req.body);
    console.log(postsData);

    return res.json({
      status: "Saving Post to DB",
      ...postsData
    });
  } else {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;

    return res.json(posts.slice(0, 20));
  }
};
