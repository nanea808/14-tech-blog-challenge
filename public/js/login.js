$(() => {
  const login = async (event) => {
    event.preventDefault();

    const email = $("#email1").val().trim();
    const password = $("#password1").val().trim();

    if (email && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        console.log('logged in!');
        document.location = "/";
      } else {
        alert("Failed to login.");
      }
    }
  };

  const signUp = async (event) => {
    event.preventDefault();

    const username = $("#inputUsername").val().trim();
    const email = $("#email2").val().trim();
    const password = $("#password2").val().trim();

    if (username && email && password) {
      const response = await fetch("api/users", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        console.log('signed up!');
        document.location = "/";
      } else {
        alert("Failed to sign up.");
      }
    }
  };

  $("#login").submit(login);
  $("#signUp").submit(signUp);
});
