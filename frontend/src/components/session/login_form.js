import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/profile');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    componentWillUnmount() {
        this.props.clearModal();
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    handleDemo(e) {
        e.preventDefault();
        this.setState({
            email: "goalsetter@goals.com",
            password: "password"
        });

    
        let user = {
            email: "goalsetter@goals.com",
            password: "password"
        }
        
        setTimeout(this.props.login(user), 2000)
    }

    renderErrors() {
        let errors = Object.keys(this.state.errors)

        if (errors.length > 0) {
            return (
                <ul>
                    {errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {this.state.errors[error]}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        return (
            <div className='modal-background'
                onClick={this.props.clearModal}>
                <div className="session-form-container"
                    onClick={e => e.stopPropagation()}>
                    <h1>LOGIN</h1>
                    <form onSubmit={this.handleSubmit}
                        className="session-form">
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <input type="submit" value="Submit" />
                        <button className="demo-login-btn" onClick={this.handleDemo}>Demo Login</button>
                        {this.renderErrors()}
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);