import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
                <h2> please register</h2>
                <form>
                    <input type="email" />
                    <br />
                    <input type="password" />
                    <input type="submit" value="Submit" />

                </form>
                <Link to="/login">Already Register </Link>
        </div>
    );
};

export default Register;