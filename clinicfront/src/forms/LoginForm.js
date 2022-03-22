
export default function LoginForm() {


    return (
        <section
            className="breadcrumb-bg pt-30 pb-30"
            data-background="img/blog/page-bg.jpg"
        >
            <div className="container">
                <div className="row" style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <form
                        action="..\finance-html\index.html"
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                        method="post"
                    >
                        <div
                            className="container"
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                        >
                            <br />
                            <h2 style={{ textAlign: "center" }}>Login</h2> <br />
                            <hr />
                            <label htmlFor="uname">
                                <b>Username</b>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                name="uname"
                                required=""
                            />
                            <label htmlFor="psw">
                                <b>Password</b>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="psw"
                                required=""
                            />
                            <a href="..\finance-html\index.html">
                                <button>Login</button>
                            </a>
                            <label>
                                <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
                                Remember me
                            </label>
                        </div>
                        <div className="container">
                            <button type="button" className="cancelbtn">
                                Cancel
                            </button>
                            <span className="psw">
                                Forgot <a href="#">password?</a>
                            </span>
                        </div>
                    </form>
                    <div className="col-lg-3 col-md-3 d-flex justify-content-start justify-content-md-end align-items-center">
                        <div className="page-breadcumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb ">
                                    <li className="breadcrumb-item"></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}