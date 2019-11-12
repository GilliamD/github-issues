import React, { Component } from "react";
import { loadData } from "../utilities/loaddata";

import {Container, Box } from 'bloomer';

class Info extends Component {
    state = {
        issues: []
    };

    async componentDidMount() {
        const issues = await this.getJson();

        this.setState({
            issues
        })
    }


    getJson = async () => {
        const arr = await loadData(
            `https://api.github.com/repos/facebook/create-react-app/issues`
        );
        return arr
    };

    render() {
        const { issues } = this.state;
        return (
            <Container>
            <ul>
                { issues.map((issue, id) => {
                    return (
                        <Box>
                            <h1> key={`issue-${id}`}>
                            { issue.title }
                            </h1>
                            <h1>
                                <a href={ issue.html_url }>
                                { issue.url }
                                </a>
                            </h1> 
                            <h1>
                                { issue.body }
                            </h1>
                        </Box>
                        )}
            )
        }
        </ul>
        </Container>
        
        );
    }
}

export default Info;
