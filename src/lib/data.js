import { Post, User } from "./models.js";
import { connectTODB } from "./utils.js";
import { unstable_noStore as noStore } from "next/cache";
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: ".....", userId: 1 },
//   { id: 2, title: "Post 2", body: ".....", userId: 1 },
//   { id: 3, title: "Post 3", body: ".....", userId: 2 },
//   { id: 4, title: "Post 4", body: ".....", userId: 2 },
// ];
export const getPosts = async () => {
  try {
    connectTODB();
    const posts = await Post.find({});
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectTODB();

    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Fetch post");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectTODB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Fetch user");
  }
};

export const getUsers = async (id) => {
  try {
    connectTODB();
    const users = await User.find({});
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Fetch users");
  }
};
