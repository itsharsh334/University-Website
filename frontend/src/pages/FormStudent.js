import "bootstrap/dist/css/bootstrap.min.css";
import { useState, forwardRef, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "../components/Navbar.css";
import { Backdrop, CircularProgress } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Home() {
  const [open5, setOpen5] = useState(false);
  // const bringspinny = () => {
  //   setOpen5(true);
  //   setTimeout(() => {
  //     setOpen5(false);
  //   }, 3000);
  // };
  const [open1, setOpen1] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [id1, setID] = useState();
  const [inpval, setINP] = useState({
    name: "",
    branch: "",
    email: "",
    mobile: "",
    usn: "",
    gender: "",
  });
  const [updatedPost, setUpdatedPost] = useState({
    name: "",
    branch: "",
    email: "",
    mobile: "",
    usn: "",
    gender: "",
  });
  const getdata = () => {
    setOpen5(true);
    console.log("got data from beforeee egetdata, this is inside getdata");
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setUserdata(res.data);
        setOpen5(false);
      })
      .catch((err) => console.log(err));
    console.log("got data from afterrrr getdata, this is inside getdata");
    // bringspinny();
  };
  // const getdata = async () => {
  //   const res = await fetch("/student", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await res.json();
  //   // console.log(data);

  //   if (res.status === 422 || !data) {
  //     console.log("error ");
  //   } else {
  //     setUserdata(data);
  //     console.log("got data from getdata, this is inside getdata");
  //   }
  // };

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const setupdata = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // console.log(e.target._id);
    const { name, value } = e.target;
    // console.log(id1 + " trial");
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
    setUpdatedPost((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const addinpdata = async (e) => {
    e.preventDefault();
    getdata();
    console.log("getdata in addinpdata before await without new entry added");

    setShow(false);
    const { name, branch, email, mobile, usn, gender } = inpval;

    const res = await fetch("/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        branch,
        email,
        mobile,
        usn,
        gender,
      }),
    });
    // .then((response) => response.json)
    // .then((data) => console.log(data));
    // .then((response) => response.json)
    // console.log(res);
    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      // if (res.status === 422) {
      console.log("error data empty or 422");
      setOpen1(true);
    } else {
      // history.push("/");
      // setUdata(data);
      setOpen(true);
      console.log("data added");
    }
    getdata();
    console.log("getdata in addinpdata after await and new entry added");
  };
  // const createPost = (e) => {
  //   e.preventDefault();
  //   setShow(false);
  //   axios
  //     .post("/create", inpval)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  //   getdata();
  // };
  const [getuserdata, setUserdata] = useState([]);
  const [udata, setUdata] = useState(false);

  // useEffect(() => {
  //   getdata();
  //   console.log("getdata in useeffect");
  // }, []);
  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setUserdata(res.data);
      })
      .catch((err) => console.log(err));
  }, [getuserdata]);

  const [open, setOpen] = useState(false);

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  };
  const [show, setShow] = useState(false);
  const editPost = (e) => {
    setUdata(true);
    console.log(e);
    setID(e._id);
    setINP((preval) => {
      return {
        ...preval,
        // [name]: value,
        name: e.name,
        branch: e.branch,
        gender: e.gender,
        mobile: e.mobile,
        email: e.email,
        usn: e.usn,
      };
    });
    setUpdatedPost({
      name: e.name,
      branch: e.branch,
      gender: e.gender,
      mobile: e.mobile,
      email: e.email,
      usn: e.usn,
    });
    console.log(updatedPost);
    // setUpdatedPost(inpval);
    // console.log(inpval);
    setShow(true);
  };
  const handleClose = () => {
    // setOpen3(true);
    setUdata(false);
    setShow(false);
  };
  const handleShow = () => {
    setINP((preval) => {
      return {
        ...preval,
        // [name]: value,
        name: "",
        branch: "",
        gender: "",
        mobile: "",
        email: "",
        usn: "",
      };
    });
    setShow(true);
  };
  const deleteone = (id) => {
    console.log(id);
    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setOpen2(true);
    getdata();
    console.log("getdata after deleteone");
  };
  const updatePost = (e) => {
    e.preventDefault();
    console.log(updatedPost);
    console.log("updated2");
    console.log(id1);
    axios
      .put(`/update/${id1}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log("updated3");
    setShow(false);
    setUdata(false);
    console.log("updated4");
    setOpen3(true);
    getdata();
    console.log("getdata after update post");
  };
  return (
    <div className="pad5">
      <div className="container-fluid pad5">
        <div className="shadow-lg p-3 mb-5 mt-5 bg-body rounded">
          <div className="row">
            <div
              className="student-heading text-gred"
              style={{ color: "green" }}
            >
              <h2>
                <b>Student Details</b>
              </h2>
            </div>
            <div className="col-sm-2 offset-sm-10 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add New Student
              </Button>
            </div>
          </div>
          <div className="row pad4">
            <div className="table-responsive ">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name </th>
                    <th>Branch</th>
                    <th>PhoneNumber</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {getuserdata.length !== 0 ? (
                    getuserdata.map((person, id) => {
                      return (
                        <tr key={id}>
                          <td>{id + 1}</td>
                          <td>{person.name}</td>
                          <td>{person.branch}</td>
                          <td>{person.mobile}</td>
                          <td>{person.email}</td>
                          <td>{person.gender}</td>
                          <td>
                            {/* <button
                            className="view"
                            title="View"
                            data-toggle="tooltip"
                            style={{ color: "#10ab80" }}
                          >
                            <i className="material-icons">&#xE417;</i>
                          </button> */}
                            <button
                              className="edit"
                              title="Edit"
                              data-toggle="tooltip"
                              onClick={() => {
                                editPost(person);
                              }}
                            >
                              <i className="material-icons">&#xE254;</i>
                            </button>
                            <button
                              className="delete"
                              title="Delete"
                              data-toggle="tooltip"
                              onClick={() => deleteone(person._id)}
                              type="button"
                              // onClick={handleDelete}
                            >
                              <i className="material-icons">&#xE872;</i>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="7">
                        <h1 style={{ textAlign: "center", color: "red" }}>
                          No data available
                        </h1>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* <!--- Model Box ---> */}
          <div className="model_box">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add Record</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form
                // method="get"
                // id="form22"
                // onSubmit={(e) => {
                //   e.preventDefault();
                //   var i = 0;
                //   for (i = 0; i < 6; i++) console.log(e.target[i].value);
                //   setShow(false);
                //   handleClick();
                // }}
                >
                  <div className="form-group">
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="In1"
                      placeholder="Enter Name"
                      value={inpval.name}
                      name="name"
                      onChange={udata ? setupdata : setdata}
                    />
                  </div>
                  <div className="form-group mt-3 ">
                    <label
                      className="mt-1 mr-3"
                      htmlFor="inlineFormCustomSelectPref"
                    >
                      Branch
                    </label>
                    <select
                      required
                      className="form-select my-2 mr-sm-2"
                      id="In2"
                      value={inpval.branch}
                      onChange={udata ? setupdata : setdata}
                      name="branch"
                    >
                      <option value="CSE">CSE</option>
                      <option value="EEE">EEE</option>
                      <option value="Civil">Civil</option>
                      <option value="ENI">ENI</option>
                      <option value="Mech">Mech</option>
                    </select>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      required
                      type="email"
                      className="form-control"
                      id="In3"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email"
                      value={inpval.email}
                      onChange={udata ? setupdata : setdata}
                      name="email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      required
                      type="number"
                      className="form-control"
                      id="In4"
                      placeholder="Enter Phone"
                      value={inpval.mobile}
                      onChange={udata ? setupdata : setdata}
                      name="mobile"
                      // inputMode="numeric"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="In5"
                      placeholder="Enter Unique Service Name"
                      value={inpval.usn}
                      onChange={udata ? setupdata : setdata}
                      name="usn"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="In6"
                      placeholder="Enter Gender"
                      value={inpval.gender}
                      onChange={udata ? setupdata : setdata}
                      name="gender"
                    />
                  </div>
                  {/* <div className="form-group mt-3" onChange={udata?setupdata:setdata}>
                    <div className="form-check form-check-inline">
                      <input
                        required
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="Male"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        required
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="Female"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Female
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        required
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="Not Disclosed"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Prefer Not to Say
                      </label>
                    </div>
                  </div> */}
                  <div className="buttondiv2">
                    <button
                      type="submit"
                      className="btn btn-success m-2 buttondivb"
                      onClick={udata ? updatePost : addinpdata}
                      before
                      change
                      // onClick={udata ? updatePost : createPost}
                    >
                      {udata ? "Update" : "Submit"}
                    </button>
                    <button
                      onClick={handleClose}
                      type="button"
                      className="btn btn-danger m-2 buttondiva"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>

            {/* Model Box Finsihs */}
          </div>
          <div>
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose1}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={handleClose1}
                severity="success"
                sx={{ width: "100%" }}
              >
                Form {udata ? "updated" : "Submitted"} Successfully!
              </Alert>
            </Snackbar>
            <Snackbar
              open={open1}
              autoHideDuration={3000}
              onClose={handleClose1}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={handleClose1}
                severity="error"
                sx={{ width: "100%" }}
              >
                email already exists or no coloumn can be empty
              </Alert>
            </Snackbar>
            <Snackbar
              open={open2}
              autoHideDuration={3000}
              onClose={handleClose1}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={handleClose1}
                severity="success"
                sx={{ width: "100%" }}
              >
                Data deleted Successfully
              </Alert>
            </Snackbar>
            <Snackbar
              open={open3}
              autoHideDuration={3000}
              onClose={handleClose1}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={handleClose1}
                severity="success"
                sx={{ width: "100%" }}
              >
                Data updated Successfully
              </Alert>
            </Snackbar>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open5}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
