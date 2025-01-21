// async function fetchData() {
//   try{
//     const response = await fetch ("https://api.example.com/data&#39");
//     const data = await response.json();
//     console.log(data);
//   } catch (error){
//     console.error("Hiba történt:", error);
//   }
// }

async function GetAllPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`Hiba a lekérdezés során: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Hiba: ${err.message}`);
  }
}

async function GetPostById(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error(`Hiba a lekérdezés során: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Hiba: ${err.message}`);
  }
}

async function CreatePost(postData) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`Hiba a létrehozás során: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Hiba: ${err.message}`);
  }
}

async function UpdatePost(id, updatedData) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`Hiba a frissítés során: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Hiba: ${err.message}`);
  }
}

async function PatchPost(id, partialData) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(partialData),
    });

    if (!response.ok) {
      throw new Error(`Hiba a részleges frissítés során: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Hiba: ${err.message}`);
  }
}

async function DeletePost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Hiba a törlés során: ${response.status}`);
    }
    return { message: "A bejegyzés sikeresen törölve." };
  } catch (err) {
    console.error(`Hiba: ${err.message}`);
  }
}

async function foprogram() {
  const allPosts = await GetAllPosts();
  console.log("Összes bejegyzés:", allPosts);
  const singlePost = await GetPostById(1);
  console.log("Egy bejegyzés:", singlePost);
  const newPost = await CreatePost({
    title: "Új bejegyzés",
    body: "Ez egy teszt bejegyzés.",
    userId: 1,
  });
  console.log("Létrehozott bejegyzés:", newPost);
  const updatedPost = await UpdatePost(1, {
    title: "Frissített bejegyzés",
    body: "Ez a bejegyzés frissítve lett.",
    userId: 1,
  });
  console.log("Frissített bejegyzés:", updatedPost);
  const patchedPost = await PatchPost(1, {
    title: "Részlegesen frissített bejegyzés",
  });
  console.log("Részlegesen frissített bejegyzés:", patchedPost);
  const deleteResponse = await DeletePost(1);
  console.log(deleteResponse);
}

foprogram();

