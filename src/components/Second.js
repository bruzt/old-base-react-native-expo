import React, { Component } from 'react';
import styled from 'styled-components/native';

export default class Home extends Component {

    render() {
        return (
            <Container>

                <Text>Second page</Text>

            </Container>
        );
    }
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`

`;