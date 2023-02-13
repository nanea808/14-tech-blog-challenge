$(() => {
  const login = async (event) => {
    event.preventDefault();
    console.log('loggin in');

    const email = $("#email1").val().trim();
    const password = $("#password1").val().trim();

    if (email && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location("/");
      } else {
        alert("Failed to log in.");
      }
    }
  };

  $("#login").submit(login);
});
