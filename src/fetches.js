export const fetchUsers = async () => {
  console.log("clicked");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const fetchCurrentUser = async (id) => {
  console.log("clicked");
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
