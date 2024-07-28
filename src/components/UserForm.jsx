import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserForm() {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        address: '',
        age: '',
        phone: '',
        username: '',
        password: ''
    });

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/users/${id}`)
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user data', error);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = id ? `http://localhost:8080/users/${id}/edit` : 'http://localhost:8080/users/new';
        const method = id ? 'post' : 'post';

        axios({
            method,
            url,
            data: user
        })
        .then(response => {
            onSave();
        })
        .catch(error => {
            console.error('Error saving user data', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name:</label>
                <input
                    type="text"
                    name="fullName"
                    value={user.fullName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save</button>
        </form>
  )
}

export default UserForm