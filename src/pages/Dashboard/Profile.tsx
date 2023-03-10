import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../components";
import { updateUser } from "../../features/user/userActions";
import { RootState, AppDispatch } from "../../app/store";

const Profile = () => {
  const dispatch: AppDispatch = useDispatch();

  const { isLoading, user } = useSelector((store: RootState) => store.user);
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;

    if (!name || !email || !lastName || !location) {
      toast.error("Please Fill Out All Fields");

      return;
    }

    dispatch(updateUser({ name, email, lastName, location }));
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>

        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />

          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />

          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />

          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />

          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
