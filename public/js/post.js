$(() => {
  const post = async (event) => {
    event.preventDefault();
    
    const title = $("#titleInput").val().trim();
    const content = $("#content1").val().trim();

    if (title && content) {
      const response = await fetch("/api/users/post", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        console.log("posted to blog!");
        document.location = "/";
      } else {
        alert("Post to blog failed.");
      }
    }
  };

  $("#blogPostForm").submit(post);
});


