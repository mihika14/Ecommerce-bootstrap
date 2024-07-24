import React from "react";
<<<<<<< HEAD
import Header from "@/components/header";
import { useState, useEffect } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [error, setError] = useState(" ");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("passwords don't match");
      return;
    }
    setError("");
=======

import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let token = Cookies.get("token");
    if (token) {
      router.push("/");
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    console.log(error);
    if (!passwordRegex.test(password)) {
      setError({
        password: "Password must be 8+ chars with upper, lower, and special.",
      });
      return;
    } else {
      setError({
        password: "",
      });
    }

    if (password !== confirmPassword) {
      setError({ confirmPassword: "Passwords don't match" });
      return;
    } else {
      setError({
        confirmPassword: "",
      });
    }
>>>>>>> c1ada96 (adding images of website)
    try {
      const response = await axios.post("http://localhost:8000/api/register/", {
        username: username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
      });
<<<<<<< HEAD
      Cookies.set("username", username);
      Cookies.set("password", password);
      router.push("/Login");
      alert("succesfully registered!");
=======
      if (response.status === 200) {
        Cookies.set("token", response.data.token);
        router.push("/login");
        alert("succesfully registered!");
      }
>>>>>>> c1ada96 (adding images of website)
    } catch (error) {
      console.log(error);
      setError("Registration failed");
    }
  };

  return (
    <>
<<<<<<< HEAD
      <Header />
=======
>>>>>>> c1ada96 (adding images of website)
      <section className="background-radial-gradient overflow-hidden">
        <style>
          {`
          .background-radial-gradient {
            background-color: hsl(218, 41%, 15%);
            background-image: radial-gradient(650px circle at 0% 0%,
              hsl(218, 41%, 35%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%),
            radial-gradient(1250px circle at 100% 100%,
              hsl(218, 41%, 45%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%);
          }

          #radius-shape-1 {
            height: 220px;
            width: 220px;
            top: -60px;
            left: -130px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }

          #radius-shape-2 {
            border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
            bottom: -60px;
            right: -110px;
            width: 300px;
            height: 300px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }

          .bg-glass {
            background-color: hsla(0, 0%, 100%, 0.9) !important;
            backdrop-filter: saturate(200%) blur(25px);
          }
        `}
        </style>

        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>
              <br />
              <br />
              <br />
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form
                    method="post"
                    id="signup-form"
                    onSubmit={handleRegister}
                  >
                    <div className="form-outline mb-4">
<<<<<<< HEAD
                      <label for="exampleInputEmail1">Username:</label>
                      <input
                        type="text"
                        class="form-control"
=======
                      <label htmlFor="exampleInputEmail1">Username:</label>
                      <input
                        type="text"
                        className="form-control"
>>>>>>> c1ada96 (adding images of website)
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Username"
                        value={username}
<<<<<<< HEAD
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <br />
                      <label for="exampleInputEmail1">First Name:</label>
                      <input
                        type="text"
                        class="form-control"
=======
                        required
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <br />
                      <label htmlFor="exampleInputEmail1">First Name:</label>
                      <input
                        type="text"
                        className="form-control"
>>>>>>> c1ada96 (adding images of website)
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter First Name"
                        value={firstName}
<<<<<<< HEAD
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <br />
                      <label for="exampleInputEmail1">Last Name:</label>
                      <input
                        type="text"
                        class="form-control"
=======
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <br />
                      <label htmlFor="exampleInputEmail1">Last Name:</label>
                      <input
                        type="text"
                        className="form-control"
>>>>>>> c1ada96 (adding images of website)
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Last Name"
                        value={lastName}
<<<<<<< HEAD
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <br />
                      <label for="exampleInputEmail1">Enter Email:</label>
                      <input
                        type="email"
                        class="form-control"
=======
                        required
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <br />
                      <label htmlFor="exampleInputEmail1">Enter Email:</label>
                      <input
                        className="form-control"
>>>>>>> c1ada96 (adding images of website)
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        value={email}
<<<<<<< HEAD
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <br />
                      <label for="exampleInputEmail1">Password:</label>
                      <input
                        type="text"
                        class="form-control"
=======
                        required
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <br />
                      <label htmlFor="exampleInputEmail1">Password:</label>
                      <input
                        type="password"
                        className="form-control"
>>>>>>> c1ada96 (adding images of website)
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                        value={password}
<<<<<<< HEAD
                        onChange={(e) => setPassword(e.target.value)}
                      />
=======
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {error.password && error.password}
                      </p>
                      <br />
                      <label htmlFor="exampleInputEmail1">
                        Confirm Password:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password again"
                        value={confirmPassword}
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {error.confirmPassword && error.confirmPassword}
                      </p>
>>>>>>> c1ada96 (adding images of website)
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>
                  </form>
                  <label className="form-check-label" htmlFor="form2Example33">
                    Already have an account
                  </label>
                  &rarr;
                  <p>
                    <a
                      href="Login"
                      style={{ color: "black", fontSize: "medium" }}
                    >
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

<<<<<<< HEAD
export default SignUpForm;
=======
export default SignUpForm;
>>>>>>> c1ada96 (adding images of website)
