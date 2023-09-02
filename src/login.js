import React, {useState} from 'react';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                      type='text'
                      id='username'
                      name='username'
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      value={formData.password}
                      onChange={handleInputChange} 
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;