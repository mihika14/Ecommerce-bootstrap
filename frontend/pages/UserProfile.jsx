import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/user-profile/",
          {
            auth: {
<<<<<<< HEAD
              username: "admin",
              password: "admin1",
=======
              username: username,
              password: password,
>>>>>>> c1ada96 (adding images of website)
            },
          }
        );

        // Assuming we are fetching data for the user with id 1
        const user = response.data.find((user) => user.id === 1);
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  const {
    user: { username, email, first_name, last_name },
    bio,
    phone_number,
    date_of_birth,
    profile_picture,
  } = userData;

  return (
    <div className="container-xl px-4 mt-4">
      <nav className="nav nav-borders">
        <Link href="/order" passHref>
          Previous orders
        </Link>
      </nav>
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              <img
                className="img-account-profile rounded-circle mb-2"
                src={profile_picture || "https://via.placeholder.com/150"}
                alt="Profile"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Username (how your name will appear to other users on the
                    site)
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder={username || "Not provided by user"}
                    readOnly
                  />
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFirstName">
                      First name
                    </label>
                    <input
                      className="form-control"
                      id="inputFirstName"
                      type="text"
                      placeholder={first_name || "Not provided by user"}
                      readOnly
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLastName">
                      Last name
                    </label>
                    <input
                      className="form-control"
                      id="inputLastName"
                      type="text"
                      placeholder={last_name || "Not provided by user"}
                      readOnly
                    />
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputBio">
                      Bio
                    </label>
                    <input
                      className="form-control"
                      id="inputBio"
                      type="text"
                      placeholder={bio || "Not provided by user"}
                      readOnly
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputDateOfBirth">
                      Date of birth
                    </label>
                    <input
                      className="form-control"
                      id="inputDateOfBirth"
                      type="text"
                      placeholder={
                        date_of_birth
                          ? new Date(date_of_birth).toLocaleDateString()
                          : "Not provided by user"
                      }
                      readOnly
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder={email || "Not provided by user"}
                    readOnly
                  />
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder={phone_number || "Not provided by user"}
                      readOnly
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
