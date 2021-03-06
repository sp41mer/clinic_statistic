import React from 'react'
import { Link } from 'react-router'

require('./../../../css/header/header.css');

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="logo three columns">
                        НИИ статистика
                    </div>
                    <div className="elements seven columns">
                        элементы
                    </div>
                    <div className="login two columns">
                        <button className="button">
                            <Link to="/login">Войти</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}