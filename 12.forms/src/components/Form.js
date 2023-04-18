import React, { useRef, useState } from 'react'

const UncontrolledFormWithUseRef = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        console.log(emailRef);
        const password = passwordRef.current.value;
        console.log('Email is ' + email)
        console.log('Password is ' + password)
        // alert(email + ' ' + password);
    }

    return (
        <div style={{ padding: '8px' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ padding: '8px' }}>
                    <label style={{ display: 'block' }} htmlFor="email">Email</label>
                    <input id="email" type="text" ref={emailRef} />
                </div>
                <div style={{ padding: '8px' }}>
                    <label style={{ display: 'block' }} htmlFor="password">Password</label>
                    <input id="password" type="password" ref={passwordRef} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

const UncontrolledFormUsingFormEvent = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        console.log('Email is ' + email)
        console.log('Password is ' + password)
    }

    return (
        <div style={{ padding: '8px' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ padding: '8px' }}>
                    <label style={{ display: 'block' }} htmlFor="email">Email</label>
                    <input id="email" type="text" />
                </div>
                <div style={{ padding: '8px' }}>
                    <label style={{ display: 'block' }} htmlFor="password">Password</label>
                    <input id="password" type="password" />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

const ControlledForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email is ' + email)
        console.log('Password is ' + password)
    }

    return (
        <div style={{ padding: '8px' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ padding: '8px' }}>
                    <label style={{ display: 'block' }} htmlFor="email">Email</label>
                    <input id="email" type="text" value={email} onChange={handleEmail} />
                </div>
                <div style={{ padding: '8px' }}>
                    <label style={{ display: 'block' }} htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={handlePassword} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

const OptimisedControlledForm = () => {

    const [form, setForm] = useState({ email: '', password: '', age: '' });

    const handleChange = (event) => {
        const updatedForm = { ...form, [event.target.id]: event.target.value }
        console.log(updatedForm)
        setForm(updatedForm)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email is ' + form.email)
        console.log('Password is ' + form.password)
    }

    return (
        <div style={{ padding: '8px' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ padding: '8px' }}>
                    <label style={{ display: 'block' }} htmlFor="email">Email</label>
                    <input id="email" type="text" value={form.email} onChange={handleChange} />
                </div>
                <div style={{ padding: '8px' }}>
                    <label style={{ display: 'block' }} htmlFor="password">Password</label>
                    <input id="password" type="password" value={form.password} onChange={handleChange} />
                </div>
                <div style={{ padding: '8px' }}>
                    <label style={{ display: 'block' }} htmlFor="age">Age</label>
                    <input id="age" type="text" value={form.age} onChange={handleChange} />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export { UncontrolledFormWithUseRef, UncontrolledFormUsingFormEvent, ControlledForm, OptimisedControlledForm } 