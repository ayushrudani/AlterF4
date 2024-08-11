import { BashURL } from "./BashURL";

export const GetPosts = async (page) => {
  const response = await fetch(
    `${BashURL}/post/getAllPost?pageNo=${parseInt(page)}&pageSize=10`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
};
